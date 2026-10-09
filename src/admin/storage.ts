import { Client, Meeting } from './types';

const CLIENTS_KEY = 'iffi_admin_clients';
const MEETINGS_KEY = 'iffi_admin_meetings';
const AUTH_KEY = 'iffi_admin_auth';

// Client Storage
export const clientStorage = {
  getAll: (): Client[] => {
    const data = localStorage.getItem(CLIENTS_KEY);
    return data ? JSON.parse(data) : [];
  },

  save: (clients: Client[]) => {
    localStorage.setItem(CLIENTS_KEY, JSON.stringify(clients));
  },

  add: (client: Client) => {
    const clients = clientStorage.getAll();
    clients.push(client);
    clientStorage.save(clients);
    return clients;
  },

  update: (id: string, updates: Partial<Client>) => {
    const clients = clientStorage.getAll();
    const index = clients.findIndex(c => c.id === id);
    if (index !== -1) {
      clients[index] = { ...clients[index], ...updates, updatedAt: new Date().toISOString() };
      clientStorage.save(clients);
    }
    return clients;
  },

  delete: (id: string) => {
    const clients = clientStorage.getAll().filter(c => c.id !== id);
    clientStorage.save(clients);
    return clients;
  },

  getById: (id: string): Client | undefined => {
    return clientStorage.getAll().find(c => c.id === id);
  },
};

// Meeting Storage
export const meetingStorage = {
  getAll: (): Meeting[] => {
    const data = localStorage.getItem(MEETINGS_KEY);
    return data ? JSON.parse(data) : [];
  },

  save: (meetings: Meeting[]) => {
    localStorage.setItem(MEETINGS_KEY, JSON.stringify(meetings));
  },

  add: (meeting: Meeting) => {
    const meetings = meetingStorage.getAll();
    meetings.push(meeting);
    meetingStorage.save(meetings);
    return meetings;
  },

  update: (id: string, updates: Partial<Meeting>) => {
    const meetings = meetingStorage.getAll();
    const index = meetings.findIndex(m => m.id === id);
    if (index !== -1) {
      meetings[index] = { ...meetings[index], ...updates };
      meetingStorage.save(meetings);
    }
    return meetings;
  },

  delete: (id: string) => {
    const meetings = meetingStorage.getAll().filter(m => m.id !== id);
    meetingStorage.save(meetings);
    return meetings;
  },

  getByClientId: (clientId: string): Meeting[] => {
    return meetingStorage.getAll().filter(m => m.clientId === clientId);
  },

  getUpcoming: (): Meeting[] => {
    const now = new Date();
    return meetingStorage.getAll()
      .filter(m => new Date(`${m.date}T${m.time}`) > now && m.status === 'scheduled')
      .sort((a, b) => new Date(`${a.date}T${a.time}`).getTime() - new Date(`${b.date}T${b.time}`).getTime());
  },
};

// Auth Storage
export const authStorage = {
  isAuthenticated: (): boolean => {
    const data = localStorage.getItem(AUTH_KEY);
    if (!data) return false;
    const auth = JSON.parse(data);
    // Check if session is still valid (24 hours)
    const loginTime = new Date(auth.loginTime);
    const now = new Date();
    const hoursDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);
    return hoursDiff < 24;
  },

  login: () => {
    localStorage.setItem(AUTH_KEY, JSON.stringify({
      isAuthenticated: true,
      loginTime: new Date().toISOString(),
    }));
  },

  logout: () => {
    localStorage.removeItem(AUTH_KEY);
  },
};
