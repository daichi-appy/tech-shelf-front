"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';

export async function getCSRFToken(){
  const res = await fetch('http://localhost:8080/csrf', {
    method: 'GET',
    credentials: 'include'
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [csrfToken, setCSRFToken] = useState('');

  useEffect(() => {
    getCSRFToken().then((res) => {
      setCSRFToken(res.csrfToken)
    })
  }, [])
  
  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'X-CSRF-Token': csrfToken as string
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
  
    if (response.ok) {
      console.log('User registered successfully');
    } else {
      const errorText = await response.text();
      console.error(errorText);
    }
  };

  return (
      <div className="min-h-screen flex items-center justify-center">
          <div className="p-8 bg-white shadow-md rounded-lg w-96">
              <h1 className="text-2xl font-bold mb-4">新規登録</h1>
              <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-600">ユーザー名</label>
                      <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600">メールアドレス</label>
                      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-600">パスワード</label>
                      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-600">パスワード確認</label>
                      <input type="password" id="confirm-password" name="confirm-password" className="mt-1 p-2 w-full border rounded-md" />
                  </div>
                  <div className="flex items-center justify-between">
                      <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">登録</button>
                      <Link href="/login" className='text-sm text-blue-500 hover:underline'>
                        ログインページへ
                      </Link>
                  </div>
              </form>
          </div>
      </div>
  );
}
