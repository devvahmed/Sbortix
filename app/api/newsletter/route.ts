import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address provided.' },
        { status: 400 }
      );
    }

    console.log(`[SBORTIX_BACKEND] Newsletter subscription: ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Subscribed to Sbortix Technical Digest!',
    });
  } catch (error) {
    console.error('[SBORTIX_NEWSLETTER_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Subscription request failed.' },
      { status: 500 }
    );
  }
}
