import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import authOptions from '@/app/lib/auth';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { isbn } = await request.json();

    if (!isbn) {
      return NextResponse.json({ message: 'ISBNが必要です' }, { status: 400 });
    }

    const payload = {
      uid: session.user.id,
      isbn,
    };

    const apiUrl = `${process.env.API_URL}/userBooks`;
    const apiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!apiResponse.ok) {
      return NextResponse.json({ message: '外部APIへのリクエストに失敗しました' }, { status: apiResponse.status });
    }

    return NextResponse.json({ message: 'ユーザーの本に追加されました', isbn });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'サーバーエラーが発生しました' }, { status: 500 });
  }
}
