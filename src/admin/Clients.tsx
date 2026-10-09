import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Search, X } from 'lucide-react';
import { clientStorage } from './storage';
import { Client } from './types';
import { siteConfig } from '../config';

export default function AdminClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  useEffect(() => {
    setClients(clientStorage.getAll());
  }, []);

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || client.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAdd = () => {
    setEditingClient(null);
    setShowModal(true);
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this client?')) {
      const updated = clientStorage.delete(id);
      setClients(updated);
    }
  };

  const handleSave = (clientData: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (editingClient) {
      const updated = clientStorage.update(editingClient.id, clientData);
      setClients(updated);
    } else {
      const newClient: Client = {
        ...clientData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const updated = clientStorage.add(newClient);
      setClients(updated);
    }
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">CRM - Clients</h1>
          <p className="text-text-secondary">Manage your client database</p>
        </div>
        <button onClick={handleAdd} className="btn-primary">
          <Plus size={18} />
          Add Client
        </button>
      </div>

      {/* Filters */}
      <div className="bg-graphite border border-border rounded-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-10"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="form-input sm:w-48"
          >
            <option value="all">All Status</option>
            <option value="lead">Lead</option>
            <option value="prospect">Prospect</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Clients Table */}
      <div className="bg-graphite border border-border rounded-lg overflow-hidden">
        {filteredClients.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary">No clients found</p>
            <button onClick={handleAdd} className="text-sm text-acid hover:underline mt-2">
              Add your first client
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-graphite-lighter border-b border-border">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Name</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Company</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Services</th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-text-muted uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredClients.map((client) => (
                  <tr key={client.id} className="hover:bg-graphite-lighter/50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-text-primary">{client.name}</p>
                        <p className="text-sm text-text-secondary">{client.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{client.company}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        client.status === 'active' ? 'bg-green-500/10 text-green-400' :
                        client.status === 'lead' ? 'bg-acid/10 text-acid' :
                        client.status === 'prospect' ? 'bg-violet/10 text-violet' :
                        'bg-text-muted/10 text-text-muted'
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {client.services.slice(0, 2).map((service) => (
                          <span key={service} className="text-xs bg-graphite-lighter px-2 py-0.5 rounded">
                            {service}
                          </span>
                        ))}
                        {client.services.length > 2 && (
                          <span className="text-xs text-text-muted">+{client.services.length - 2}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(client)}
                          className="p-2 text-text-muted hover:text-acid transition-colors"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(client.id)}
                          className="p-2 text-text-muted hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <ClientModal
          client={editingClient}
          onSave={handleSave}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

// Client Modal Component
function ClientModal({ 
  client, 
  onSave, 
  onClose 
}: { 
  client: Client | null; 
  onSave: (data: Omit<Client, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: client?.name || '',
    email: client?.email || '',
    phone: client?.phone || '',
    company: client?.company || '',
    status: client?.status || 'lead' as Client['status'],
    services: client?.services || [],
    notes: client?.notes || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-graphite border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-text-primary">
            {client ? 'Edit Client' : 'Add New Client'}
          </h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="form-input"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Company</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as Client['status'] })}
              className="form-input"
            >
              <option value="lead">Lead</option>
              <option value="prospect">Prospect</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Services</label>
            <div className="grid grid-cols-2 gap-2">
              {siteConfig.services.map((service) => (
                <label key={service} className="flex items-center gap-2 text-sm text-text-secondary">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                    className="rounded"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="form-input min-h-[100px]"
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button type="submit" className="btn-primary flex-1">
              {client ? 'Update Client' : 'Add Client'}
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
