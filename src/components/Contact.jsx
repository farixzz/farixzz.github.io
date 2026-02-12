import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub size={32} />, url: 'https://github.com/farixzz' },
  { name: 'LinkedIn', icon: <FaLinkedin size={32} />, url: 'https://www.linkedin.com/in/muhammed-faris-p/' },
  { name: 'Medium', icon: <FaMedium size={32} />, url: 'https://medium.com/@muhammedfaris654' },
  { name: 'Email', icon: <MdEmail size={32} />, url: 'mailto:muhammedfaris654@gmail.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/mqaqlrkd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      {/* Section Header */}
      <h1 className="text-4xl font-bold text-center text-[#00ff00] font-mono pb-4">
        [ SECURE CONTACT CHANNEL ]
      </h1>
      <p className="text-gray-400 text-center text-sm mb-12 max-w-lg mx-auto">
        System standing by for contact. Fill out the form below or connect via secure networks.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 pb-2 border-b border-gray-800">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="text-gray-600 text-xs ml-2 font-mono">~/contact/compose_message.sh</span>
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-400 text-xs font-mono mb-1.5 tracking-wider">
              &gt; IDENTIFIER_
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-3 text-sm font-mono rounded-none focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_rgba(0,255,0,0.15)] transition-all duration-300 placeholder:text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-400 text-xs font-mono mb-1.5 tracking-wider">
              &gt; RETURN_ADDRESS_
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-3 text-sm font-mono rounded-none focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_rgba(0,255,0,0.15)] transition-all duration-300 placeholder:text-gray-700"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-400 text-xs font-mono mb-1.5 tracking-wider">
              &gt; PAYLOAD_
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message..."
              className="w-full bg-gray-900/80 border border-gray-700 text-gray-200 px-4 py-3 text-sm font-mono rounded-none focus:outline-none focus:border-green-500 focus:shadow-[0_0_10px_rgba(0,255,0,0.15)] transition-all duration-300 resize-none placeholder:text-gray-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full flex items-center justify-center gap-2 font-bold text-sm py-3 px-6 border-2 font-mono tracking-wider transition-all duration-300 cursor-pointer ${
              status === 'sending'
                ? 'bg-gray-800 border-gray-600 text-gray-500 cursor-wait'
                : status === 'sent'
                ? 'bg-green-500/20 border-green-500 text-green-400'
                : 'bg-[#00ff00] text-black border-green-500 hover:bg-green-700 hover:text-white'
            }`}
          >
            {status === 'idle' && (
              <>
                <MdSend size={16} />
                TRANSMIT MESSAGE
              </>
            )}
            {status === 'sending' && '> Encrypting and sending...'}
            {status === 'sent' && '✓ Message transmitted successfully'}
            {status === 'error' && '✗ Transmission failed — try again'}
          </button>
        </motion.form>

        {/* Right: Social Links + Status Panel */}
        <motion.div
          className="flex flex-col justify-between"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Social Networks */}
          <div>
            <h3 className="text-gray-400 text-sm font-mono tracking-widest uppercase mb-6">
              // Secure Networks
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="group flex items-center gap-3 p-4 bg-gray-900/80 border border-gray-700 hover:border-green-500/50 hover:bg-gray-900 transition-all duration-300"
                >
                  <span className="text-gray-500 group-hover:text-green-400 transition-colors duration-300">
                    {link.icon}
                  </span>
                  <div>
                    <p className="text-gray-300 text-sm font-mono group-hover:text-white transition-colors duration-300">
                      {link.name}
                    </p>
                    <p className="text-gray-700 text-xs font-mono">// connect</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* System info panel */}
          <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800">
            <p className="text-xs font-mono text-gray-600 mb-2">// connection_info</p>
            <div className="space-y-1 text-xs font-mono">
              <p className="text-gray-500">
                <span className="text-green-500/60">protocol:</span> TLS 1.3 / E2E encrypted
              </p>
              <p className="text-gray-500">
                <span className="text-green-500/60">response_time:</span> &lt; 24 hours
              </p>
              <p className="text-gray-500">
                <span className="text-green-500/60">status:</span>{' '}
                <span className="text-green-500">● available for hire</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;