import { useState } from 'react';
import { Save, AlertCircle, CheckCircle } from 'lucide-react';
import { adminConfig } from './config';

export default function AdminSettings() {
  const [password, setPassword] = useState(adminConfig.adminPassword);
  const [emailConfig, setEmailConfig] = useState({
    serviceId: adminConfig.emailJS.serviceId,
    templateId: adminConfig.emailJS.templateId,
    publicKey: adminConfig.emailJS.publicKey,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // In a real app, you'd save to backend
    // For now, just show success message
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Settings</h1>
        <p className="text-text-secondary">Configure your admin panel</p>
      </div>

      {saved && (
        <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-start gap-3">
          <CheckCircle size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-text-primary">Settings saved!</p>
            <p className="text-xs text-text-secondary mt-1">
              Note: In this demo, settings are stored in memory. For production, update src/admin/config.ts directly.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Security */}
        <div className="bg-graphite border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Security</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
              <p className="text-xs text-text-muted mt-1">
                Change password in src/admin/config.ts for permanent changes
              </p>
            </div>
          </div>
        </div>

        {/* Email Configuration */}
        <div className="bg-graphite border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Email Notifications</h2>
          
          <div className="mb-4 p-4 rounded-lg bg-acid/5 border border-acid/20">
            <p className="text-sm text-text-secondary">
              <strong className="text-acid">Setup Instructions:</strong>
            </p>
            <ol className="text-xs text-text-secondary mt-2 space-y-1 list-decimal list-inside">
              <li>Sign up at <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-acid hover:underline">emailjs.com</a> (Free: 200 emails/month)</li>
              <li>Create an Email Service (connect your email)</li>
              <li>Create an Email Template with these variables: {'{'}to_email, client_name, client_email, meeting_date, meeting_time, meeting_duration, meeting_type, meeting_notes{'}'}</li>
              <li>Copy your Service ID, Template ID, and Public Key below</li>
            </ol>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Service ID
              </label>
              <input
                type="text"
                value={emailConfig.serviceId}
                onChange={(e) => setEmailConfig({ ...emailConfig, serviceId: e.target.value })}
                className="form-input"
                placeholder="e.g., service_abc123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Template ID
              </label>
              <input
                type="text"
                value={emailConfig.templateId}
                onChange={(e) => setEmailConfig({ ...emailConfig, templateId: e.target.value })}
                className="form-input"
                placeholder="e.g., template_xyz789"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Public Key
              </label>
              <input
                type="text"
                value={emailConfig.publicKey}
                onChange={(e) => setEmailConfig({ ...emailConfig, publicKey: e.target.value })}
                className="form-input"
                placeholder="e.g., user_abc123xyz"
              />
            </div>
          </div>
        </div>

        {/* Email Recipients */}
        <div className="bg-graphite border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Email Recipients</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Admin Email (Meeting Notifications)
              </label>
              <input
                type="email"
                value={adminConfig.email.toEmail}
                readOnly
                className="form-input bg-graphite-lighter"
              />
              <p className="text-xs text-text-muted mt-1">
                Change in src/admin/config.ts
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button onClick={handleSave} className="btn-primary">
          <Save size={18} />
          Save Settings
        </button>

        {/* Info */}
        <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
          <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-text-primary">Important Note</p>
            <p className="text-xs text-text-secondary mt-1">
              This is a client-side admin panel using localStorage. For production use with multiple users, 
              you'll need a backend database. Consider upgrading to Supabase, Firebase, or a custom backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
