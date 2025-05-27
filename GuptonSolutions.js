import React from "react";
import { Phone, Mail, Hammer, Truck, Leaf, ShowerHead, MapPin } from "lucide-react";

export default function GuptonSolutions() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', background: 'linear-gradient(to bottom, white, #f0f8ff)', color: '#333', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#3b6e8f', color: 'white' }}>
        <img src="/gupton-logo.png" alt="Gupton Solutions Logo" width={120} height={120} style={{ marginBottom: 20 }} />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Gupton Solutions</h1>
        <p>Handyman • Junk Removal • Landscaping • Pressure Washing</p>
        <p style={{ fontSize: '0.9rem' }}>Serving Wake Forest, NC and surrounding areas (50-mile radius)</p>
      </header>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#3b6e8f', marginBottom: 30 }}>Our Services</h2>
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {[{
            icon: <Hammer size={32} />,
            title: 'Handyman Services',
            desc: 'Repairs, installs, assembly, and more — no job too small.'
          }, {
            icon: <Truck size={32} />,
            title: 'Junk Removal',
            desc: 'Haul-offs, cleanouts, and heavy lifting at affordable prices.'
          }, {
            icon: <Leaf size={32} />,
            title: 'Landscaping',
            desc: 'Mulching, planting, trimming, and yard maintenance.'
          }, {
            icon: <ShowerHead size={32} />,
            title: 'Pressure Washing',
            desc: 'Driveways, siding, decks, fences — clean and restored.'
          }].map(({ icon, title, desc }) => (
            <div key={title} style={{ border: '2px solid #3b6e8f', borderRadius: 8, padding: 20, textAlign: 'center' }}>
              <div style={{ color: '#3b6e8f', marginBottom: 10 }}>{icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3b6e8f' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ backgroundColor: '#f1f7fb', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#3b6e8f', marginBottom: 10 }}>Let’s Get to Work</h2>
        <p style={{ marginBottom: 20, color: '#555' }}>Call, text, or email us today to schedule a free quote. We’re fast, fair, and ready to help.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
          <button style={{ backgroundColor: '#3b6e8f', color: 'white', padding: '10px 20px', border: 'none', borderRadius: 5 }}>
            <Phone size={16} /> 919-306-6862
          </button>
          <button style={{ color: '#3b6e8f', border: '2px solid #3b6e8f', background: 'none', padding: '10px 20px', borderRadius: 5 }}>
            <Mail size={16} /> guptonsolutions@gmail.com
          </button>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '30px 20px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#3b6e8f' }}>Service Area</h3>
        <p style={{ fontSize: '0.9rem', color: '#555' }}><MapPin size={16} /> Wake Forest, NC + 50-mile radius</p>
      </section>

      <footer style={{ textAlign: 'center', backgroundColor: '#3b6e8f', color: 'white', padding: 20 }}>
        &copy; {new Date().getFullYear()} Gupton Solutions. All rights reserved.
      </footer>
    </main>
  );
}
