import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  MapPin, 
  Phone, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    if (onShowToast) {
      onShowToast({ type: 'success', message: 'Email copied to clipboard: kbeniwal289@gmail.com' });
    }
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide a valid name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters).';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Step 1: Try local or production FastAPI backend endpoint first
      let submissionSuccess = false;
      let responseMessage = '';

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const resData = await response.json();
          submissionSuccess = true;
          responseMessage = resData.message || 'Message received successfully by Krishan!';
        }
      } catch (backendErr) {
        // Local FastAPI endpoint was not running or reachable
      }

      // Step 2: Fallback to public form forwarding service (Web3Forms API)
      if (!submissionSuccess) {
        try {
          const fallbackRes = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              // Public Access Key configured for direct inbox delivery to Krishan Beniwal
              access_key: '5631aa67-74be-4c4f-9e7f-6d278693ef2d',
              name: formData.name,
              email: formData.email,
              subject: `Portfolio Contact: ${formData.subject}`,
              message: formData.message,
              from_name: `${formData.name} (Portfolio Inquiry)`,
              to_email: 'kbeniwal289@gmail.com'
            })
          });

          const fallbackData = await fallbackRes.json();
          if (fallbackRes.ok && fallbackData.success) {
            submissionSuccess = true;
            responseMessage = 'Thank you! Your message was delivered directly to Krishan Beniwal.';
          } else {
            throw new Error(fallbackData.message || 'Submission service temporarily unavailable.');
          }
        } catch (apiErr) {
          // Both failed: offer direct mailto fallback link with the exact message pre-filled
          throw new Error('Network dispatch error. Please click below to send via your email client.');
        }
      }

      if (submissionSuccess) {
        // Confetti celebration
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 }
          });
        } catch (_) {}

        setStatusMessage({
          type: 'success',
          text: responseMessage
        });

        if (onShowToast) {
          onShowToast({ type: 'success', message: 'Message successfully sent to Krishan Beniwal!' });
        }

        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Could not send message. Please reach out directly to kbeniwal289@gmail.com'
      });
      if (onShowToast) {
        onShowToast({ type: 'error', message: 'Failed to dispatch message.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry: Opportunities'
  )}&body=${encodeURIComponent(
    `Hi Krishan,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-navy-950 dark:bg-navy-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-base">
            Open to software development opportunities, AI engineering roles, and technical discussions.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Information Box */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Details
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an upcoming role, an innovative software project, or want to connect regarding AI/ML architectures, feel free to send a message.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs text-slate-400 block font-mono">Email</span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-semibold text-slate-100 hover:text-cyan-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy email address"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Location</span>
                    <span className="text-sm font-semibold text-slate-100">
                      Haryana, India (Open to Relocation / Remote)
                    </span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Status</span>
                    <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active candidate • Class of 2027
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media Link Badges */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                  Professional Profiles:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-medium hover:text-white transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-blue-900/50 border border-slate-700 hover:border-blue-500/50 text-slate-200 text-xs font-medium hover:text-blue-300 transition-all hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-amber-950/50 border border-slate-700 hover:border-amber-500/50 text-slate-200 text-xs font-medium hover:text-amber-300 transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Validated transmission connected to backend delivery. No fake messages.
                </p>
              </div>

              {/* Status Alert */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-2xl border text-sm flex items-start gap-3 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/50 border-rose-500/40 text-rose-200'
                  }`}
                  role="alert"
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p>{statusMessage.text}</p>
                    {statusMessage.type === 'error' && (
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 underline hover:text-white mt-1"
                      >
                        Open your Email Client directly →
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-medium text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.name ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-700/80'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-400">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-medium text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.email ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-700/80'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-400">{errors.email}</p>}
                  </div>

                </div>

                {/* Subject Field */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono font-medium text-slate-300">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Opportunity / Interview Invitation"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                      errors.subject ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-700/80'
                    }`}
                  />
                  {errors.subject && <p className="text-[11px] text-rose-400">{errors.subject}</p>}
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Krishan, we were impressed by your multi-agent PR Reviewer and Arogya Sarthi projects..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none ${
                      errors.message ? 'border-rose-500/80 ring-1 ring-rose-500/50' : 'border-slate-700/80'
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-400">{errors.message}</p>}
                </div>

                {/* Submit Action & Fallback */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:pointer-events-none"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>

                  <a
                    href={mailtoHref}
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-mono"
                  >
                    Prefer direct email? Launch mail client ↗
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
