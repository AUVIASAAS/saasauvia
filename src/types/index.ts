export type UserRole = 'admin' | 'doctor' | 'receptionist' | 'patient';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  phone?: string;
  active: boolean;
}

export interface Doctor extends User {
  specialty: string;
  licenseNumber: string;
  clinicIds: string[];
}

export interface Patient extends User {
  cpf: string;
  birthDate: Date;
  lastVisit?: Date;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  ownerId: string;
  createdAt: Date;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  clinicId: string;
  scheduledTime: Date;
  status: 'scheduled' | 'checked-in' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: Date;
  checkedInAt?: Date;
  startedAt?: Date;
  completedAt?: Date;
  notes?: string;
}

export interface QueueItem {
  id: string;
  appointmentId: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  status: 'waiting' | 'in-progress' | 'completed' | 'cancelled';
  priority: number;
  waitTime: number; // in minutes
  checkedInAt: Date;
}