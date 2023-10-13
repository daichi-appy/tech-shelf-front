function Header() {
  return (
      <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <div className="text-gray-900 font-bold text-xl">
                  TechShelf
              </div>
              <nav>
                  <ul className="flex space-x-4">
                      <li>
                          <a href="#" className="text-gray-600 hover:text-gray-800">テック</a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-600 hover:text-gray-800">ブック</a>
                      </li>
                      <li>
                          <a href="#" className="text-gray-600 hover:text-gray-800">ログイン</a>
                      </li>
                  </ul>
              </nav>
          </div>
      </header>
  );
}

export default Header;
