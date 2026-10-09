# IFFI Media Admin Panel - Complete Guide

## 🎉 Admin Panel Successfully Created!

Your complete CRM and booking system is ready with email notifications!

---

## 🔐 Access Admin Panel

**URL:** `https://www.iffimedia.com/admin/login`

**Default Password:** `iffi2024`

⚠️ **Change this password immediately!** Edit `src/admin/config.ts`

---

## 📋 Features

### 1. **Dashboard**
- Overview of all clients and meetings
- Quick stats (total clients, active clients, meetings)
- Upcoming meetings list
- Quick action buttons

### 2. **CRM - Clients**
- Add/Edit/Delete clients
- Track client status (Lead, Prospect, Active, Inactive)
- Assign services to clients
- Add notes for each client
- Search and filter clients
- Track company, email, phone

### 3. **Meetings & Booking**
- Schedule meetings with clients
- Set date, time, duration
- Meeting types: Discovery, Follow-up, Presentation, Review
- Track meeting status (Scheduled, Completed, Cancelled)
- **Email notifications sent automatically** when meeting is scheduled
- Add notes/agenda for each meeting

### 4. **Settings**
- Configure admin password
- Setup EmailJS for email notifications
- View configuration status

---

## 📧 Email Notifications Setup (FREE)

### Step 1: Sign Up for EmailJS
1. Go to https://www.emailjs.com/
2. Sign up for free account (200 emails/month free)
3. Verify your email

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Connect your email (Gmail, Outlook, etc.)
4. Copy the **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Meeting Scheduled - {{client_name}}

Hello Admin,

A new meeting has been scheduled:

Client: {{client_name}}
Email: {{client_email}}
Date: {{meeting_date}}
Time: {{meeting_time}}
Duration: {{meeting_duration}}
Type: {{meeting_type}}

Notes:
{{meeting_notes}}

---
IFFI Media Admin Panel
```

4. Copy the **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Configure in Admin Panel
1. Login to admin panel
2. Go to Settings
3. Paste Service ID, Template ID, and Public Key
4. Save settings

**OR** edit `src/admin/config.ts` directly:

```typescript
emailJS: {
  serviceId: "service_abc123",
  templateId: "template_xyz789",
  publicKey: "user_abc123xyz",
}
```

---

## 🗄️ Data Storage

**Current Setup:** LocalStorage (browser-based)
- Data is stored in the browser
- Each browser has its own data
- No backend required
- Works offline

**For Production (Multi-user):**
You'll need a backend database. Options:
- **Supabase** (Free tier, PostgreSQL)
- **Firebase** (Free tier, NoSQL)
- **Custom backend** (Node.js + MongoDB/PostgreSQL)

---

## 🚀 How to Use

### Adding a Client
1. Login to admin panel
2. Go to "CRM - Clients"
3. Click "Add Client"
4. Fill in details (name, email, company, etc.)
5. Select services they need
6. Add notes if needed
7. Click "Add Client"

### Scheduling a Meeting
1. Go to "Meetings"
2. Click "Schedule Meeting"
3. Select client from dropdown (or enter manually)
4. Set date, time, duration
5. Choose meeting type
6. Add notes/agenda
7. Click "Schedule Meeting"
8. **Email notification sent automatically!** ✅

### Managing Meetings
- View all meetings in list
- Change status (Scheduled → Completed → Cancelled)
- Edit meeting details
- Delete meetings

---

## 🔒 Security Notes

1. **Change default password** in `src/admin/config.ts`
2. **Keep EmailJS keys private** - don't commit to public GitHub
3. **Use environment variables** for production:
   ```typescript
   emailJS: {
     serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
     templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
   }
   ```
4. **Add .env to .gitignore**

---

## 📱 Mobile Friendly

Admin panel is fully responsive:
- Works on desktop, tablet, mobile
- Collapsible sidebar on mobile
- Touch-friendly interface

---

## 🎨 Customization

### Change Colors
Edit `src/index.css` - Tailwind theme colors

### Add New Fields
Edit `src/admin/types.ts` and update forms

### Modify Email Template
Update EmailJS template in EmailJS dashboard

---

## 🐛 Troubleshooting

### "Email not sending"
- Check EmailJS configuration
- Verify Service ID, Template ID, Public Key
- Check browser console for errors
- Ensure template variables match

### "Data not saving"
- LocalStorage is browser-specific
- Clear browser cache if issues
- Check browser storage limits (5-10MB)

### "Can't login"
- Check password in `src/admin/config.ts`
- Clear browser localStorage
- Try different browser

---

## 📊 Future Enhancements

Consider adding:
- [ ] Client portal (clients can view their meetings)
- [ ] Invoice/billing system
- [ ] Project management
- [ ] Time tracking
- [ ] File uploads (contracts, proposals)
- [ ] Calendar integration (Google Calendar)
- [ ] SMS notifications
- [ ] Recurring meetings
- [ ] Meeting reminders (automatic)
- [ ] Analytics dashboard
- [ ] Export to CSV/PDF

---

## 💡 Tips

1. **Backup your data** - Export client list regularly
2. **Use consistent naming** - Standardize client names
3. **Set meeting reminders** - Check dashboard daily
4. **Update client status** - Keep CRM accurate
5. **Add detailed notes** - Help future reference

---

## 🆘 Support

If you need help:
1. Check browser console for errors
2. Verify all configurations
3. Clear browser cache
4. Try different browser
5. Check EmailJS dashboard for email logs

---

**Admin Panel is LIVE and READY to use!** 🎉

Login at: `https://www.iffimedia.com/admin/login`
Password: `iffi2024` (change immediately!)
