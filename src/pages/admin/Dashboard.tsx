import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { BarChart, Users, Calendar, Clock, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Administrativo</h1>
        <div>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
            <option>Hoje</option>
            <option>Esta Semana</option>
            <option>Este Mês</option>
            <option>Trimestre</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white">
          <CardContent className="p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="bg-blue-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                12%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Total de Pacientes</h3>
              <p className="text-2xl font-semibold text-gray-900">1,248</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="bg-teal-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-teal-600" />
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                8%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Consultas Hoje</h3>
              <p className="text-2xl font-semibold text-gray-900">42</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="bg-indigo-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                <ArrowDown className="h-3 w-3 mr-1" />
                3%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Tempo Médio de Espera</h3>
              <p className="text-2xl font-semibold text-gray-900">18 min</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="bg-orange-100 p-3 rounded-full">
                <BarChart className="h-6 w-6 text-orange-600" />
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                <ArrowUp className="h-3 w-3 mr-1" />
                5%
              </span>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500">Satisfação de Pacientes</h3>
              <p className="text-2xl font-semibold text-gray-900">94%</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Desempenho dos Médicos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { doctor: 'Dra. Ana Silva', specialty: 'Cardiologia', patients: 18, rating: 4.9 },
                { doctor: 'Dr. Carlos Mendes', specialty: 'Ortopedia', patients: 15, rating: 4.7 },
                { doctor: 'Dra. Juliana Costa', specialty: 'Pediatria', patients: 22, rating: 4.8 },
                { doctor: 'Dr. Roberto Alves', specialty: 'Clínico Geral', patients: 12, rating: 4.6 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border-b last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{item.doctor}</p>
                    <p className="text-sm text-gray-500">{item.specialty}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{item.patients} pacientes</p>
                      <div className="flex items-center">
                        <span className="text-sm text-yellow-500">★</span>
                        <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Próximos Vencimentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Renovação de Licença de Software', date: '15/10/2025', amount: 'R$ 2.500,00', status: 'pending' },
                { name: 'Aluguel da Unidade Centro', date: '01/11/2025', amount: 'R$ 8.000,00', status: 'pending' },
                { name: 'Manutenção de Equipamentos', date: '10/11/2025', amount: 'R$ 1.200,00', status: 'pending' },
                { name: 'Assinatura de Serviços Cloud', date: '22/11/2025', amount: 'R$ 950,00', status: 'pending' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border-b last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">Vencimento: {item.date}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900">{item.amount}</span>
                    <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                      item.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'paid' ? 'Pago' : 'Pendente'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;