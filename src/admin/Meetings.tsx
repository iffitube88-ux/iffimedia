import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Calendar, Clock, Mail, CheckCircle, AlertCircle, X } from 'lucide-react';
import { meetingStorage, clientStorage } from './storage';
import { emailService } from './emailService';
import { Meeting, Client } from './types';

export default function AdminMeetings() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingMeeting, setEditingMeeting] = useState<Meeting | null>(null);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    setMeetings(meetingStorage.getAll());
    setClients(clientStorage.getAll());
  }, []);

  const sortedMeetings = [...meetings].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`).getTime();
    const dateB = new Date(`${b.date}T${b.time}`).getTime();
    return dateB - dateA;
  });

  const handleAdd = () => {
    setEditingMeeting(null);
    setShowModal(true);
  };

  const handleEdit = (meeting: Meeting) => {
    setEditingMeeting(meeting);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this meeting?')) {
      const updated = meetingStorage.delete(id);
      setMeetings(updated);
    }
  };

  const handleSave = async (meetingData: Omit<Meeting, 'id' | 'createdAt'>) => {
    if (editingMeeting) {
      const updated = meetingStorage.update(editingMeeting.id, meetingData);
      setMeetings(updated);
    } else {
      const newMeeting: Meeting = {
        ...meetingData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      const updated = meetingStorage.add(newMeeting);
      setMeetings(updated);

      // Send email notification
      if (emailService.isConfigured()) {
        setEmailStatus('sending');
        const success = await emailService.sendMeetingNotification(newMeeting);
        setEmailStatus(success ? 'success' : 'error');
        setTimeout(() => setEmailStatus('idle'), 3000);
      }
    }
    setShowModal(false);
  };

  const handleStatusChange = (id: string, status: Meeting['status']) => {
    const updated = meetingStorage.update(id, { status });
    setMeetings(updated);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Meetings</h1>
          <p className="text-text-secondary">Schedule and manage client meetings</p>
        </div>
        <button onClick={handleAdd} className="btn-primary">
          <Plus size={18} />
          Schedule Meeting
        </button>
      </div>

      {/* Email Status */}
      {emailStatus !== 'idle' && (
        <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
          emailStatus === 'sending' ? 'bg-ice/10 border border-ice/20' :
          emailStatus === 'success' ? 'bg-green-500/10 border border-green-500/20' :
          'bg-red-500/10 border border-red-500/20'
        }`}>
          {emailStatus === 'sending' && <Clock size={18} className="text-ice flex-shrink-0 mt-0.5" />}
          {emailStatus === 'success' && <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" />}
          {emailStatus === 'error' && <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />}
          <div>
            <p className="text-sm font-medium text-text-primary">
              {emailStatus === 'sending' && 'Sending email notification...'}
              {emailStatus === 'success' && 'Email notification sent successfully!'}
              {emailStatus === 'error' && 'Failed to send email notification'}
            </p>
            {emailStatus === 'error' && (
              <p className="text-xs text-text-secondary mt-1">
                Check EmailJS configuration in src/admin/config.ts
              </p>
            )}
          </div>
        </div>
      )}

      {/* EmailJS Config Warning */}
      {!emailService.isConfigured() && (
        <div className="mb-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-text-primary">Email Notifications Not Configured</p>
            <p className="text-xs text-text-secondary mt-1">
              To enable email notifications, configure EmailJS in src/admin/config.ts. 
              Sign up free at emailjs.com (200 emails/month free).
            </p>
          </div>
        </div>
      )}

      {/* Meetings List */}
      <div className="bg-graphite border border-border rounded-lg overflow-hidden">
        {sortedMeetings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar size={48} className="text-text-muted mx-auto mb-3" />
            <p className="text-text-secondary">No meetings scheduled</p>
            <button onClick={handleAdd} className="text-sm text-acid hover:underline mt-2">
              Schedule your first meeting
            </button>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {sortedMeetings.map((meeting) => (
              <div key={meeting.id} className="p-6 hover:bg-graphite-lighter/50">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {meeting.clientName}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        meeting.status === 'scheduled' ? 'bg-acid/10 text-acid' :
                        meeting.status === 'completed' ? 'bg-green-500/10 text-green-400' :
                        'bg-red-500/10 text-red-400'
                      }`}>
                        {meeting.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(meeting.date).toLocaleDateString('en-US', { 
                          weekday: 'short',
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {meeting.time} ({meeting.duration} min)
                      </span>
                      <span className="flex items-center gap-1">
                        <Mail size={14} />
                        {meeting.clientEmail}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        meeting.type === 'discovery' ? 'bg-acid/10 text-acid' :
                        meeting.type === 'follow-up' ? 'bg-violet/10 text-violet' :
                        meeting.type === 'presentation' ? 'bg-ice/10 text-ice' :
                        'bg-text-muted/10 text-text-muted'
                      }`}>
                        {meeting.type}
                      </span>
                      {meeting.notes && (
                        <span className="text-xs text-text-muted">
                          {meeting.notes.slice(0, 50)}{meeting.notes.length > 50 ? '...' : ''}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={meeting.status}
                      onChange={(e) => handleStatusChange(meeting.id, e.target.value as Meeting['status'])}
                      className="form-input text-sm py-1.5 px-3"
                    >
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                    <button
                      onClick={() => handleEdit(meeting)}
                      className="p-2 text-text-muted hover:text-acid transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(meeting.id)}
                      className="p-2 text-text-muted hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <MeetingModal
          meeting={editingMeeting}
          clients={clients}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

// Meeting Modal Component
function MeetingModal({ 
  meeting, 
  clients,
  onSave, 
  onClose 
}: { 
  meeting: Meeting | null;
  clients: Client[];
  onSave: (data: Omit<Meeting, 'id' | 'createdAt'>) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    clientId: meeting?.clientId || '',
    clientName: meeting?.clientName || '',
    clientEmail: meeting?.clientEmail || '',
    date: meeting?.date || new Date().toISOString().split('T')[0],
    time: meeting?.time || '10:00',
    duration: meeting?.duration || 30,
    type: meeting?.type || 'discovery' as Meeting['type'],
    status: meeting?.status || 'scheduled' as Meeting['status'],
    notes: meeting?.notes || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleClientSelect = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setFormData({
        ...formData,
        clientId: client.id,
        clientName: client.name,
        clientEmail: client.email,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-graphite border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-text-primary">
            {meeting ? 'Edit Meeting' : 'Schedule New Meeting'}
          </h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Select Client</label>
            <select
              value={formData.clientId}
              onChange={(e) => handleClientSelect(e.target.value)}
              className="form-input"
              required
            >
              <option value="">Select a client...</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name} - {client.company}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Client Name</label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Client Email</label>
              <input
                type="email"
                value={formData.clientEmail}
                onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="form-input"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Duration (min)</label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                className="form-input"
              >
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>1 hour</option>
                <option value={90}>1.5 hours</option>
                <option value={120}>2 hours</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Meeting Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value as Meeting['type'] })}
              className="form-input"
            >
              <option value="discovery">Discovery Call</option>
              <option value="follow-up">Follow-up</option>
              <option value="presentation">Presentation</option>
              <option value="review">Review Meeting</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="form-input min-h-[100px]"
              rows={4}
              placeholder="Meeting agenda, discussion points, etc."
            />
          </div>

          <div className="p-4 rounded-lg bg-acid/5 border border-acid/20">
            <p className="text-xs text-text-secondary">
              <strong className="text-acid">Email Notification:</strong> An email will be sent to {formData.clientEmail || 'the client'} and admin when this meeting is scheduled.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="btn-primary flex-1">
              {meeting ? 'Update Meeting' : 'Schedule Meeting'}
            </button>
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
