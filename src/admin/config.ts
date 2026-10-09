// Admin panel configuration
export const adminConfig = {
  // Simple password protection (change this!)
  adminPassword: "iffi2024", // TODO: Change this to your secure password
  
  // EmailJS Configuration (Free tier: 200 emails/month)
  // Sign up at https://www.emailjs.com/ and get your credentials
  emailJS: {
    serviceId: "", // TODO: Add your EmailJS Service ID
    templateId: "", // TODO: Add your EmailJS Template ID
    publicKey: "", // TODO: Add your EmailJS Public Key
  },
  
  // Email settings
  email: {
    fromName: "IFFI Media",
    toEmail: "hello@iffimedia.com", // Meeting notifications will go here
  },
};
