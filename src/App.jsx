import { useEffect, useRef, useState } from 'react';

// Çakışmasız SVG İkonlar
const Icons = {
  Mail: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  ArrowRight: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  CheckCircle2: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  Send: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" x2="11" y1="2" y2="13"/>
      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
    </svg>
  ),
  Sparkles: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  ),
  Play: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  ),
  Cpu: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
    </svg>
  ),
  Zap: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Layers: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  Shield: (props) => (
    <svg width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke={props.color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
    </svg>
  )
};

const SECTORS = [
  {
    id: 'cafe',
    name: 'Kafe & Restoran',
    headline: 'QR Menü & Masadan Hızlı Sipariş Deneyimi',
    description: 'Kullanıcının saniyeler içinde menüyü gezdiği, kategori filtrelediği ve tek tıkla arama yapabildiği ultra hafif mobil altyapı.',
    previewTitle: 'The Roastery & Bistro',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=80',
    features: [
      { icon: Icons.Zap, title: '99+ Hız Skoru', desc: 'Resimler WebP formatında sıkıştırılır, 0.4 saniyede açılır.' },
      { icon: Icons.Cpu, title: 'QR & Masa Entegrasyonu', desc: 'Her masaya özel veya genel QR kod tasarımı hazır verilir.' },
      { icon: Icons.Layers, title: 'Anlık Fiyat Güncelleme', desc: 'Tek tıkla fiyat ve ürünleri kod bilmeden değiştirin.' },
      { icon: Icons.Shield, title: 'Google Haritalar Kaydı', desc: 'Mekanınızın konum ve yorum optimizasyonu eksiksiz yapılır.' }
    ]
  },
  {
    id: 'salon',
    name: 'Güzellik & Kuaför',
    headline: '7/24 Online Randevu ve Hizmet Kataloğu',
    description: 'Müşterilerin işlem seçip çalışan takvimini gördüğü, telefon trafiğini sıfıra indiren modern randevu mimarisi.',
    previewTitle: 'Aura Studio & Barber',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
    features: [
      { icon: Icons.Zap, title: 'Otomatik Hatırlatıcı', desc: 'Randevu saatinde e-posta ile otomatik bildirim gider.' },
      { icon: Icons.Cpu, title: 'Mobil Uyumlu Takvim', desc: 'Telefon ekranına tam oturan pratik saat seçici.' },
      { icon: Icons.Layers, title: 'Instagram Galeri Bağı', desc: 'En son saç/makyaj çalışmalarınız sitede otomatik akar.' },
      { icon: Icons.Shield, title: 'Şeffaf Hizmet Listesi', desc: 'Fiyatlar ve süreler net görünür, güven verir.' }
    ]
  },
  {
    id: 'auto',
    name: 'Oto Galeri & Detailing',
    headline: 'Yüksek Çözünürlüklü Araç Vitrini & Portföy',
    description: 'İlan sitelerinin karmaşasından uzak, işletmenize ait kurumsal vitrin ve ekspertiz rapor modülü.',
    previewTitle: 'Apex Motors & Detailing',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    poster: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80',
    features: [
      { icon: Icons.Zap, title: 'Yüksek Çözünürlüklü Galeri', desc: 'Araç fotoğrafları kaliteden ödün vermeden hızlı yüklenir.' },
      { icon: Icons.Cpu, title: 'Ekspertiz Rozetleri', desc: 'Değişen/boya durumu şeffaf şablonla gösterilir.' },
      { icon: Icons.Layers, title: 'Kredi Simülatörü', desc: 'Müşteri aylık taksit tutarını site üzerinden hesaplar.' },
      { icon: Icons.Shield, title: 'Kurumsal Güven', desc: 'Kendi alan adınızla prestijli bir marka kimliği yaratır.' }
    ]
  },
  {
    id: 'corporate',
    name: 'Ofis & Kurumsal',
    headline: 'Avukatlık, Mimarlık ve Danışmanlık Prestiji',
    description: 'Resmi teklif toplama, referans projeleri sergileme ve elit tipografi ile kurumsal ciddiyet.',
    previewTitle: 'Vanguard Mimarlık & Hukuk',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
    features: [
      { icon: Icons.Zap, title: 'Kurumsal E-Posta', desc: 'info@sirketiniz.com altyapısı ve güvenli formlar.' },
      { icon: Icons.Cpu, title: 'Arama Motoru (SEO)', desc: 'Bölgenizdeki kurumsal aramalarda ilk sayfada listelenin.' },
      { icon: Icons.Layers, title: 'Sertifika & Belge Alanı', desc: 'Lisans ve referanslarınızı şık kartlarla sunun.' },
      { icon: Icons.Shield, title: 'SSL & KVKK Uyumu', desc: 'En yüksek güvenlik sertifikası ve yasal metinler hazır.' }
    ]
  },
  {
    id: 'creator',
    name: 'İçerik Üreticisi & Marka',
    headline: 'Tüm Sosyal Medyanızı Tek Bir VIP Vitrinde Toplayın',
    description: 'Linktree gibi basit kalıplardan kurtulun. Sponsorluklar için Media Kit, bilet/ürün satışı, YouTube/TikTok vitrini ve tek tıkla iş birliği teklif formu tek sayfada.',
    previewTitle: 'Creator Hub & Media Kit',
    poster: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    features: [
      { icon: Icons.Zap, title: 'İnteraktif Media Kit', desc: 'Markalara doğrudan sunabileceğiniz anlık güncellenen istatistik sayfası.' },
      { icon: Icons.Cpu, title: 'Tüm Linkler Tek Elde', desc: 'YouTube, TikTok, Twitch ve Spotify içerikleriniz tek linkte elit bir tasarımla.' },
      { icon: Icons.Layers, title: 'Dijital Ürün & Danışmanlık', desc: 'E-kitap, koçluk veya özel bülten üyeliklerinizi komisyonsuz satın.' },
      { icon: Icons.Shield, title: 'Resmi Sponsorluk Formu', desc: 'Markaların size doğrudan kurumsal teklif gönderebileceği filtreli form.' }
    ]
  }
];

const WIZARD_SECTORS = [
  'Kafe & Restoran',
  'Güzellik & Kuaför',
  'Oto Galeri & Detailing',
  'Ofis & Kurumsal',
  'Bireysel & İçerik Üreticisi'
];

const WIZARD_NEEDS = [
  'QR Menü & Sipariş',
  'Online Randevu Takvimi',
  'Araç/Portföy Vitrini',
  'Kurumsal Prestij & İletişim'
];

