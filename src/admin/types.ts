// Types for Admin Panel

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'lead' | 'prospect' | 'active' | 'inactive';
  services: string[];
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface Meeting {
  id: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  date: string;
  time: string;
  duration: number; // in minutes
  type: 'discovery' | 'follow-up' | 'presentation' | 'review';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes: string;
  createdAt: string;
}

export interface AdminUser {
  isAuthenticated: boolean;
  loginTime: string;
}
