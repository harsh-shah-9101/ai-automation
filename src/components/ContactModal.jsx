import React, { useState } from 'react';

export default function ContactModal({ visible, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, phone, date, time };
    console.log('Consultation request:', payload);
    alert('Thank you! Your consultation request has been submitted.');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Book a Consultation</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Mobile Number
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="+1 555 555 5555" />
          </label>
          <div className="row">
            <label>
              Date
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <label>
              Time
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
            </label>
          </div>
          <div className="actions">
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .modal {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          width: 95%;
          max-width: 520px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        .modal h2 { margin: 0 0 1rem 0; }
        form label { display: block; margin-bottom: 0.75rem; font-size: 0.95rem; }
        form input { width: 100%; padding: 0.6rem; border-radius: 6px; border: 1px solid #e6e6e6; margin-top: 0.35rem; }
        .row { display: flex; gap: 0.75rem; }
        .row label { flex: 1; }
        .actions { display:flex; justify-content:flex-end; gap:0.5rem; margin-top:1rem; }
        .btn { padding: 0.6rem 1rem; border-radius: 8px; cursor: pointer; }
        .btn-primary { background: var(--accent-primary, #2563eb); color: white; border: none; }
        .btn-ghost { background: transparent; border: 1px solid #ddd; }
      `}</style>
    </div>
  );
}