const translations = {
  tr: {
    nav: ['Giriş', 'Neler Yapıyoruz?', 'Öncesi / Sonrası', 'Çözüm Paketleri', 'İletişim & Teklif', 'Hakkımızda'],
    heroBadge: 'YENİ AÇILAN İŞLETMELER İÇİN DİJİTAL MİMARİ',
    heroTitle: 'Tabelanızı Astınız.',
    heroSubtitle: 'Peki Dijital Kapınız Nerede?',
    heroDescription: 'Yeni dükkanınız ve ofisiniz için 48 saatte anahtar teslim, prestijli ve satış getiren profesyonel web siteleri inşa ediyoruz.',
    explore: 'Neler Yaptığımızı Görün',
    quote: 'Hızlı Teklif İste',
    showcase: 'Canlı Geliştirme Vitrini',
    showcaseCards: [
      ['Arayüz & Kodlama Mimarisi', '01. React & Modern Kodlama', 'Kod editöründe yazılım geliştirme ekranı', 'Ağır hazır şablonlar yerine sıfırdan React ve hafif bileşenlerle temiz, optimize edilmiş kaynak kod mimarisi kuruyoruz.'],
      ['Performans & Responsive Testi', '02. 0.4s Hız & Mobil Uyum', 'Analitik ve performans grafikleri', 'Masaüstü, tablet ve mobil cihazlarda tek piksel kayma olmadan 99+ Google Lighthouse hız skorunu garanti ediyoruz.'],
      ['Canlıya Alma & Google Entegrasyonu', '03. Domain, SSL & Yayına Alma', 'Yazılım geliştirme çalışma ortamı', 'Sitenizi alan adına bağlıyor, SSL güvenlik sertifikasını aktif ediyor ve Google Haritalar kaydıyla 48 saatte teslim ediyoruz.']
    ],
    sectors: WIZARD_SECTORS,
    needs: WIZARD_NEEDS,
    logos: ['Logom var', 'Logoya ihtiyacım var'],
    domains: ['Alan adım (.com) var', 'Alan adına ihtiyacım var'],
    contact: ['BİZE ULAŞIN', 'Projenizi Başlatalım', 'İhtiyaçlarınızı belirleyin, işletmenize özel teklif talebinizi hazırlayın.', 'Akıllı Proje Kapsamı ve İhtiyaç Belirleyici', 'Adım', 'Tamamlandı', 'Sihirbaz ilerlemesi', 'İşletmenizin Türü Nedir?', 'En Çok Hangi Çözüme İhtiyacınız Var?', 'Mevcut Varlıklarınız Var mı?', 'Geri', 'Seçimleri Tamamla', 'Devam Et', 'Proje kapsamınız', 'Sektör', 'İhtiyaç', 'Logo durumu', 'Alan adı durumu', 'Ek talep', 'Ek talebi kaldır', 'İşletmenizin Adı', 'Telefon Numaranız', 'E-Posta Adresiniz', 'Teklif Talebini Gönder (E-Posta)', 'E-Posta Taslağınız Hazırlandı!', 'Mesajınız e-posta uygulamanıza aktarıldı. Gönder butonuna basarak bize ulaştırabilirsiniz.', 'Yeni Form Doldur'],
    mail: ['Web Sitesi Teklif Talebi', 'İşletme Adı', 'Sektör', 'İhtiyaç', 'Logo durumu', 'Alan adı durumu', 'Telefon', 'E-Posta', 'İstekler'],
    social: {
      title: 'Sosyal Medyadan da Ulaşabilirsiniz',
      description: 'Sorularınız, hızlı ön bilgi veya portföyümüzdeki güncel işleri yakından incelemek için bize Instagram DM üzerinden de anında yazabilirsiniz.',
      action: 'Mesaj Gönder / Takip Et ↗',
      heroIntro: 'Fiyat & Ön Bilgi İçin',
      heroAction: "Instagram DM'den Ulaşın ↗",
      emailIntro: 'Resmi Teklif & İletişim (Tıkla & Kopyala)',
      emailCopied: 'Panoya Kopyalandı',
      emailCopyError: 'Kopyalanamadı, tekrar deneyin',
      instagramLabel: 'Instagram: @launchcraftweb (yeni sekmede açılır)'
    },
    comparison: ['FARK YARATAN DÖNÜŞÜM', 'FARK YARATAN DİJİTAL DÖNÜŞÜM', 'Tabeladan Dijital Vitrine: Öncesi ve Sonrası', 'Rastgele açılmış, fotoğrafları eksik ve güvensiz duran sayfalar yerine müşteriyi karşılayan profesyonel LaunchCraft mimarisi.', 'Rastgele açılmış, bilgileri eksik profiller yerine müşteriyi karşılayan profesyonel bir vitrin.', '48 SAATTE HAZIR', 'İşletmenizin dijital vitrini.', 'Müşterilerinizle ilk andan itibaren güvenle buluşun.', 'Rezervasyon Yap', 'DİJİTAL VİTRİNİNİZ', 'Güven veren ilk izlenim', 'Hizmetler, iletişim ve rezervasyon tek adreste.', 'İşletme Profili', 'Bilgiler eksik', 'İşletme adı', 'Açıklama ve çalışma saatleri eklenmemiş.', 'İletişim bilgisi yok', 'DAĞINIK LİNKLER', 'Profil bağlantısı', 'Eski iletişim bilgisi', 'Eksik konum', 'Eski Durum: Eksik Google Profili & Dağınık Linkler', 'LaunchCraft Dokunuşu: Satış Getiren Vitrin', 'Öncesi ve sonrası karşılaştırma kaydırıcısı', 'Kaydırıcıyı hareket ettirerek dijital vitrininizin yaratabileceği farkı keşfedin.', 'İşletmenizi Bu Seviyeye Taşıyın', 'İşletmenizi Dönüştürün'],
    mute: ['Sesleri kapat', 'Sesleri aç'],
  },
  en: {
    nav: ['Home', 'Services', 'Before & After', 'Packages', 'Contact', 'About Us'],
    heroBadge: 'DIGITAL ARCHITECTURE FOR NEW BUSINESSES',
    heroTitle: 'Your doors are open.',
    heroSubtitle: 'Where is your digital storefront?',
    heroDescription: 'We build prestigious, conversion-focused turnkey websites for your new business or office in 48 hours.',
    explore: 'Explore Work',
    quote: 'Get Instant Quote',
    showcase: 'Development Showcase',
    showcaseCards: [
      ['Interface & Code Architecture', '01. React & Modern Development', 'Software development in a code editor', 'Instead of heavy templates, we build a clean, optimized codebase from scratch with React and lightweight components.'],
      ['Performance & Responsive Testing', '02. 0.4s Speed & Mobile Design', 'Analytics and performance charts', 'We guarantee a 99+ Google Lighthouse speed score and pixel-perfect layouts on desktop, tablet and mobile.'],
      ['Launch & Google Integration', '03. Domain, SSL & Deployment', 'Software development workspace', 'We connect your domain, activate SSL security and deliver your site with Google Maps registration within 48 hours.']
    ],
    sectors: ['Café & Restaurant', 'Beauty & Hair Salon', 'Car Dealership & Detailing', 'Office & Corporate', 'Individual & Content Creator'],
    needs: ['QR Menu & Ordering', 'Online Appointment Calendar', 'Vehicle / Portfolio Showcase', 'Corporate Presence & Contact'],
    logos: ['I have a logo', 'I need a logo'],
    domains: ['I have a domain (.com)', 'I need a domain'],
    contact: ['GET IN TOUCH', 'Let’s Start Your Project', 'Tell us what you need and prepare a tailored quote request.', 'Smart Project Scope & Needs Wizard', 'Step', 'Complete', 'Wizard progress', 'What type of business do you have?', 'Which solution do you need most?', 'What assets do you already have?', 'Back', 'Complete Selection', 'Continue', 'Your project scope', 'Sector', 'Requirement', 'Logo status', 'Domain status', 'Additional request', 'Remove additional request', 'Business Name', 'Phone Number', 'Email Address', 'Send Quote Request (Email)', 'Your Email Draft Is Ready!', 'Your message has been passed to your email app. Send it there to contact us.', 'Start a New Form'],
    mail: ['Website Quote Request', 'Business Name', 'Sector', 'Requirement', 'Logo status', 'Domain status', 'Phone', 'Email', 'Requests'],
    social: {
      title: 'Connect on Social Media',
      description: 'Send us an Instagram DM for questions, quick information, or a closer look at the latest work in our portfolio.',
      action: 'Message / Follow ↗',
      heroIntro: 'Get Pricing & Info',
      heroAction: 'Chat via Instagram DM ↗',
      emailIntro: 'Official Mail (Click to Copy)',
      emailCopied: 'Copied to Clipboard',
      emailCopyError: 'Copy failed, please try again',
      instagramLabel: 'Instagram: @launchcraftweb (opens in a new tab)'
    },
    comparison: ['A TRANSFORMATION THAT MAKES A DIFFERENCE', 'A DIGITAL TRANSFORMATION THAT MAKES A DIFFERENCE', 'From Signboard to Digital Storefront: Before and After', 'Replace incomplete, untrustworthy pages with a professional LaunchCraft experience that welcomes customers.', 'Replace incomplete profiles with a professional storefront that welcomes customers.', 'READY IN 48 HOURS', 'Your digital storefront.', 'Welcome your customers with confidence from the first moment.', 'Book an Appointment', 'YOUR DIGITAL STOREFRONT', 'A trustworthy first impression', 'Services, contact and bookings in one place.', 'Business Profile', 'Incomplete information', 'Business name', 'Description and opening hours not provided.', 'No contact information', 'SCATTERED LINKS', 'Profile link', 'Old contact details', 'Missing location', 'Before: Incomplete Google Profile & Scattered Links', 'LaunchCraft: A Conversion-Focused Storefront', 'Before and after comparison slider', 'Move the slider to discover the difference a digital storefront can make.', 'Take Your Business to the Next Level', 'Transform Your Business'],
    mute: ['Mute sounds', 'Enable sounds'],
  }
};

const localizedOption = (value, source, target) => {
  const index = source.indexOf(value);
  return index < 0 ? value : target[index];
};

