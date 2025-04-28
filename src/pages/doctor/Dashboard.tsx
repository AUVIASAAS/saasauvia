import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Clock, Calendar, CheckCircle, AlertCircle, User } from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Médico</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Status:</span>
          <Badge variant="success" className="px-3 py-1">Disponível</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">Pacientes na Fila</p>
                <p className="text-3xl font-bold text-gray-900">7</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <User className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <Button variant="primary" size="sm" fullWidth>
                Ver Fila
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">Consultas Hoje</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Realizadas: <span className="font-semibold">5</span></span>
                <span className="text-sm text-gray-500">Restantes: <span className="font-semibold">7</span></span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: "42%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">Tempo Médio</p>
                <p className="text-3xl font-bold text-gray-900">24 min</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-full">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-gray-500">Meta: <span className="font-semibold">20 min</span></span>
              <span className="text-orange-500">+4 min acima da meta</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Pacientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'Ana Paula Silva', time: '14:00', status: 'waiting', waitTime: 12 },
                  { name: 'Carlos Eduardo Martins', time: '14:20', status: 'waiting', waitTime: 5 },
                  { name: 'Beatriz Oliveira', time: '14:40', status: 'checkedIn', waitTime: 0 },
                  { name: 'Roberto Almeida', time: '15:00', status: 'scheduled', waitTime: 0 },
                  { name: 'Juliana Costa', time: '15:20', status: 'scheduled', waitTime: 0 },
                ].map((patient, index) => (
                  <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                        {patient.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{patient.name}</p>
                        <p className="text-sm text-gray-500">Agendado: {patient.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {patient.status === 'waiting' && (
                        <Badge variant="warning" className="flex items-center mr-4">
                          <Clock className="h-3 w-3 mr-1" />
                          {patient.waitTime} min
                        </Badge>
                      )}
                      
                      {patient.status === 'waiting' && (
                        <Button size="sm">Chamar</Button>
                      )}
                      
                      {patient.status === 'checkedIn' && (
                        <Badge variant="primary">Check-in realizado</Badge>
                      )}
                      
                      {patient.status === 'scheduled' && (
                        <Badge variant="default">Agendado</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Paciente Atual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-6 flex flex-col items-center bg-gray-50 rounded-lg border">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600 text-xl">
                  MR
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Maria Ribeiro</h3>
                <p className="text-gray-500">34 anos, Feminino</p>
                
                <div className="w-full mt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Início da consulta:</span>
                    <span className="font-medium text-gray-900">13:42</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tempo decorrido:</span>
                    <span className="font-medium text-gray-900">18 minutos</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Tipo de consulta:</span>
                    <span className="font-medium text-gray-900">Retorno</span>
                  </div>
                </div>
                
                <div className="mt-6 w-full">
                  <Button variant="primary" fullWidth>
                    Finalizar Consulta
                  </Button>
                  <Button variant="outline" fullWidth className="mt-2">
                    Pausar (5 min)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;