import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, TrendingUp, Clock, ArrowUpRight } from 'lucide-react';
import { clientStorage, meetingStorage } from './storage';
import { Client, Meeting } from './types';

export default function AdminDashboard() {
  const [clients, setClients] = useState<Client[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState<Meeting[]>([]);

  useEffect(() => {
    setClients(clientStorage.getAll());
    setMeetings(meetingStorage.getAll());
    setUpcomingMeetings(meetingStorage.getUpcoming().slice(0, 5));
  }, []);

  const stats = {
    totalClients: clients.length,
    activeClients: clients.filter(c => c.status === 'active').length,
    totalMeetings: meetings.length,
    upcomingMeetings: upcomingMeetings.length,
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Dashboard</h1>
        <p className="text-text-secondary">Welcome to IFFI Media Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-graphite border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-acid/10 flex items-center justify-center">
              <Users size={20} className="text-acid" />
            </div>
            <Link to="/admin/clients" className="text-text-muted hover:text-acid transition-colors">
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="text-2xl font-bold text-text-primary">{stats.totalClients}</p>
          <p className="text-sm text-text-secondary">Total Clients</p>
        </div>

        <div className="bg-graphite border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
              <TrendingUp size={20} className="text-green-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-text-primary">{stats.activeClients}</p>
          <p className="text-sm text-text-secondary">Active Clients</p>
        </div>

        <div className="bg-graphite border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center">
              <Calendar size={20} className="text-violet" />
            </div>
            <Link to="/admin/meetings" className="text-text-muted hover:text-acid transition-colors">
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="text-2xl font-bold text-text-primary">{stats.totalMeetings}</p>
          <p className="text-sm text-text-secondary">Total Meetings</p>
        </div>

        <div className="bg-graphite border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-lg bg-ice/10 flex items-center justify-center">
              <Clock size={20} className="text-ice" />
            </div>
          </div>
          <p className="text-2xl font-bold text-text-primary">{stats.upcomingMeetings}</p>
          <p className="text-sm text-text-secondary">Upcoming Meetings</p>
        </div>
      </div>

      {/* Upcoming Meetings */}
      <div className="bg-graphite border border-border rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-text-primary">Upcoming Meetings</h2>
          <Link to="/admin/meetings" className="text-sm text-acid hover:underline">
            View All
          </Link>
        </div>

        {upcomingMeetings.length === 0 ? (
          <div className="text-center py-8">
            <Calendar size={48} className="text-text-muted mx-auto mb-3" />
            <p className="text-text-secondary">No upcoming meetings</p>
            <Link to="/admin/meetings" className="text-sm text-acid hover:underline mt-2 inline-block">
              Schedule a meeting
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="flex items-center justify-between p-4 rounded-lg bg-graphite-lighter border border-border">
                <div>
                  <p className="font-medium text-text-primary">{meeting.clientName}</p>
                  <p className="text-sm text-text-secondary">
                    {new Date(meeting.date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })} at {meeting.time}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  meeting.type === 'discovery' ? 'bg-acid/10 text-acid' :
                  meeting.type === 'follow-up' ? 'bg-violet/10 text-violet' :
                  meeting.type === 'presentation' ? 'bg-ice/10 text-ice' :
                  'bg-text-muted/10 text-text-muted'
                }`}>
                  {meeting.type}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/admin/clients"
          className="bg-graphite border border-border rounded-lg p-6 hover:border-acid transition-colors group"
        >
          <Users size={24} className="text-acid mb-3" />
          <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-acid transition-colors">
            Manage Clients
          </h3>
          <p className="text-sm text-text-secondary">
            Add, edit, and manage your client database
          </p>
        </Link>

        <Link
          to="/admin/meetings"
          className="bg-graphite border border-border rounded-lg p-6 hover:border-acid transition-colors group"
        >
          <Calendar size={24} className="text-acid mb-3" />
          <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-acid transition-colors">
            Schedule Meeting
          </h3>
          <p className="text-sm text-text-secondary">
            Book meetings and send email notifications
          </p>
        </Link>
      </div>
    </div>
  );
}
