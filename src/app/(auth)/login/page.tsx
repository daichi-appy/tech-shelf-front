export default function Page() {
  return (
      <div className="min-h-screen flex items-center justify-center">
          <div className="p-8 bg-white shadow-md rounded-lg w-96">
              <h1 className="text-2xl font-bold mb-4">ログイン</h1>
              <form>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600">メールアドレス</label>
                      <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                  </div>
                  <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-600">パスワード</label>
                      <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
                  </div>
                  <div className="flex items-center justify-between">
                      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">ログイン</button>
                      <a href="#" className="text-sm text-blue-500 hover:underline">パスワードを忘れた方</a>
                  </div>
              </form>
          </div>
      </div>
  );
}

