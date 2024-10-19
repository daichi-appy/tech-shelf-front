import { NextRequest, NextResponse } from 'next/server';
import { fetchCsrfToken } from '@/utils/fetchCsrfToken';

export async function POST(req: NextRequest) {
  const csrfToken = await fetchCsrfToken();
  const { email, password } = await req.json();

  try {
    const response = await fetch(`${process.env.API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    console.error('Error posting to backend login:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
