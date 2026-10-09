import emailjs from '@emailjs/browser';
import { adminConfig } from './config';
import { Meeting } from './types';

export const emailService = {
  // Send meeting notification
  sendMeetingNotification: async (meeting: Meeting): Promise<boolean> => {
    const { serviceId, templateId, publicKey } = adminConfig.emailJS;
    
    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS not configured. Meeting notification not sent.');
      return false;
    }

    try {
      const templateParams = {
        to_email: adminConfig.email.toEmail,
        client_name: meeting.clientName,
        client_email: meeting.clientEmail,
        meeting_date: new Date(meeting.date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        meeting_time: meeting.time,
        meeting_duration: `${meeting.duration} minutes`,
        meeting_type: meeting.type,
        meeting_notes: meeting.notes || 'No additional notes',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error('Failed to send email notification:', error);
      return false;
    }
  },

  // Send meeting reminder (can be called manually or scheduled)
  sendMeetingReminder: async (meeting: Meeting): Promise<boolean> => {
    const { serviceId, templateId, publicKey } = adminConfig.emailJS;
    
    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS not configured. Reminder not sent.');
      return false;
    }

    try {
      const templateParams = {
        to_email: meeting.clientEmail,
        client_name: meeting.clientName,
        meeting_date: new Date(meeting.date).toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        meeting_time: meeting.time,
        meeting_type: meeting.type,
        from_name: adminConfig.email.fromName,
      };

      // You'll need to create a separate template for reminders in EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error('Failed to send reminder:', error);
      return false;
    }
  },

  // Check if email service is configured
  isConfigured: (): boolean => {
    const { serviceId, templateId, publicKey } = adminConfig.emailJS;
    return !!(serviceId && templateId && publicKey);
  },
};
