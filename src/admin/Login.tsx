import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, AlertCircle } from 'lucide-react';
import { adminConfig } from './config';
import { authStorage } from './storage';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (password === adminConfig.adminPassword) {
        authStorage.login();
        navigate('/admin/dashboard');
      } else {
        setError('Invalid password. Please try again.');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-midnight px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-acid/10 mb-4">
            <Lock size={32} className="text-acid" />
          </div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Admin Panel</h1>
          <p className="text-text-secondary">IFFI Media Management System</p>
        </div>

        <form onSubmit={handleLogin} className="bg-graphite border border-border rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter admin password"
              required
              autoFocus
            />
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-2">
              <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full justify-center disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <div className="mt-6 p-4 rounded-lg bg-acid/5 border border-acid/20">
            <p className="text-xs text-text-secondary">
              <strong className="text-acid">Default Password:</strong> iffi2024
            </p>
            <p className="text-xs text-text-muted mt-1">
              Change this in src/admin/config.ts
            </p>
          </div>
        </form>

        <p className="text-center text-xs text-text-muted mt-6">
          © {new Date().getFullYear()} IFFI Media. All rights reserved.
        </p>
      </div>
    </div>
  );
}
