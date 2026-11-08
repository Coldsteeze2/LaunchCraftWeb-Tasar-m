import React, { useState } from 'react';
import { Coffee, Scissors, Car, Briefcase, CheckCircle2, ChevronRight } from 'lucide-react';

const SECTORS = [
  {
    id: 'cafe',
    name: 'Kafe & Restoran',
    icon: Coffee,
    headline: 'Müşterileriniz Masadan QR Menüyle Sipariş Versin',
    description: 'Instagram ve Google Haritalar profilinize tam entegre. Fotoğraflı menü, anlık fiyat güncelleme ve tek tıkla WhatsApp sipariş altyapısı.',
    previewTitle: 'The Roastery & Bistro',
    previewBadge: 'QR Menü & Rezervasyon',
    stats: ['%100 Mobil Uyumlu', 'Google Harita Kurulumu', '1 Günde Teslim'],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'salon',
    name: 'Güzellik & Kuaför',
    icon: Scissors,
    headline: 'Telefonla Uğraşmayın, Müşteri Randevusunu Kendi Alsın',
    description: 'Hizmet kataloğu, uzman kadro tanıtımı ve 7/24 otomatik WhatsApp randevu bildirimleri ile koltuklarınız hiç boş kalmasın.',
    previewTitle: 'Aura Studio & Barber',
    previewBadge: 'Online Randevu Sistemi',
    stats: ['WhatsApp Randevu Botu', 'Instagram Entegrasyonu', 'Hizmet Fiyat Listesi'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'auto',
    name: 'Oto Galeri & Detailing',
    icon: Car,
    headline: 'Araçlarınızı Sahibinden İlanlarından Çok Daha Elit Sergileyin',
    description: 'Yüksek çözünürlüklü araç vitrini, ekspertiz rozetleri, kredi hesaplama modülü ve kurumsal galerici prestiji.',
    previewTitle: 'Apex Motors & Detailing',
    previewBadge: 'Canlı Araç Vitrini',
    stats: ['Kredi Simülatörü', 'Ekspertiz Şablonu', 'VIP Portföy Sayfası'],
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'corporate',
    name: 'Ofis & Kurumsal',
    icon: Briefcase,
    headline: 'Rakiplerinizden Önce Güven Verin, Teklifleri Toplayın',
    description: 'Avukatlık, mali müşavirlik, mimarlık ve danışmanlık ofisleri için elit tipografi, sertifikalar ve kurumsal referans mimarisi.',
    previewTitle: 'Vanguard Mimarlık & Hukuk',
    previewBadge: 'Prestij Kurumsal',
    stats: ['Kurumsal Mail Kurulumu', 'SEO Uyumlu Blog', 'Resmi Sözleşme Desteği'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function SectorDemos({ onWhatsAppClick }) {
  const [activeSector, setActiveSector] = useState(SECTORS[0]);

  return (
    <section id="demos" style={{ maxWidth: '1240px', margin: '40px auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span style={{ fontSize: '0.8rem', color: '#06b6d4', fontWeight: 800, letterSpacing: '1.5px' }}>SEKTÖRÜNÜZÜ SEÇİN</span>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginTop: '4px' }}>İşletmeniz Nasıl Görünecek?</h2>
      </div>

      {/* Sektör Butonları */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {SECTORS.map((sector) => {
          const Icon = sector.icon;
          const isActive = activeSector.id === sector.id;
          return (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '12px',
                border: isActive ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                background: isActive ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: isActive ? '#38bdf8' : '#94a3b8',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: '0.2s all ease'
              }}
            >
              <Icon size={18} /> {sector.name}
            </button>
          );
        })}
      </div>

      {/* Önizleme Kartı */}
      <div style={{
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(3, 7, 18, 0.95) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
      }}>
        {/* Sol Taraf */}
        <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '6px',
            background: 'rgba(6, 182, 212, 0.15)',
            color: '#38bdf8',
            fontSize: '0.75rem',
            fontWeight: 800,
            width: 'fit-content',
            marginBottom: '16px'
          }}>
            {activeSector.previewBadge}
          </span>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, lineHeight: 1.25, marginBottom: '16px' }}>
            {activeSector.headline}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
            {activeSector.description}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {activeSector.stats.map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#10b981" /> {stat}
              </div>
            ))}
          </div>

          <button 
            onClick={() => onWhatsAppClick(`${activeSector.name} için web sitesi demosu ve paket detayları hakkında görüşmek istiyorum.`)}
            style={{
              alignSelf: 'flex-start',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '12px',
              background: '#fff',
              color: '#030712',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            Bu Şablonla 48 Saatte Başlayalım <ChevronRight size={16} />
          </button>
        </div>

        {/* Sağ Taraf */}
        <div style={{ position: 'relative', minHeight: '380px' }}>
          <img 
            src={activeSector.image} 
            alt={activeSector.previewTitle} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.9) 0%, transparent 40%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(10px)',
            padding: '12px 20px',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', display: 'block' }}>REFERANS KONSEPT</span>
            <b style={{ fontSize: '1.1rem', color: '#fff' }}>{activeSector.previewTitle}</b>
          </div>
        </div>
      </div>
    </section>
  );
}
