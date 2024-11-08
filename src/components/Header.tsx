'use client';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

function Header() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center sticky top-0">
        <Link href="/">
          <div className="text-gray-900 font-bold text-xl">
            TechShelf
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/books">ブック</Link>
            </li>
            {session ? (
              <>
                <li>
                  <img
                    src={session.user?.image ?? '/default-avatar.png'}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full cursor-pointer"
                    onClick={() => setShowModal(!showModal)}
                  />
                </li>
                <li>
                  <button onClick={() => signOut()} className="text-gray-600 hover:text-gray-800">ログアウト</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => signIn('google')} className="text-gray-600 hover:text-gray-800">Googleでログイン</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* ログインモーダル */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">プロフィール</h2>
            <p>名前: {session?.user?.name}</p>
            <p>Email: {session?.user?.email}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => setShowModal(false)}>
              閉じる
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
