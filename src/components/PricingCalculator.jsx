import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function PricingCalculator({ onWhatsAppClick }) {
  const [selectedPlan, setSelectedPlan] = useState('growth'); // 'starter', 'growth', 'vip'
  const [needLogo, setNeedLogo] = useState(true);
  const [needDomain, setNeedDomain] = useState(true);

  const planBasePrices = { starter: 7500, growth: 13500, vip: 24000 };
  const calculatedPrice = planBasePrices[selectedPlan] + (needLogo ? 2500 : 0) + (needDomain ? 1000 : 0);

  return (
    <section style={{ maxWidth: '1000px', margin: '70px auto', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 800, letterSpacing: '1.5px' }}>
          ŞEFFAF & SÜRPRİZSİZ FİYATLAR
        </span>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginTop: '4px' }}>İhtiyacınıza Uygun Paketi Seçin</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '6px' }}>
          Sonradan çıkan gizli masraflar yok. Ne görüyorsanız onu ödersiniz.
        </p>
      </div>

      <div style={{
        background: '#090d16',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        borderRadius: '24px',
        padding: '36px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
      }}>
        {/* Paket Seçimi */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { id: 'starter', name: 'Başlangıç Vitrini', desc: 'Tek sayfa, hızlı iletişim ve menü', days: '24-48 Saat' },
            { id: 'growth', name: 'Büyüme & Satış', desc: 'Çoklu sayfa, randevu/sipariş ve SEO', days: '48-72 Saat', popular: true },
            { id: 'vip', name: 'Tam Donanım VIP', desc: 'Özel yazılım, yönetim paneli ve tam destek', days: '4-5 Gün' }
          ].map((p) => {
            const isSelected = selectedPlan === p.id;
            return (
              <div 
                key={p.id}
                onClick={() => setSelectedPlan(p.id)}
                style={{
                  position: 'relative',
                  padding: '20px',
                  borderRadius: '16px',
                  border: isSelected ? '2px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isSelected ? 'rgba(6, 182, 212, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                  cursor: 'pointer',
                  transition: '0.2s all ease'
                }}
              >
                {p.popular && (
                  <span style={{
                    position: 'absolute',
                    top: '-11px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    color: '#fff',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '999px'
                  }}>
                    EN ÇOK TERCİH EDİLEN
                  </span>
                )}
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '6px' }}>{p.name}</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.4, marginBottom: '12px' }}>{p.desc}</p>
                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>⚡ {p.days}</span>
              </div>
            );
          })}
        </div>

        {/* Ek Seçenekler */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '20px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          marginBottom: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="checkbox" 
                checked={needLogo} 
                onChange={(e) => setNeedLogo(e.target.checked)} 
                style={{ accentColor: '#06b6d4', width: '18px', height: '18px' }} 
              />
              <div>
                <b style={{ fontSize: '0.9rem', color: '#fff' }}>Profesyonel Vektörel Logo & Tabela Tasarımı</b>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>Kartvizit, tabela ve sosyal medya için yüksek çözünürlüklü teslim</span>
              </div>
            </div>
            <span style={{ fontWeight: 800, color: '#38bdf8', fontSize: '0.9rem' }}>+2.500 TL</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="checkbox" 
                checked={needDomain} 
                onChange={(e) => setNeedDomain(e.target.checked)} 
                style={{ accentColor: '#06b6d4', width: '18px', height: '18px' }} 
              />
              <div>
                <b style={{ fontSize: '0.9rem', color: '#fff' }}>1 Yıllık .com Alan Adı + Yüksek Hızlı Bulut Hosting Kurulumu</b>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b' }}>SSL Güvenlik sertifikası ve kurumsal e-posta kurulumu dahil</span>
              </div>
            </div>
            <span style={{ fontWeight: 800, color: '#38bdf8', fontSize: '0.9rem' }}>+1.000 TL</span>
          </label>
        </div>

        {/* Fiyat ve Aksiyon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div>
            <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Toplam Anahtar Teslim Bedel:</span>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#10b981' }}>
              {calculatedPrice.toLocaleString('tr-TR')} TL
            </div>
            <span style={{ fontSize: '0.7rem', color: '#64748b' }}>*Yarısı iş başlangıcında, kalanı onayınız sonrası teslimde ödenir.</span>
          </div>

          <button
            onClick={() => onWhatsAppClick(`Merhaba, ${calculatedPrice.toLocaleString('tr-TR')} TL tutarındaki web sitesi paketi için görüşmek istiyorum.`)}
            style={{
              padding: '16px 36px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              border: 'none',
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 900,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
            }}
          >
            <MessageCircle size={20} /> Bu Paketi WhatsApp'tan Başlat
          </button>
        </div>
      </div>
    </section>
  );
}
