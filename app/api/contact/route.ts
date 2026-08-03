import { NextResponse } from 'next/server';

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

    // Simulate backend processing & logging
    console.log(`[SBORTIX_BACKEND] New inquiry received [${inquiryId}]`, {
      name,
      email,
      company: company || 'N/A',
      service: service || 'General Audit',
      message: message || payload || '',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      inquiryId,
      message: `SUCCESS: DATA_RECEIVED [${inquiryId}]`,
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
