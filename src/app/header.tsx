function Header() {
  return (
      <header className="bg-white bg-opacity-80 p-4 shadow-md backdrop-blur-md">
          <div className="container mx-auto flex justify-between items-center">
              <div className="text-gray-900 font-bold text-2xl">
                  Tech Shelf
              </div>
              <nav>
                  <ul className="flex space-x-4">
                      <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900 hover:underline">ログイン</a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900 hover:underline">新規登録</a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-700 hover:text-gray-900 hover:underline">ログアウト</a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

export default Header;
