import Link from 'next/link';

function Header() {
  return (
      <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/">
              <div className="text-gray-900 font-bold text-xl">
                  TechShelf
              </div>
            </Link>
              <nav>
                  <ul className="flex space-x-4">
                      <li>
                          <a href="#" className="text-gray-600 hover:text-gray-800">テック</a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-600 hover:text-gray-800">ブック</a>
                      </li>
                      <li>
                        <Link href="/login">
                          ログイン
                        </Link>
                      </li>
                      <li>
                        <Link href="/signin">
                          新規登録
                        </Link>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

export default Header;
