import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Users, Clock, AlertCircle, CheckCircle, XCircle, Search } from 'lucide-react';
import Input from '../../components/ui/Input';

const ReceptionDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard de Recepção</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Atendimento:</span>
          <Badge variant="success" className="px-3 py-1">Aberto</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">Na Fila de Espera</p>
                <p className="text-3xl font-bold text-gray-900">12</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <span className="text-gray-500">Tempo médio de espera:</span>
              <span className="text-gray-900 font-medium">18 min</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">Check-ins Hoje</p>
                <p className="text-3xl font-bold text-gray-900">32</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <span className="text-gray-500">Agendados hoje:</span>
              <span className="text-gray-900 font-medium">58</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">Consultas em Andamento</p>
                <p className="text-3xl font-bold text-gray-900">5</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-full">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center text-sm">
              <span className="text-gray-500">Médicos disponíveis:</span>
              <span className="text-gray-900 font-medium">7 / 8</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <CardTitle>Fila de Espera</CardTitle>
          <div className="mt-2 sm:mt-0 flex items-center">
            <Input
              placeholder="Buscar paciente..."
              className="max-w-xs"
              leftIcon={<Search className="h-4 w-4" />}
            />
            <Button className="ml-2" size="sm">
              Check-in
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-4 py-3">Paciente</th>
                  <th className="px-4 py-3">Médico</th>
                  <th className="px-4 py-3">Horário</th>
                  <th className="px-4 py-3">Tempo de Espera</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Ana Silva', doctor: 'Dr. Carlos Mendes', time: '13:30', wait: 25, status: 'waiting', priority: 1 },
                  { name: 'José Oliveira', doctor: 'Dra. Ana Silva', time: '13:45', wait: 15, status: 'waiting', priority: 0 },
                  { name: 'Maria Souza', doctor: 'Dr. Roberto Alves', time: '14:00', wait: 8, status: 'waiting', priority: 0 },
                  { name: 'Pedro Santos', doctor: 'Dra. Juliana Costa', time: '14:00', wait: 5, status: 'waiting', priority: 0 },
                  { name: 'Carla Ribeiro', doctor: 'Dr. Carlos Mendes', time: '14:15', wait: 0, status: 'in-progress', priority: 0 },
                  { name: 'Roberto Almeida', doctor: 'Dra. Juliana Costa', time: '14:30', wait: 0, status: 'checked-in', priority: 0 },
                ].map((patient, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600 mr-3">
                          {patient.name.charAt(0)}
                        </div>
                        <div>
                          {patient.name}
                          {patient.priority > 0 && (
                            <Badge variant="danger" className="ml-2">Prioritário</Badge>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">{patient.doctor}</td>
                    <td className="px-4 py-3">{patient.time}</td>
                    <td className="px-4 py-3">
                      {patient.status === 'waiting' ? (
                        <Badge 
                          variant={patient.wait > 20 ? 'danger' : patient.wait > 10 ? 'warning' : 'info'}
                          className="flex items-center"
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {patient.wait} min
                        </Badge>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {patient.status === 'waiting' && (
                        <Badge variant="warning">Aguardando</Badge>
                      )}
                      {patient.status === 'in-progress' && (
                        <Badge variant="primary">Em Atendimento</Badge>
                      )}
                      {patient.status === 'checked-in' && (
                        <Badge variant="success">Check-in Realizado</Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        {patient.status === 'waiting' && (
                          <>
                            <Button size="sm" variant="outline">
                              Priorizar
                            </Button>
                            <Button size="sm" variant="outline">
                              Reagendar
                            </Button>
                          </>
                        )}
                        {patient.status === 'checked-in' && (
                          <Button size="sm">
                            Chamar
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Médicos Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Dr. Carlos Mendes', specialty: 'Ortopedia', status: 'busy', currentPatient: 'Carla Ribeiro', time: '13:50' },
                { name: 'Dra. Ana Silva', specialty: 'Cardiologia', status: 'available', currentPatient: null, time: null },
                { name: 'Dr. Roberto Alves', specialty: 'Clínico Geral', status: 'busy', currentPatient: 'Leonardo Gomes', time: '14:05' },
                { name: 'Dra. Juliana Costa', specialty: 'Pediatria', status: 'available', currentPatient: null, time: null },
              ].map((doctor, index) => (
                <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{doctor.name}</p>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center">
                    {doctor.status === 'busy' ? (
                      <div className="text-right">
                        <Badge variant="warning">Em atendimento</Badge>
                        <p className="text-xs text-gray-500 mt-1">
                          Paciente: {doctor.currentPatient} • Início: {doctor.time}
                        </p>
                      </div>
                    ) : (
                      <Badge variant="success">Disponível</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Próximos Agendamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'Ricardo Lima', doctor: 'Dr. Carlos Mendes', time: '14:45', status: 'scheduled' },
                { name: 'Marcela Vieira', doctor: 'Dra. Ana Silva', time: '15:00', status: 'confirmed' },
                { name: 'Bruno Costa', doctor: 'Dr. Roberto Alves', time: '15:15', status: 'scheduled' },
                { name: 'Paula Ferreira', doctor: 'Dra. Juliana Costa', time: '15:30', status: 'confirmed' },
              ].map((appointment, index) => (
                <div key={index} className="p-4 border rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{appointment.name}</p>
                    <p className="text-sm text-gray-500">
                      {appointment.doctor} • {appointment.time}
                    </p>
                  </div>
                  <div className="flex items-center">
                    {appointment.status === 'scheduled' ? (
                      <Badge variant="default">Agendado</Badge>
                    ) : (
                      <Badge variant="primary">Confirmado</Badge>
                    )}
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

export default ReceptionDashboard;