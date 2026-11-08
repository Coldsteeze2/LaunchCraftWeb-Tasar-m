import React from 'react';
import { Rocket, MessageCircle } from 'lucide-react';

export default function Navbar({ onWhatsAppClick }) {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(3, 7, 18, 0.85)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '16px 36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 24px rgba(6, 182, 212, 0.4)'
        }}>
          <Rocket size={22} color="#fff" />
        </div>
        <div>
          <span style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
            Launch<span style={{ color: '#06b6d4' }}>Craft</span>
          </span>
          <span style={{ fontSize: '0.65rem', display: 'block', color: '#94a3b8', letterSpacing: '2px', fontWeight: 700 }}>
            WEB TASARIM STÜDYOSU
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#10b981', fontWeight: 700 }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }}></span>
          Bu Hafta Son 2 İşletme Kontenjanı
        </div>

        <button 
          onClick={() => onWhatsAppClick()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '12px',
            border: 'none',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)'
          }}
        >
          <MessageCircle size={17} /> WhatsApp Teklif Hattı
        </button>
      </div>
    </nav>
  );
}
