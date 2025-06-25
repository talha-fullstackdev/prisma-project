import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
        <p className="text-gray-600">Manage users with the actions below</p>

        <div className="flex flex-col gap-4">
          <Link
            href="/addUser"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            ➕ Add User
          </Link>

          <Link
            href="/getUser"
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            👁️ See Users
          </Link>
        </div>
      </div>
    </div>
  );
}
