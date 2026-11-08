import React from 'react';
import { Sparkles, ArrowRight, Eye, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onWhatsAppClick }) {
  return (
    <section style={{ maxWidth: '1240px', margin: '0 auto', padding: '70px 24px 50px', textAlign: 'center' }}>
      {/* Vurgu Rozeti */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px',
        borderRadius: '999px',
        background: 'rgba(6, 182, 212, 0.1)',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        color: '#38bdf8',
        fontSize: '0.8rem',
        fontWeight: 800,
        marginBottom: '24px'
      }}>
        <Sparkles size={15} /> YENİ AÇILAN İŞLETMELERE ÖZEL DİJİTAL BAŞLANGIÇ
      </div>

      {/* Vurucu Başlık */}
      <h1 style={{ fontSize: '3.6rem', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-1.5px', marginBottom: '20px' }}>
        Tabelanızı Astınız.<br />
        <span style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #818cf8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Peki Dijital Kapınız Nerede?
        </span>
      </h1>

      {/* Alt Açıklama */}
      <p style={{ maxWidth: '720px', margin: '0 auto 36px', fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6 }}>
        Google'da arayan müşterilerinizin rakiplerinize gitmesine izin vermeyin. İşletmenizi <b>48 saat içinde</b> satış getiren, modern, mobil uyumlu ve Google Haritalar entegreli bir web sitesiyle açıyoruz.
      </p>

      {/* Aksiyon Butonları */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => onWhatsAppClick('Merhaba, yeni işletmem için 48 saatte teslim web sitesi teklifi almak istiyorum.')}
          style={{
            padding: '16px 32px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
            border: 'none',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 30px rgba(6, 182, 212, 0.4)'
          }}
        >
          48 Saatte Sitenizi Başlatın <ArrowRight size={18} />
        </button>

        <a 
          href="#demos"
          style={{
            padding: '16px 28px',
            borderRadius: '14px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <Eye size={18} /> Canlı Sektörel Demoları Gör
        </a>
      </div>

      {/* 3 Önemli Güvence Rozeti */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '50px', flexWrap: 'wrap', color: '#cbd5e1', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock color="#06b6d4" size={20} /> 48 Saatte Canlıda
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck color="#10b981" size={20} /> Memnuniyet Garantisi
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap color="#f59e0b" size={20} /> Alan Adı & Hosting Dahil
        </div>
      </div>
    </section>
  );
}
