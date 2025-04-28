import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  ClipboardList, 
  Settings, 
  LogOut,
  BarChart,
  Building,
  UserCog
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { role, logout } = useAuth();
  const location = useLocation();
  
  // Create different navigation menus based on user role
  const adminNavigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Usuários', href: '/admin/users', icon: Users },
    { name: 'Unidades', href: '/admin/clinics', icon: Building },
    { name: 'Médicos', href: '/admin/doctors', icon: UserCog },
    { name: 'Relatórios', href: '/admin/reports', icon: BarChart },
    { name: 'Configurações', href: '/admin/settings', icon: Settings },
  ];
  
  const doctorNavigation = [
    { name: 'Dashboard', href: '/doctor/dashboard', icon: LayoutDashboard },
    { name: 'Fila de Atendimento', href: '/doctor/queue', icon: Users },
    { name: 'Consultas', href: '/doctor/appointments', icon: Calendar },
    { name: 'Histórico', href: '/doctor/history', icon: ClipboardList },
  ];
  
  const receptionistNavigation = [
    { name: 'Dashboard', href: '/reception/dashboard', icon: LayoutDashboard },
    { name: 'Fila de Espera', href: '/reception/queue', icon: Users },
    { name: 'Agendamentos', href: '/reception/appointments', icon: Calendar },
    { name: 'Check-in', href: '/reception/checkin', icon: ClipboardList },
  ];
  
  // Select the appropriate navigation based on user role
  let navigation;
  switch (role) {
    case 'admin':
      navigation = adminNavigation;
      break;
    case 'doctor':
      navigation = doctorNavigation;
      break;
    case 'receptionist':
      navigation = receptionistNavigation;
      break;
    default:
      navigation = [];
  }
  
  return (
    <div className="h-full flex flex-col bg-blue-800 text-white w-64 fixed inset-y-0 left-0">
      <div className="flex items-center justify-center h-16 px-4 bg-blue-900">
        <h1 className="text-xl font-bold">AUVIA</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors
                  ${isActive 
                    ? 'bg-blue-700 text-white' 
                    : 'text-blue-100 hover:bg-blue-700'}
                `}
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-blue-700">
        <button
          onClick={logout}
          className="w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-blue-100 hover:bg-blue-700 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Sair
        </button>
      </div>
    </div>
  );
};

export default Sidebar;