import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-400">Dashboard</h1>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white"
          >
            Cerrar sesión
          </Link>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <h2 className="text-lg font-semibold mb-2 text-gray-300">Usuarios</h2>
            <p className="text-3xl font-bold text-blue-400">1,234</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <h2 className="text-lg font-semibold mb-2 text-gray-300">Ingresos</h2>
            <p className="text-3xl font-bold text-green-400">$45,678</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700">
            <h2 className="text-lg font-semibold mb-2 text-gray-300">Pedidos</h2>
            <p className="text-3xl font-bold text-purple-400">892</p>
          </div>
        </div>
      </main>
    </div>
  );
}
