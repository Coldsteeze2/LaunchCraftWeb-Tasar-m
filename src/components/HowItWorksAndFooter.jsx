import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function HowItWorksAndFooter({ onWhatsAppClick }) {
  return (
    <>
      {/* 3 BASİT ADIM BÖLÜMÜ */}
      <section style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '0.8rem', color: '#06b6d4', fontWeight: 800, letterSpacing: '1.5px' }}>
            3 BASİT ADIMDA
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, marginTop: '4px' }}>Nasıl Çalışıyoruz?</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ background: '#090d16', padding: '28px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#06b6d4', display: 'block', marginBottom: '10px' }}>01.</span>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>15 Dakikalık Görüşme</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
              WhatsApp'tan logonuzu, hizmetlerinizi veya menünüzü alıyoruz. Karışık teknik terimlerle vaktinizi çalmıyoruz.
            </p>
          </div>

          <div style={{ background: '#090d16', padding: '28px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#3b82f6', display: 'block', marginBottom: '10px' }}>02.</span>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>48 Saatte Canlı Demo</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Sitenizi 2 gün içinde doğrudan çalışan bir test bağlantısı olarak telefonunuza gönderiyoruz. Düzeltmeleri anında yapıyoruz.
            </p>
          </div>

          <div style={{ background: '#090d16', padding: '28px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '2rem', fontWeight: 900, color: '#10b981', display: 'block', marginBottom: '10px' }}>03.</span>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '8px' }}>Canlıya Alma & Google Kaydı</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Alan adınızı bağlıyor, Google Haritalar profilinizi optimize ediyor ve anahtar teslim sitenizi satışa açıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        marginTop: '80px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '50px 24px 30px',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '10px' }}>
          Dükkanınızı Dijitale Taşımaya Hazır mısınız?
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '24px' }}>
          Hemen yazın, bu haftanın indirimli açılış kontenjanından yararlanın.
        </p>
        <button 
          onClick={() => onWhatsAppClick('Merhaba LaunchCraft! İşletmem için özel teklif almak istiyorum.')}
          style={{
            padding: '14px 32px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            border: 'none',
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <MessageCircle size={18} /> WhatsApp ile Hemen Başlayın
        </button>

        <div style={{ marginTop: '40px', fontSize: '0.75rem', color: '#64748b' }}>
          © 2026 LaunchCraft Web Tasarım. Yeni nesil işletmeler için yüksek dönüşümlü web mimarisi.
        </div>
      </footer>
    </>
  );
}