const englishSectors = {
  cafe: {
    name: 'Café & Restaurant', headline: 'QR Menu & Fast Table Ordering',
    description: 'A lightweight mobile experience for browsing menus, filtering categories and calling in a single tap.',
    features: [['99+ Speed Score', 'Images are compressed in WebP format and load in 0.4 seconds.'], ['QR & Table Integration', 'Ready-made QR codes for individual tables or general use.'], ['Instant Price Updates', 'Change products and prices without coding.'], ['Google Maps Registration', 'Your location and review profile is optimized.']]
  },
  salon: {
    name: 'Beauty & Hair Salon', headline: '24/7 Online Bookings & Service Catalog',
    description: 'A modern booking experience that lets customers select services and see staff availability.',
    features: [['Automatic Reminders', 'Email reminders are sent for appointments.'], ['Mobile-Friendly Calendar', 'A convenient time selector designed for phones.'], ['Instagram Gallery', 'Show your latest hair and makeup work on your website.'], ['Transparent Service List', 'Clear prices and durations inspire confidence.']]
  },
  auto: {
    name: 'Car Dealership & Detailing', headline: 'High-Resolution Vehicle & Portfolio Showcase',
    description: 'A dedicated business showcase and inspection report module, free from the clutter of listing sites.',
    features: [['High-Resolution Gallery', 'Vehicle photos load quickly without compromising quality.'], ['Inspection Badges', 'Display vehicle condition with a transparent template.'], ['Finance Calculator', 'Customers can calculate monthly payments on the site.'], ['Business Credibility', 'Build a prestigious brand with your own domain.']]
  },
  corporate: {
    name: 'Office & Corporate', headline: 'A Prestigious Presence for Professional Services',
    description: 'Collect formal inquiries and showcase projects with refined typography and a professional presence.',
    features: [['Business Email', 'Business email infrastructure and secure forms.'], ['Search Engine Optimization', 'Get found in local business searches.'], ['Certificates & Documents', 'Present licenses and references in elegant cards.'], ['SSL & Privacy Compliance', 'Security certificates and legal text included.']]
  },
  creator: {
    name: 'Content Creator & Brand', headline: 'Bring Your Social Media Together in One VIP Showcase',
    description: 'Move beyond simple link templates. Bring your media kit, ticket and product sales, YouTube and TikTok showcase, and partnership form together on one page.',
    features: [['Interactive Media Kit', 'An up-to-date statistics page to share with brands.'], ['All Your Links in One Place', 'Showcase YouTube, TikTok, Twitch and Spotify in one elegant link.'], ['Digital Products & Consulting', 'Sell ebooks, coaching or newsletter memberships without commission.'], ['Sponsorship Inquiry Form', 'A filtered form for direct business inquiries from brands.']]
  }
};

const englishPackages = [
  { name: 'Starter Showcase', desc: 'For new businesses seeking a quick launch and a foundational business identity.', days: '24–48 Hour Delivery', features: ['Mobile-Friendly Single-Page Showcase', 'Email Quote & Contact Form', 'Google Maps & Location Registration', 'Basic SEO Setup', 'SSL Security Certificate'] },
  { name: 'Growth & Sales', desc: 'For businesses attracting customers with a menu, service list or booking system.', days: '48–72 Hour Delivery', features: ['Multi-Page Business Website', 'QR Menu or Booking Integration', 'Advanced Google SEO', 'Business Email Account', 'One Year of Technical Support'] },
  { name: 'Full VIP', desc: 'For brands seeking a custom dashboard, unlimited pages and a complete digital identity.', days: '4–5 Day Delivery', features: ['Custom Content Management Dashboard', 'Bilingual Support (TR / EN)', 'Vector Logo & Identity Support', 'High-Speed Dedicated Server', '24/7 Priority Consulting'] }
];

