import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Dashboard</h1>
          <Link
            to="/login"
            className="text-gray-600 hover:text-gray-900"
          >
            Cerrar sesión
          </Link>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Usuarios</h2>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Ingresos</h2>
            <p className="text-3xl font-bold text-green-600">$45,678</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Pedidos</h2>
            <p className="text-3xl font-bold text-purple-600">892</p>
          </div>
        </div>
      </main>
    </div>
  );
}
