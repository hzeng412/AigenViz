import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/weed-pressure', label: 'Weed Pressure' },
    { path: '/crop-monitor', label: 'Crop Monitor' },
    { path: '/insights', label: 'Insights' },
    { path: '/settings', label: 'Settings' }
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-gray-100 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">AigenViz</h1>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.path} className="mb-2">
              <Link
                to={item.path}
                className={`block p-2 rounded ${
                  location.pathname === item.path
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;