function WizardOption({ label, selected, onSelect, playSoftSound }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => { playSoftSound('click'); onSelect(); }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        width: '100%',
        minHeight: '58px',
        padding: '14px 16px',
        borderRadius: '14px',
        border: selected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
        background: selected ? 'rgba(56, 189, 248, 0.1)' : '#0b111c',
        color: selected ? '#e0f2fe' : '#cbd5e1',
        boxShadow: selected ? '0 0 16px rgba(56, 189, 248, 0.15)' : 'none',
        textAlign: 'left',
        fontSize: '0.9rem',
        fontWeight: 700,
        cursor: 'pointer'
      }}
    >
      {label}
      {selected && <Icons.CheckCircle2 size={18} color="#38bdf8" />}
    </button>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('tr');
  const t = translations[lang];
  const [isMuted, setIsMuted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [emailCopyError, setEmailCopyError] = useState(false);
  const copyTimer = useRef(null);
  const copyPending = useRef(false);
  const mutedRef = useRef(false);
  const audioContextRef = useRef(null);
  const audioUnsupportedRef = useRef(false);
  const tabSoundTimer = useRef(null);
  const [selectedSector, setSelectedSector] = useState(SECTORS[0]);
  const [sectorVideoErrors, setSectorVideoErrors] = useState({});
  const [sliderPos, setSliderPos] = useState(50);
  const sliderPointer = useRef(null);
  const sliderHandle = useRef(null);

  // Form State
  const [emailForm, setEmailForm] = useState({
    businessName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);
  const [step, setStep] = useState(1);
  const [wizardComplete, setWizardComplete] = useState(false);
  const [projectScope, setProjectScope] = useState({ sector: '', need: '', logo: '', domain: '' });

  const agencyEmail = 'launchcraftwebcommunication@gmail.com';
  const translateScope = (value, field) => {
    const sources = { sector: WIZARD_SECTORS, need: WIZARD_NEEDS, logo: translations.tr.logos, domain: translations.tr.domains };
    const targets = { sector: t.sectors, need: t.needs, logo: t.logos, domain: t.domains };
    return localizedOption(value, sources[field], targets[field]);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => () => {
    window.clearTimeout(tabSoundTimer.current);
    window.clearTimeout(copyTimer.current);
    const context = audioContextRef.current;
    audioContextRef.current = null;
    if (context && context.state !== 'closed') {
      context.close().catch(error => console.error('Ses kaynağı kapatılamadı:', error));
    }
  }, []);

  const prepareAudio = () => {
    if (mutedRef.current) return null;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      if (!audioUnsupportedRef.current) {
        console.warn('Bu tarayıcı Web Audio API desteklemiyor.');
        audioUnsupportedRef.current = true;
      }
      return null;
    }
    if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
      audioContextRef.current = new AudioContext();
    }
    return audioContextRef.current;
  };

  const playSoftSound = async (type = 'click') => {
    if (mutedRef.current) return;
    try {
      const context = prepareAudio();
      if (!context) return;
      if (context.state === 'suspended') await context.resume();
      if (mutedRef.current || context.state === 'closed') return;

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.connect(gain);
      gain.connect(context.destination);
      const now = context.currentTime;
      const isTab = type === 'tab';
      const duration = isTab ? 0.08 : 0.05;
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(isTab ? 520 : 320, now);
      oscillator.frequency.exponentialRampToValueAtTime(isTab ? 680 : 140, now + duration);
      gain.gain.setValueAtTime(isTab ? 0.05 : 0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
      };
      oscillator.start(now);
      oscillator.stop(now + duration);
    } catch (error) {
      console.error('Ses efekti oynatılamadı:', error);
    }
  };

  const scheduleNavigationSound = (type) => {
    try {
      const context = prepareAudio();
      if (!context) return;
      if (context.state === 'suspended') {
        context.resume().catch(error => console.error('Ses kaynağı başlatılamadı:', error));
      }
      window.clearTimeout(tabSoundTimer.current);
      tabSoundTimer.current = window.setTimeout(() => playSoftSound(type), 0);
    } catch (error) {
      console.error('Ses kaynağı başlatılamadı:', error);
    }
  };

  const copyEmail = async () => {
    playSoftSound('click');
    if (copyPending.current) return;
    copyPending.current = true;
    window.clearTimeout(copyTimer.current);
    setCopiedEmail(false);
    setEmailCopyError(false);
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API is unavailable.');
      await navigator.clipboard.writeText(agencyEmail);
      setCopiedEmail(true);
      copyTimer.current = window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      console.error('E-posta panoya kopyalanamadı:', error);
      setEmailCopyError(true);
    } finally {
      copyPending.current = false;
    }
  };

  const startMutedVideo = (event, onPlaybackError) => {
    const video = event.currentTarget;
    video.muted = true;
    video.play().catch((error) => {
      if (video.isConnected) {
        console.error('Video otomatik oynatılamadı:', error);
        onPlaybackError();
      }
    });
  };

  const updateSliderPosition = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setSliderPos(Math.round(Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))));
  };

  const handleSliderKeyDown = (event) => {
    const steps = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1, PageDown: -10, PageUp: 10 };
    if (event.key === 'Home') {
      event.preventDefault();
      setSliderPos(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setSliderPos(100);
    } else if (event.key in steps) {
      event.preventDefault();
      setSliderPos(prev => Math.min(100, Math.max(0, prev + steps[event.key])));
    }
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const sector = translateScope(projectScope.sector, 'sector');
    const need = translateScope(projectScope.need, 'need');
    const logo = translateScope(projectScope.logo, 'logo');
    const domain = translateScope(projectScope.domain, 'domain');
    const note = lang === 'en' && emailForm.messageEn ? emailForm.messageEn : emailForm.message;
    const subject = encodeURIComponent(`${t.mail[0]}: ${emailForm.businessName} | ${sector} | ${need} | ${logo} | ${domain}`);
    const body = encodeURIComponent(
      `${t.mail[1]}: ${emailForm.businessName}\n` +
      `${t.mail[2]}: ${sector}\n` +
      `${t.mail[3]}: ${need}\n` +
      `${t.mail[4]}: ${logo}\n` +
      `${t.mail[5]}: ${domain}\n` +
      `${t.mail[6]}: ${emailForm.phone}\n` +
      `${t.mail[7]}: ${emailForm.email}\n\n` +
      (note ? `${t.mail[8]}:\n${note}` : '')
    );
    window.location.href = `mailto:${agencyEmail}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const navLinks = [
    { id: 'home', label: t.nav[0] },
    { id: 'services', label: t.nav[1] },
    { id: 'transformation', label: t.nav[2] },
    { id: 'packages', label: t.nav[3] },
    { id: 'contact', label: t.nav[4] },
    { id: 'about', label: t.nav[5] }
  ];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#030712', color: '#f9fafb', display: 'flex', flexDirection: 'column' }}>
      <div aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, filter: 'blur(1px)' }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-31913-large.mp4" type="video/mp4" onError={() => console.error('Primary ambient video could not be loaded.')} />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-hexagonal-lines-and-numbers-31846-large.mp4" type="video/mp4" onError={() => console.error('Alternative ambient video could not be loaded.')} />
        </video>
      </div>
      <div aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1, background: 'radial-gradient(circle at 50% 30%, rgba(9, 13, 22, 0.65) 0%, rgba(5, 7, 12, 0.95) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, minHeight: '100vh', display: 'flex', flexDirection: 'column', flex: 1 }}>

      {/* 1. ÜST BARI (NAVBAR) */}
      <nav className="site-nav" style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(9, 13, 22, 0.85)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'space-between'
      }}>
        <div className="nav-brand"
          onClick={() => setActivePage('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <img
            src="/logo.png.jpg"
            alt="LaunchCraft Logo"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              boxShadow: '0 0 15px rgba(0, 150, 255, 0.25)',
              display: 'block'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
              Launch<span style={{ color: '#38bdf8' }}>Craft</span>
            </span>
            <span style={{ fontSize: '0.62rem', letterSpacing: '2px', color: '#94a3b8', fontWeight: 700 }}>
              WEB TASARIM
            </span>
          </div>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  if (link.id === 'transformation' && activePage !== 'transformation') setSliderPos(50);
                  setActivePage(link.id);
                  window.scrollTo(0, 0);
                  scheduleNavigationSound('tab');
                }}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                  color: isActive ? '#38bdf8' : '#94a3b8',
                  fontWeight: isActive ? 800 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div role="group" aria-label={lang === 'tr' ? 'Dil seçimi' : 'Language selection'} style={{ display: 'flex', padding: '3px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {['tr', 'en'].map(code => (
            <button key={code} type="button" aria-pressed={lang === code} onClick={() => { playSoftSound('click'); setLang(code); }} style={{ minWidth: '36px', minHeight: '36px', border: 0, borderRadius: '7px', cursor: 'pointer', color: lang === code ? '#38bdf8' : '#94a3b8', background: lang === code ? '#111c2c' : 'transparent', fontWeight: 800, transition: 'background 0.15s, color 0.15s' }}>
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label={isMuted ? t.mute[1] : t.mute[0]}
          aria-pressed={isMuted}
          onClick={() => {
            mutedRef.current = !mutedRef.current;
            setIsMuted(mutedRef.current);
          }}
          style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.12)', background: 'rgba(255, 255, 255, 0.04)', color: isMuted ? '#94a3b8' : '#38bdf8', cursor: 'pointer' }}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            {isMuted ? <path d="m16 9 5 6m0-6-5 6" /> : <><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a10 10 0 0 1 0 14" /></>}
          </svg>
        </button>
        <button 
          onClick={() => {
            setActivePage('contact');
            window.scrollTo(0, 0);
            scheduleNavigationSound('click');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(37, 99, 235, 0.3)'
          }}
        >
          <Icons.Mail size={16} /> {lang === 'tr' ? 'Teklif Al' : 'Get a Quote'}
        </button>
        </div>
      </nav>

      {/* 2. SAYFALAR */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', willChange: 'opacity, transform', transform: 'translateZ(0)', transition: 'opacity 0.15s ease-out' }}>
        <div key={activePage} className="page-transition" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* ============================================================ */}
        {/* SAYFA 1: ANA SAYFA (SADE, FERAH & ŞIK VİTRİN)               */}
        {/* ============================================================ */}
        {activePage === 'home' && (
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px 24px',
            minHeight: 'calc(100vh - 150px)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(600px, 100%)',
              height: '350px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div className="hero-social-row">
              <div className="hero-social-side hero-social-left">
                <button type="button" className={`hero-email-badge${copiedEmail ? ' is-copied' : ''}`} onClick={copyEmail}>
                  <span className="hero-email-icon"><Icons.Mail size={16} color={copiedEmail ? '#4ade80' : '#60a5fa'} /></span>
                  <span className="hero-instagram-text">
                    <span className="hero-email-intro" aria-live="polite">{emailCopyError ? t.social.emailCopyError : copiedEmail ? t.social.emailCopied : t.social.emailIntro}</span>
                    <span className="hero-email-address">{copiedEmail && '✓ '}{agencyEmail}</span>
                  </span>
                </button>
              </div>
              <div className="hero-architecture-badge">
                <Icons.Sparkles size={14} /> {t.heroBadge}
              </div>
              <div className="hero-social-side hero-social-right">
                <a className="hero-instagram-badge" href="https://www.instagram.com/launchcraftweb/" target="_blank" rel="noopener noreferrer" onClick={() => playSoftSound('click')}>
                  <Icons.Instagram aria-hidden="true" />
                  <span className="hero-instagram-text">
                    <span className="hero-instagram-intro">{t.social.heroIntro}</span>
                    <span className="hero-instagram-action">{t.social.heroAction}</span>
                  </span>
                </a>
              </div>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.9rem, 7vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-2px',
              maxWidth: '850px',
              margin: '0 auto 24px'
            }}>
              {t.heroTitle}<br />
              <span style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {t.heroSubtitle}
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              maxWidth: '600px',
              lineHeight: 1.6,
              margin: '0 auto 40px',
              fontWeight: 400
            }}>
              {t.heroDescription}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo(0, 0);
                  scheduleNavigationSound('click');
                }}
                style={{
                  padding: '16px 36px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                  border: 'none',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.35)'
                }}
              >
                {t.explore} <Icons.ArrowRight size={18} />
              </button>

              <button 
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo(0, 0);
                  scheduleNavigationSound('click');
                }}
                style={{
                  padding: '16px 30px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#e2e8f0',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {t.quote}
              </button>
            </div>

            <section aria-label={t.showcase} style={{ width: '100%', maxWidth: '1000px', marginTop: '56px', textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 900, marginBottom: '20px' }}>{t.showcase}</h2>
              <div className="showcase-grid" style={{ display: 'grid', gap: '16px' }}>
                {[
                  {
                    title: 'Arayüz & Kodlama Mimarisi',
                    badge: '01. React & Modern Kodlama',
                    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
                    alt: 'Kod editöründe yazılım geliştirme ekranı',
                    description: 'Ağır hazır şablonlar yerine sıfırdan React ve hafif bileşenlerle temiz, optimize edilmiş kaynak kod mimarisi kuruyoruz.'
                  },
                  {
                    title: 'Performans & Responsive Testi',
                    badge: '02. 0.4s Hız & Mobil Uyum',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                    alt: 'Analitik ve performans grafikleri',
                    description: 'Masaüstü, tablet ve mobil cihazlarda tek piksel kayma olmadan 99+ Google Lighthouse hız skorunu garanti ediyoruz.'
                  },
                  {
                    title: 'Canlıya Alma & Google Entegrasyonu',
                    badge: '03. Domain, SSL & Yayına Alma',
                    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
                    alt: 'Yazılım geliştirme çalışma ortamı',
                    description: 'Sitenizi alan adına bağlıyor, SSL güvenlik sertifikasını aktif ediyor ve Google Haritalar kaydıyla 48 saatte teslim ediyoruz.'
                  }
                ].map((item, index) => (
                  <article key={item.title} style={{ background: '#090d16', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '13px 15px', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <span aria-hidden="true" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', flexShrink: 0 }} />
                      <span aria-hidden="true" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', flexShrink: 0 }} />
                      <span aria-hidden="true" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                      <span style={{ color: '#94a3b8', fontSize: '0.7rem', fontWeight: 700, marginLeft: '5px' }}>{t.showcaseCards[index][0]}</span>
                    </div>
                    <img src={item.image} alt={t.showcaseCards[index][2]} style={{ display: 'block', height: '190px', width: '100%', objectFit: 'cover' }} />
                    <div style={{ padding: '18px 20px 20px' }}>
                      <h2 style={{ display: 'inline-block', padding: '6px 9px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.1)', color: '#7dd3fc', fontSize: '0.8rem', fontWeight: 800, lineHeight: 1.4, marginBottom: '10px' }}>{t.showcaseCards[index][1]}</h2>
                      <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>{t.showcaseCards[index][3]}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {activePage === 'about' && (
          <div style={{ maxWidth: '1100px', margin: '70px auto 90px', padding: '0 24px', width: '100%' }}>
            <section aria-labelledby="about-heading" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 54px' }}>
              <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 800, letterSpacing: '1.5px' }}>{lang === 'tr' ? 'BİZ KİMİZ?' : 'WHO ARE WE?'}</span>
              <h1 id="about-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-1px', margin: '14px 0 24px' }}>
                {lang === 'tr' ? 'Yeni Nesil İşletmeler İçin Hızlı ve Prestijli Dijital Mimari' : 'Fast, Prestigious Digital Architecture for the Next Generation of Businesses'}
              </h1>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.8 }}>
                {lang === 'tr' ? 'LaunchCraft olarak geleneksel ajansların haftalar süren hantal süreçlerini, yüksek maliyetlerini ve karmaşık teknik jargolarını bir kenara bıraktık. Amacımız net: Kapısını yeni açan işletmelere, dükkanlara ve vizyoner markalara 48 saat içinde dünya standartlarında, satış getiren anahtar teslim bir dijital vitrin kazandırmak.' : 'At LaunchCraft, we leave behind the lengthy processes, high costs and technical jargon of traditional agencies. Our goal is simple: give new businesses and visionary brands a world-class, conversion-focused turnkey digital storefront within 48 hours.'}
              </p>
            </section>

            <section aria-label={lang === 'tr' ? 'Temel prensiplerimiz' : 'Our principles'} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '18px' }}>
              {[
                { title: '48 Saatte Çevik Teslimat', description: 'Aylarca süren revize kuyrukları yok; iş başlangıcından 2 gün sonra siteniz yayında ve satışa hazır.', icon: Icons.Zap },
                { title: 'Sıfır Teknik Yük', description: 'Domain, hosting, SSL ve Google Harita kaydı gibi teknik pürüzlerin tamamını biz üstleniriz; siz sadece işinize odaklanırsınız.', icon: Icons.Shield },
                { title: 'Dönüşüm Odaklı Tasarım', description: 'Sadece güzel görünen değil; doğrudan telefon, WhatsApp veya rezervasyon trafiği üreten arayüzler inşa ederiz.', icon: Icons.Layers }
              ].map(({ title, description, icon: Icon }, index) => (
                <article key={title} style={{
                  padding: '28px',
                  borderRadius: '20px',
                  border: '1px solid rgba(56, 189, 248, 0.18)',
                  background: 'linear-gradient(145deg, rgba(20, 42, 59, 0.75), rgba(9, 13, 22, 0.9))',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25), 0 0 24px rgba(56, 189, 248, 0.06)'
                }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', marginBottom: '20px' }}>
                    <Icon size={22} />
                  </div>
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 800, lineHeight: 1.35, marginBottom: '12px' }}>{lang === 'tr' ? title : ['Agile 48-Hour Delivery', 'Zero Technical Burden', 'Conversion-Focused Design'][index]}</h2>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7 }}>{lang === 'tr' ? description : ['No months-long revision queues: your site is live and ready to sell two days after work begins.', 'We handle the domain, hosting, SSL and Google Maps registration so you can focus on your business.', 'We build interfaces that not only look great but generate calls, WhatsApp conversations and bookings.'][index]}</p>
                </article>
              ))}
            </section>

            <section style={{ marginTop: '50px', padding: 'clamp(24px, 5vw, 40px)', textAlign: 'center', borderRadius: '22px', border: '1px solid rgba(56, 189, 248, 0.2)', background: 'linear-gradient(135deg, rgba(14, 116, 144, 0.12), rgba(37, 99, 235, 0.1))' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, marginBottom: '20px' }}>{lang === 'tr' ? 'Bizimle Tanışın & Projenizi Konuşalım' : 'Meet Us & Let’s Discuss Your Project'}</h2>
              <button
                type="button"
                onClick={() => {
                  setFormSent(false);
                  setActivePage('contact');
                  window.scrollTo(0, 0);
                  scheduleNavigationSound('click');
                }}
                style={{ padding: '13px 26px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #0284c7, #2563eb)', color: '#fff', fontSize: '0.95rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 6px 20px rgba(37, 99, 235, 0.3)' }}
              >
                {lang === 'tr' ? 'Teklif Alın' : 'Get a Quote'}
              </button>
            </section>
          </div>
        )}

        {/* ============================================================ */}
        {/* SAYFA 2: NELER YAPIYORUZ? (DEMO VİDEO & ALTINDA UFAK BİLGİLER)*/}
        {/* ============================================================ */}
        {activePage === 'services' && (
          <div style={{ maxWidth: '1180px', margin: '40px auto 0', padding: '0 24px', width: '100%' }}>
            
            {/* Başlık */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 800, letterSpacing: '1.5px' }}>
                {lang === 'tr' ? 'CANLI MİMARİ & VİTRİN' : 'LIVE ARCHITECTURE & SHOWCASE'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, marginTop: '6px' }}>{lang === 'tr' ? 'Siteleri Nasıl İnşa Ediyoruz?' : 'How Do We Build Websites?'}</h2>
              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '6px' }}>
                {lang === 'tr' ? 'Sektörünüzü seçin; sitenizin canlı çalışma ritmini ve altındaki teknik detayları inceleyin.' : 'Select your sector to explore the live demo and technical details.'}
              </p>
            </div>

            {/* Sektör Butonları */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
              {SECTORS.map((sec) => {
                const isSelected = selectedSector.id === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => { playSoftSound('click'); setSelectedSector(sec); }}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '12px',
                      border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      color: isSelected ? '#38bdf8' : '#94a3b8',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {lang === 'tr' ? sec.name : englishSectors[sec.id].name}
                  </button>
                );
              })}
            </div>

            {/* DEMO VİDEO EKRANI (MOCKUP STİLİ) */}
            <div style={{
              background: '#090d16',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
              marginBottom: '36px'
            }}>
              {/* Tarayıcı Pencere Başlığı */}
              <div className="demo-toolbar" style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                </div>
                <div className="demo-address" style={{
                  background: '#030712',
                  padding: '4px 20px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  color: '#64748b',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  https://demo.{selectedSector.id}.launchcraft.com
                </div>
                <div className="demo-live" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.75rem', fontWeight: 800 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  {lang === 'tr' ? 'CANLI TEST ORTAMI' : 'LIVE TEST ENVIRONMENT'}
                </div>
              </div>

              {/* Video & Bilgi Bölümü */}
              <div className="demo-content" style={{ display: 'grid', minHeight: '380px' }}>
                {/* Sol: Otomatik Oynayan Demo Video */}
                <div key={selectedSector.id} className="demo-video" style={{ position: 'relative', background: '#000', overflow: 'hidden' }}>
                  <video 
                    key={selectedSector.videoUrl}
                    poster={selectedSector.poster}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                    onLoadedMetadata={(event) => startMutedVideo(event, () => setSectorVideoErrors(prev => ({ ...prev, [selectedSector.id]: 'Video otomatik oynatılamıyor.' })))}
                    onError={() => setSectorVideoErrors(prev => ({ ...prev, [selectedSector.id]: 'Video şu anda yüklenemiyor.' }))}
                    onPlaying={() => setSectorVideoErrors(prev => ({ ...prev, [selectedSector.id]: '' }))}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={selectedSector.videoUrl} type="video/mp4" />
                  </video>
                  {sectorVideoErrors[selectedSector.id] && (
                    <div role="status" style={{ position: 'absolute', top: '16px', right: '16px', maxWidth: 'calc(100% - 32px)', padding: '8px 12px', borderRadius: '8px', background: 'rgba(3, 7, 18, 0.85)', color: '#e2e8f0', fontSize: '0.8rem' }}>
                      {lang === 'tr' ? sectorVideoErrors[selectedSector.id] : (sectorVideoErrors[selectedSector.id] === 'Video otomatik oynatılamıyor.' ? 'Video cannot autoplay.' : 'Video is currently unavailable.')}
                    </div>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    background: 'rgba(3, 7, 18, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <Icons.Play size={12} /> {lang === 'tr' ? 'Otomatik Canlı Simülasyon' : 'Automatic Live Simulation'}
                  </div>
                </div>

                {/* Sağ: Sektör Özeti ve Aksiyon */}
                <div className="demo-description" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px', display: 'block' }}>
                    {selectedSector.previewTitle}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 900, lineHeight: 1.25, marginBottom: '14px' }}>
                    {lang === 'tr' ? selectedSector.headline : englishSectors[selectedSector.id].headline}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '28px' }}>
                    {lang === 'tr' ? selectedSector.description : englishSectors[selectedSector.id].description}
                  </p>

                  <button 
                    onClick={() => {
                      setEmailForm(prev => ({
                        ...prev,
                        message: `${selectedSector.name} için demoda gördüğümüz özelliklerde bir site yaptırmak istiyoruz.`,
                        messageEn: `We would like a website with the features shown in the ${selectedSector.id === 'creator' ? 'Content Creator & Brand' : translations.en.sectors[SECTORS.findIndex(sector => sector.id === selectedSector.id)]} demo.`
                      }));
                      setProjectScope(prev => ({ ...prev, sector: selectedSector.id === 'creator' ? 'Bireysel & İçerik Üreticisi' : selectedSector.name }));
                      setStep(1);
                      setWizardComplete(false);
                      setFormSent(false);
                      setActivePage('contact');
                      window.scrollTo(0, 0);
                      scheduleNavigationSound('click');
                    }}
                    style={{
                      alignSelf: 'flex-start',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                      border: 'none',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 6px 20px rgba(37, 99, 235, 0.3)'
                    }}
                  >
                    {lang === 'tr' ? 'Bu Şablonu İşletmeme Uyarla' : 'Adapt This Template for My Business'} <Icons.ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* VİDEONUN ALTINDAKİ 4 UFAK BİLGİ KARTI */}
            <div className="feature-grid" style={{ display: 'grid', gap: '16px' }}>
              {selectedSector.features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} style={{
                    background: '#090d16',
                    padding: '24px 20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                      color: '#38bdf8'
                    }}>
                      <Icon size={18} />
                    </div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '6px', color: '#fff' }}>{lang === 'tr' ? feat.title : englishSectors[selectedSector.id].features[idx][0]}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>{lang === 'tr' ? feat.desc : englishSectors[selectedSector.id].features[idx][1]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(activePage === 'services' || activePage === 'transformation') && (
          <div style={{ maxWidth: '1180px', margin: activePage === 'services' ? '80px auto 70px' : '60px auto 70px', padding: '0 24px', width: '100%' }}>
            <section aria-labelledby="comparison-heading">
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 800, letterSpacing: '1.5px' }}>
                  {activePage === 'transformation' ? t.comparison[0] : t.comparison[1]}
                </span>
                <h2 id="comparison-heading" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1.2, marginTop: '10px' }}>
                  {t.comparison[2]}
                </h2>
                <p style={{ color: '#94a3b8', lineHeight: 1.6, marginTop: '12px' }}>
                  {activePage === 'transformation' ? t.comparison[3] : t.comparison[4]}
                </p>
              </div>

              <div className="comparison-slider"
                onPointerDown={(event) => {
                  if (event.button !== 0 || sliderPointer.current !== null) return;
                  sliderPointer.current = event.pointerId;
                  event.currentTarget.setPointerCapture(event.pointerId);
                  sliderHandle.current.focus();
                  updateSliderPosition(event);
                }}
                onPointerMove={(event) => {
                  if (sliderPointer.current === event.pointerId) updateSliderPosition(event);
                }}
                onPointerUp={(event) => {
                  if (sliderPointer.current === event.pointerId) sliderPointer.current = null;
                }}
                onPointerCancel={(event) => {
                  if (sliderPointer.current === event.pointerId) sliderPointer.current = null;
                }}
                onLostPointerCapture={(event) => {
                  if (sliderPointer.current === event.pointerId) sliderPointer.current = null;
                }}
                style={{
                  position: 'relative',
                  height: '390px',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  boxShadow: '0 0 35px rgba(56, 189, 248, 0.12)',
                  cursor: 'ew-resize',
                  touchAction: 'pan-y',
                  userSelect: 'none'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0b2433, #08111f 60%, #10283a)', padding: 'clamp(20px, 4vw, 40px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(125, 211, 252, 0.2)', paddingBottom: '16px' }}>
                    <strong style={{ color: '#f8fafc', fontSize: 'clamp(0.9rem, 2vw, 1.15rem)' }}>VİTRİN <span style={{ color: '#38bdf8' }}>STUDIO</span></strong>
                    <span style={{ color: '#34d399', fontSize: '0.7rem', fontWeight: 800 }}>● {t.comparison[5]}</span>
                  </div>
                  <div className="comparison-content" style={{ display: 'flex', alignItems: 'center', height: 'calc(100% - 46px)' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#fbbf24', letterSpacing: '3px', fontSize: '1rem', marginBottom: '12px' }}>★★★★★</div>
                      <div style={{ color: '#f8fafc', fontSize: 'clamp(1.3rem, 3vw, 2.4rem)', fontWeight: 900, lineHeight: 1.15 }}>{t.comparison[6]}</div>
                      <p style={{ color: '#a5b4c6', fontSize: '0.85rem', marginTop: '12px', lineHeight: 1.5 }}>{t.comparison[7]}</p>
                      <span style={{ display: 'inline-block', background: '#0ea5e9', color: '#fff', borderRadius: '10px', padding: '10px 16px', marginTop: '18px', fontSize: '0.8rem', fontWeight: 800 }}>{t.comparison[8]}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0, borderRadius: '16px', border: '1px solid rgba(52, 211, 153, 0.2)', background: 'linear-gradient(145deg, rgba(56, 189, 248, 0.18), rgba(16, 185, 129, 0.08))', padding: 'clamp(12px, 3vw, 28px)' }}>
                      <div style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 800, marginBottom: '12px' }}>{t.comparison[9]}</div>
                      <div style={{ color: '#f8fafc', fontSize: 'clamp(0.9rem, 2vw, 1.3rem)', fontWeight: 800 }}>{t.comparison[10]}</div>
                      <p style={{ color: '#a5b4c6', fontSize: '0.8rem', lineHeight: 1.5, marginTop: '10px' }}>{t.comparison[11]}</p>
                    </div>
                  </div>
                </div>

                <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)`, background: 'linear-gradient(135deg, #282b31, #16191e)', padding: 'clamp(20px, 4vw, 40px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', borderBottom: '1px solid #44474d', paddingBottom: '16px' }}>
                    <strong style={{ color: '#a1a1aa', fontSize: 'clamp(0.9rem, 2vw, 1.15rem)' }}>{t.comparison[12]}</strong>
                    <span style={{ color: '#a1a1aa', fontSize: '0.7rem' }}>{t.comparison[13]}</span>
                  </div>
                  <div className="comparison-content" style={{ display: 'flex', alignItems: 'center', height: 'calc(100% - 46px)' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ color: '#71717a', letterSpacing: '3px', fontSize: '1rem', marginBottom: '12px' }}>☆☆☆☆☆</div>
                      <div style={{ color: '#a1a1aa', fontSize: 'clamp(1.3rem, 3vw, 2.4rem)', fontWeight: 700, lineHeight: 1.15 }}>{t.comparison[14]}</div>
                      <p style={{ color: '#71717a', fontSize: '0.85rem', marginTop: '12px', lineHeight: 1.5 }}>{t.comparison[15]}</p>
                      <span style={{ display: 'inline-block', background: '#3f3f46', color: '#a1a1aa', borderRadius: '10px', padding: '10px 16px', marginTop: '18px', fontSize: '0.8rem' }}>{t.comparison[16]}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0, borderRadius: '16px', border: '1px dashed #52525b', padding: 'clamp(12px, 3vw, 28px)' }}>
                      <div style={{ color: '#a1a1aa', fontSize: '0.75rem', fontWeight: 700, marginBottom: '12px' }}>{t.comparison[17]}</div>
                      <div style={{ color: '#71717a', fontSize: '0.85rem', lineHeight: 1.8 }}>{t.comparison[18]}<br />{t.comparison[19]}<br />{t.comparison[20]}</div>
                    </div>
                  </div>
                </div>

                <div style={{ position: 'absolute', bottom: '14px', left: '14px', maxWidth: '42%', background: 'rgba(63, 24, 30, 0.92)', color: '#fca5a5', padding: '7px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800, pointerEvents: 'none' }}>
                  {t.comparison[21]}
                </div>
                <div style={{ position: 'absolute', bottom: '14px', right: '14px', maxWidth: '42%', background: 'rgba(6, 78, 59, 0.92)', color: '#a7f3d0', padding: '7px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800, pointerEvents: 'none' }}>
                  {t.comparison[22]}
                </div>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`, width: '2px', background: '#7dd3fc', boxShadow: '0 0 14px #38bdf8', transform: 'translateX(-50%)', pointerEvents: 'none' }} />
                <div
                  ref={sliderHandle}
                  role="slider"
                  tabIndex={0}
                  aria-label={t.comparison[23]}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={sliderPos}
                  aria-valuetext={lang === 'tr' ? `Öncesi yüzde ${sliderPos}, sonrası yüzde ${100 - sliderPos}` : `Before ${sliderPos} percent, after ${100 - sliderPos} percent`}
                  onKeyDown={handleSliderKeyDown}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: `clamp(22px, ${sliderPos}%, calc(100% - 22px))`,
                    transform: 'translate(-50%, -50%)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '2px solid #7dd3fc',
                    background: '#082f49',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
                    fontSize: '1.2rem',
                    fontWeight: 800
                  }}
                >
                  <span aria-hidden="true">↔</span>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {t.comparison[24]}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSent(false);
                    setActivePage('contact');
                    window.scrollTo(0, 0);
                    scheduleNavigationSound('click');
                  }}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #0284c7, #2563eb)',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(37, 99, 235, 0.3)'
                  }}
                >
                  {activePage === 'transformation' ? t.comparison[25] : t.comparison[26]}
                </button>
              </div>
            </section>

          </div>
        )}

        {/* ============================================================ */}
        {/* SAYFA 3: ÇÖZÜM PAKETLERİ                                     */}
        {/* ============================================================ */}
        {activePage === 'packages' && (
          <div style={{ maxWidth: '1080px', margin: '40px auto 70px', padding: '0 24px', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 800, letterSpacing: '1.5px' }}>
                {lang === 'tr' ? 'HİZMET KAPSAMLARI' : 'SERVICE OPTIONS'}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, marginTop: '6px' }}>{lang === 'tr' ? 'Anahtar Teslim Paketler' : 'Turnkey Packages'}</h2>
              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '6px' }}>
                {lang === 'tr' ? 'Gizli maliyet veya teknik karmaşa yok. İhtiyacınıza uygun olanı seçin.' : 'No hidden costs or technical complexity. Choose the option that fits your needs.'}
              </p>
            </div>

            <div className="packages-grid" style={{ display: 'grid', gap: '24px' }}>
              {[
                {
                  name: 'Başlangıç Vitrini',
                  desc: 'Hızlı açılış ve temel kurumsal kimlik arayan yeni işletmeler için.',
                  days: '24-48 Saat Teslim',
                  features: ['Mobil Uyumlu Tek Sayfa Vitrin', 'E-Posta Teklif & İletişim Formu', 'Google Haritalar & Konum Kaydı', 'Temel SEO Altyapısı', 'SSL Güvenlik Sertifikası']
                },
                {
                  name: 'Büyüme & Satış',
                  desc: 'Menü, hizmet listesi veya randevu altyapısıyla müşteri çekmek isteyenler için.',
                  days: '48-72 Saat Teslim',
                  popular: true,
                  features: ['Çok Sayfalı Kurumsal Mimari', 'QR Menü veya Randevu Entegrasyonu', 'Gelişmiş Google SEO Çalışması', 'Kurumsal E-Posta Hesabı', '1 Yıl Teknik Destek']
                },
                {
                  name: 'Tam Donanım VIP',
                  desc: 'Özel panel, sınırsız sayfa ve kapsamlı dijital kimlik arayan markalar için.',
                  days: '4-5 Gün Teslim',
                  features: ['Özel İçerik Yönetim Paneli', 'Çoklu Dil Desteği (TR / EN)', 'Vektörel Logo & Kimlik Desteği', 'Yüksek Hızlı Özel Sunucu', '7/24 Öncelikli Danışmanlık']
                }
              ].map((p, idx) => (
                <div 
                  key={idx}
                  style={{
                    position: 'relative',
                    padding: '32px 24px',
                    borderRadius: '20px',
                    border: p.popular ? '2px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    background: p.popular ? 'rgba(56, 189, 248, 0.05)' : '#090d16',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {p.popular && (
                    <span style={{
                      position: 'absolute',
                      top: '-11px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)',
                      color: '#fff',
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '3px 12px',
                      borderRadius: '999px'
                    }}>
                      {lang === 'tr' ? 'EN ÇOK TERCİH EDİLEN' : 'MOST POPULAR'}
                    </span>
                  )}

                  <div>
                    <h4 style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '6px' }}>{lang === 'tr' ? p.name : englishPackages[idx].name}</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '16px' }}>{lang === 'tr' ? p.desc : englishPackages[idx].desc}</p>
                    <div style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 800, marginBottom: '20px' }}>⚡ {lang === 'tr' ? p.days : englishPackages[idx].days}</div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                      {p.features.map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.85rem' }}>
                          <Icons.CheckCircle2 size={16} color="#38bdf8" /> {lang === 'tr' ? f : englishPackages[idx].features[i]}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setEmailForm(prev => ({ ...prev, message: `"${p.name}" paketi hakkında fiyat teklifi ve detay almak istiyoruz.`, messageEn: `We would like a quote and details for the "${['Starter Showcase', 'Growth & Sales', 'Full VIP'][idx]}" package.` }));
                      setFormSent(false);
                      setActivePage('contact');
                      window.scrollTo(0, 0);
                      scheduleNavigationSound('click');
                    }}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '12px',
                      background: p.popular ? 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)' : 'rgba(255, 255, 255, 0.08)',
                      border: 'none',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {lang === 'tr' ? 'Teklif İsteyin' : 'Request a Quote'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SAYFA 4: İLETİŞİM & RESMİ TEKLİF                             */}
        {/* ============================================================ */}
        {activePage === 'contact' && (
          <div style={{ maxWidth: '750px', margin: '40px auto 70px', padding: '0 24px', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 800, letterSpacing: '1.5px' }}>
                {t.contact[0]}
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, marginTop: '6px' }}>{t.contact[1]}</h2>
              <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '6px' }}>
                {t.contact[2]}
              </p>
            </div>

            {!formSent && (
              <section aria-labelledby="wizard-heading" style={{
                background: '#090d16',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '24px',
                padding: 'clamp(20px, 5vw, 36px)',
                marginBottom: '24px'
              }}>
                <h3 id="wizard-heading" style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '18px' }}>{t.contact[3]}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700, marginBottom: '8px' }}>
                  <span>{`${t.contact[4]} ${step}/3`}</span>
                  <span>{wizardComplete ? t.contact[5] : `${Math.round((step / 3) * 100)}%`}</span>
                </div>
                <div
                  role="progressbar"
                  aria-label={t.contact[6]}
                  aria-valuemin={1}
                  aria-valuemax={3}
                  aria-valuenow={step}
                  style={{ height: '6px', borderRadius: '999px', background: '#1e293b', overflow: 'hidden', marginBottom: '28px' }}
                >
                  <div style={{ height: '100%', width: `${(step / 3) * 100}%`, background: 'linear-gradient(90deg, #2563eb, #38bdf8)', transition: 'width 0.2s ease' }} />
                </div>

                {step === 1 && (
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '16px' }}>{t.contact[7]}</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '10px' }}>
                      {WIZARD_SECTORS.map(sector => (
                        <WizardOption key={sector} label={translateScope(sector, 'sector')} selected={projectScope.sector === sector} playSoftSound={playSoftSound} onSelect={() => setProjectScope(prev => ({ ...prev, sector }))} />
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '16px' }}>{t.contact[8]}</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '10px' }}>
                      {WIZARD_NEEDS.map(need => (
                        <WizardOption key={need} label={translateScope(need, 'need')} selected={projectScope.need === need} playSoftSound={playSoftSound} onSelect={() => setProjectScope(prev => ({ ...prev, need }))} />
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '16px' }}>{t.contact[9]}</h4>
                    <div role="group" aria-label={t.contact[16]} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '10px', marginBottom: '10px' }}>
                      {['Logom var', 'Logoya ihtiyacım var'].map(logo => (
                        <WizardOption key={logo} label={translateScope(logo, 'logo')} selected={projectScope.logo === logo} playSoftSound={playSoftSound} onSelect={() => setProjectScope(prev => ({ ...prev, logo }))} />
                      ))}
                    </div>
                    <div role="group" aria-label={t.contact[17]} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '10px' }}>
                      {['Alan adım (.com) var', 'Alan adına ihtiyacım var'].map(domain => (
                        <WizardOption key={domain} label={translateScope(domain, 'domain')} selected={projectScope.domain === domain} playSoftSound={playSoftSound} onSelect={() => setProjectScope(prev => ({ ...prev, domain }))} />
                      ))}
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '24px' }}>
                  {step > 1 ? (
                    <button type="button" onClick={() => { playSoftSound('click'); setWizardComplete(false); setStep(prev => prev - 1); }} style={{ padding: '11px 20px', borderRadius: '10px', border: '1px solid #334155', background: 'transparent', color: '#cbd5e1', fontWeight: 700, cursor: 'pointer' }}>
                      {t.contact[10]}
                    </button>
                  ) : <span />}
                  <button
                    type="button"
                    disabled={step === 1 ? !projectScope.sector : step === 2 ? !projectScope.need : !projectScope.logo || !projectScope.domain}
                    onClick={() => {
                      playSoftSound('click');
                      if (step < 3) setStep(prev => prev + 1);
                      else setWizardComplete(true);
                    }}
                    style={{
                      padding: '11px 20px',
                      borderRadius: '10px',
                      border: 'none',
                      background: '#0284c7',
                      color: '#fff',
                      fontWeight: 800,
                      cursor: (step === 1 ? !projectScope.sector : step === 2 ? !projectScope.need : !projectScope.logo || !projectScope.domain) ? 'not-allowed' : 'pointer',
                      opacity: (step === 1 ? !projectScope.sector : step === 2 ? !projectScope.need : !projectScope.logo || !projectScope.domain) ? 0.45 : 1
                    }}
                  >
                    {step === 3 ? t.contact[11] : t.contact[12]}
                  </button>
                </div>
              </section>
            )}

            {(wizardComplete || formSent) && (
            <div style={{
              background: '#090d16',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(20px, 5vw, 36px)'
            }}>
              {formSent ? (
                <div style={{ textAlign: 'center', padding: '24px' }}>
                  <Icons.CheckCircle2 color="#10b981" size={48} style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '8px' }}>{t.contact[24]}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '20px' }}>
                    {t.contact[25]}
                  </p>
                  <button 
                    onClick={() => { playSoftSound('click'); setFormSent(false); }}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: 'none',
                      color: '#fff',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {t.contact[26]}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.06)', color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.7 }}>
                    <strong style={{ color: '#7dd3fc' }}>{t.contact[13]}</strong>
                    <div>{t.contact[14]}: {translateScope(projectScope.sector, 'sector')}</div>
                    <div>{t.contact[15]}: {translateScope(projectScope.need, 'need')}</div>
                    <div>{t.contact[16]}: {translateScope(projectScope.logo, 'logo')}</div>
                    <div>{t.contact[17]}: {translateScope(projectScope.domain, 'domain')}</div>
                    {emailForm.message && (
                      <div>
                        {t.contact[18]}: {lang === 'en' && emailForm.messageEn ? emailForm.messageEn : emailForm.message}
                        <button type="button" onClick={() => { playSoftSound('click'); setEmailForm(prev => ({ ...prev, message: '', messageEn: '' })); }} style={{ display: 'block', marginTop: '6px', border: 'none', background: 'transparent', color: '#7dd3fc', cursor: 'pointer', textDecoration: 'underline' }}>
                          {t.contact[19]}
                        </button>
                      </div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="business-name" style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>{t.contact[20]}</label>
                    <input 
                      id="business-name"
                      type="text" 
                      required
                      placeholder={lang === 'tr' ? 'Örn: Kuzey Bistro' : 'e.g. North Bistro'}
                      value={emailForm.businessName}
                      onChange={(e) => setEmailForm({ ...emailForm, businessName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: '#030712',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                      <label htmlFor="contact-phone" style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>{t.contact[21]}</label>
                      <input 
                        id="contact-phone"
                        type="tel"
                        placeholder="05XX XXX XX XX"
                        value={emailForm.phone}
                        onChange={(e) => setEmailForm({ ...emailForm, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          background: '#030712',
                          color: '#fff',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>{t.contact[22]}</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      required
                      placeholder={lang === 'tr' ? 'adiniz@sirketiniz.com' : 'you@company.com'}
                      value={emailForm.email}
                      onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: '#030712',
                        color: '#fff',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button 
                    type="submit"
                    onClick={() => playSoftSound('click')}
                    style={{
                      marginTop: '6px',
                      padding: '14px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
                      border: 'none',
                      color: '#fff',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <Icons.Send size={18} /> {t.contact[23]}
                  </button>
                </form>
              )}
            </div>
            )}
            <section aria-labelledby="social-heading" style={{ marginTop: '24px', padding: 'clamp(20px, 5vw, 36px)', borderRadius: '24px', background: 'rgba(9, 13, 22, 0.85)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(8px)' }}>
              <h3 id="social-heading" style={{ fontSize: '1.2rem', fontWeight: 900, marginBottom: '10px' }}>{t.social.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '20px' }}>{t.social.description}</p>
              <a className="instagram-contact-link" href="https://www.instagram.com/launchcraftweb/" target="_blank" rel="noopener noreferrer" onClick={() => playSoftSound('click')}>
                <Icons.Instagram aria-hidden="true" />
                <span className="instagram-contact-handle">@launchcraftweb</span>
                <span className="instagram-contact-action">{t.social.action}</span>
              </a>
            </section>
          </div>
        )}

        </div>
      </main>

      {/* 3. MİNİMAL ALT BİLGİ */}
      <footer className="site-footer" style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '24px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#02050e',
        fontSize: '0.8rem',
        color: '#64748b'
      }}>
        <span>© 2026 LaunchCraft Web Tasarım.</span>
        <span>{lang === 'tr' ? 'Yeni nesil işletmeler için yüksek dönüşümlü web mimarisi.' : 'High-conversion web architecture for the next generation of businesses.'}</span>
        <div className="footer-social-links">
          <a href={`mailto:${agencyEmail}`} onClick={() => playSoftSound('click')}>
            <Icons.Mail size={18} /> {agencyEmail}
          </a>
          <a href="https://www.instagram.com/launchcraftweb/" target="_blank" rel="noopener noreferrer" aria-label={t.social.instagramLabel} onClick={() => playSoftSound('click')}>
            <Icons.Instagram aria-hidden="true" /> @launchcraftweb
          </a>
        </div>
      </footer>

      </div>
    </div>
  );
}
