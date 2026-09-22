"use client";

import { useState } from "react";
import { X, Mail, Send, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Using Formspree for email delivery
      // Note: You'll need to replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/xoevdpvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white/10 dark:bg-gray-900/80 backdrop-blur-md rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 dark:bg-gray-800/50 rounded-lg">
                <Mail size={24} className="text-white dark:text-gray-200" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white dark:text-gray-100">Get In Touch</h2>
                <p className="text-sm text-gray-400 dark:text-gray-400">Send me a message</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 dark:border-gray-700 rounded-lg text-white dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:border-white/30 dark:focus:border-gray-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 dark:border-gray-700 rounded-lg text-white dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:border-white/30 dark:focus:border-gray-600 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 dark:border-gray-700 rounded-lg text-white dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:border-white/30 dark:focus:border-gray-600 transition-colors resize-none"
                  placeholder="Why do you want to contact me?"
                />
              </div>

              {submitStatus === "error" && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-400">
                    Failed to send message. Please try again or email me directly at vinisha.sahoo@gmail.com
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-4 pt-4 border-t border-white/10 dark:border-gray-700 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Or email me directly at{" "}
              <a href="mailto:vinisha.sahoo@gmail.com" className="text-gray-400 hover:text-white dark:hover:text-white transition-colors">
                vinisha.sahoo@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
