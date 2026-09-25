import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, payload, message } = body;

    // Input Validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'USER_IDENTITY and SMTP_CONTACT are required.' },
        { status: 400 }
      );
    }

    const inquiryId = `INQ_${Date.now().toString(36).toUpperCase()}_${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // Backend logging
    console.log(`[SBORTIX_BACKEND] New inquiry received [${inquiryId}]`, {
      name,
      email,
      company: company || 'N/A',
      service: service || 'General Audit',
      message: message || payload || '',
      timestamp: new Date().toISOString(),
    });

    const contactMessage = message || payload || '';
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'contact@sbortix.com';

    // Send email using Resend
    let emailSent = false;
    let emailError = '';
    
    if (resend && process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_your_api_key_here') {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Sbortix Portal <inquiry@sbortix.com>',
          to: receiverEmail,
          subject: `New Lead Inquiry: ${name} [${service || 'General'}]`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #1f108e; margin-top: 0;">New Project Inquiry [${inquiryId}]</h2>
              <p>You have received a new contact submission from your website:</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 120px; border-bottom: 1px solid #edf2f7;">Name:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;">Email:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;">Company:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${company || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; border-bottom: 1px solid #edf2f7;">Service:</td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #edf2f7;">${service || 'General Audit'}</td>
                </tr>
              </table>
              
              <h3 style="color: #2d2d82; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Project Details / Message</h3>
              <p style="white-space: pre-wrap; background: #fafafd; padding: 15px; border-radius: 6px; border: 1px solid #edf2f7; color: #4a5568; line-height: 1.6;">${contactMessage || 'No message provided.'}</p>
              
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
              <p style="font-size: 11px; color: #a0aec0; text-align: center;">Submitted from Sbortix Core Portal • ${new Date().toLocaleString()}</p>
            </div>
          `,
        });

        if (error) {
          console.error('[RESEND_EMAIL_ERROR]', error);
          emailError = error.message;
        } else {
          emailSent = true;
          console.log(`[SBORTIX_BACKEND] Email transmitted successfully via Resend. ID: ${data?.id}`);
        }
      } catch (err: any) {
        console.error('[RESEND_EXCEPTION]', err);
        emailError = err.message || 'Unknown Resend error.';
      }
    } else {
      console.warn('[SBORTIX_BACKEND] Resend API Key is missing or default. Skipping email transmission.');
      emailError = 'API_KEY_NOT_CONFIGURED';
    }

    return NextResponse.json({
      success: true,
      inquiryId,
      emailSent,
      message: emailSent 
        ? `SUCCESS: INQUIRY_LOGGED_AND_TRANSMITTED [${inquiryId}]` 
        : `SUCCESS: INQUIRY_LOGGED_LOCAL [${inquiryId}] (Email skipped: ${emailError})`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[SBORTIX_BACKEND_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'CRITICAL_ERROR: Transmission payload failed.' },
      { status: 500 }
    );
  }
}
