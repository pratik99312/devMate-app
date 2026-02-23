import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleMessage = (e) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    setShowToast(true);

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      {/* Toast */}
      {showToast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>✅ Message sent successfully</span>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold">Contact Us</h1>
            <p className="text-sm opacity-60">We would love to hear from you</p>

            <p>
              If you have questions, feedback, or need support regarding
              <strong> Devmate</strong>, feel free to reach out using the
              details below.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mt-4">
              <div>
                <h2 className="font-semibold text-lg">📧 Email Support</h2>
                <p className="link link-primary">support@devmate.info</p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">🚀 General Queries</h2>
                <p>
                  For partnerships, feedback, or business inquiries, contact us
                  via email and we will respond as soon as possible.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-lg">⏱ Support Hours</h2>
                <p>Monday – Saturday, 10 AM – 7 PM (IST)</p>
              </div>
            </div>

            <div className="divider">Send a message</div>

            {/* Contact Form */}
            <form onSubmit={handleMessage} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;