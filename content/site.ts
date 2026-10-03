// Ana sayfadaki tüm metinler ve görsel yolları burada. Bileşenlere dokunmadan buradan düzenleyebilirsiniz.
// "ÖRNEK" notu olan metinler yer tutucudur; "DOLDURUN" notu olan alanlar boş bırakılmıştır ve doldurulunca sayfada görünür.
//
// GÖRSELLER: Avukat bölümü dışında her bölümde tek bir büyük fotoğraf vardır (hero dışında toplam 8).
// Hangi fotoğrafın nerede durduğu ve kadraj ayarları GORSELLER.md dosyasında.

export const media = {
  heroVideo: '/videos/hero.mp4',
  heroPoster: '/videos/hero-poster.jpg',
  buro: '/images/01-buro.jpg',
  approach: '/images/02-yaklasim.jpg',
  areas: '/images/03-calisma-alanlari.jpg',
  break1: '/images/04-ara-mimari.jpg',
  process: '/images/06-surec.jpg',
  publications: '/images/07-yayinlar.jpg',
  break2: '/images/08-ara-kutuphane.jpg',
  contact: '/images/09-iletisim.jpg',
};

export const nav = [
  { label: 'BÜRO', href: '#buro' },
  { label: 'ÇALIŞMA ALANLARI', href: '#calisma-alanlari' },
  { label: 'AVUKAT', href: '#avukat' },
  { label: 'YAYINLAR', href: '#yayinlar' },
  { label: 'İLETİŞİM', href: '#iletisim' },
];

export const buro = {
  title: 'Sakin bir çalışma düzeni, titiz bir hazırlık.',
  paragraphs: [
    'Biçer Hukuk Bürosu, her dosyayı kendi koşulları içinde ele alır. Önce olayı ve belgeleri eksiksiz anlamaya, ardından izlenecek yolu müvekkille birlikte belirlemeye çalışır.',
    'Sürecin her aşamasında müvekkil, dosyasının nerede durduğunu ve bir sonraki adımın ne olduğunu bilir.',
  ],
  imageAlt: 'Ahşap kaplamalı bir çalışma odası: mermer masa, deri koltuk ve duvarda soyut bir tablo',
  notes: ['BİÇER HUKUK BÜROSU', 'PRIVATE LEGAL PRACTICE', '01'],
};

export const approach = {
  title: 'Yaklaşım, dört alışkanlığa dayanır.',
  intro: 'Dosyanın türü değişir; çalışma biçimi değişmez.',
  imageAlt: 'Pencere önündeki masada duran terazi ve tokmak',
  items: [
    { name: 'Dinlemek', text: 'Mesele, müvekkilin anlattığı haliyle ve bütün ayrıntılarıyla dinlenir.' },
    { name: 'Analiz etmek', text: 'Olay, belgeler ve ilgili mevzuat birlikte değerlendirilir.' },
    { name: 'Planlamak', text: 'İzlenecek yol, seçenekleri ve riskleriyle birlikte müvekkille kararlaştırılır.' },
    { name: 'Takip etmek', text: 'Süreç adım adım izlenir; müvekkil her gelişmeden haberdar edilir.' },
  ],
};

// ÖRNEK: Alanları büronun fiilen çalıştığı alanlara göre düzenleyin.
export const areas = {
  title: 'Çalışma alanları',
  intro: 'Büronun danışmanlık verdiği ve dava takibi yürüttüğü başlıca alanlar.',
  imageAlt: 'Türk bayrağının önünde Adalet heykeli',
  items: [
    { name: 'Ticaret ve Şirketler Hukuku', text: 'Şirket kuruluşu, genel kurul ve yönetim işlemleri, ortaklar arası uyuşmazlıklar.' },
    { name: 'Sözleşmeler Hukuku', text: 'Sözleşmelerin hazırlanması, müzakeresi ve sözleşmeden doğan uyuşmazlıklar.' },
    { name: 'İş Hukuku', text: 'İşe iade, işçilik alacakları ve işyeri uygulamalarına ilişkin danışmanlık.' },
    { name: 'Gayrimenkul ve Kira Hukuku', text: 'Tapu ve mülkiyet uyuşmazlıkları, kira ilişkileri, kat mülkiyeti.' },
    { name: 'Aile ve Miras Hukuku', text: 'Boşanma, velayet, mal rejimi ve mirasın paylaşımı.' },
    { name: 'Ceza Hukuku', text: 'Soruşturma ve kovuşturma aşamalarında müdafilik ve vekillik.' },
    { name: 'İcra ve İflas Hukuku', text: 'Alacak takibi, itirazlar ve konkordato süreçleri.' },
    { name: 'İdare ve Vergi Hukuku', text: 'İdari işlemlere karşı iptal ve tam yargı davaları, vergi uyuşmazlıkları.' },
  ],
};

export const breaks = {
  first: { line: 'Her dosya, kendi düzeni içinde.', alt: 'Taş bir yapının cephesinde Adalet heykeli, siyah beyaz', position: '50% 37%' },
  second: { line: 'Hazırlık, sonucun görünmeyen kısmıdır.', alt: 'Kitaplığın önünde bronz bir Adalet heykelciği', position: '50% 52%' },
};

export const lawyer = {
  name: 'Yavuzhan Biçer',
  role: 'Avukat',
  // Yalnızca doğrulanabilir bilgi içerir; baro, eğitim vb. ayrıntıları aşağıdaki "details" alanına ekleyin.
  paragraphs: ['Av. Yavuzhan Biçer, Biçer Hukuk Bürosu çatısı altında avukatlık ve hukuki danışmanlık hizmeti vermektedir.'],
  // DOLDURUN: Örn. { label: 'Baro', value: '… Barosu' }
  details: [] as { label: string; value: string }[],
};

export const process = {
  title: ['Hukuki sürecin her aşaması,', 'aynı dikkatle ele alınır.'],
  imageAlt: 'Büyüteçle belge inceleyen ve deftere not alan eller',
  steps: [
    { name: 'İlk görüşme', text: 'Mesele dinlenir, mevcut belgeler gözden geçirilir, beklentiler konuşulur.' },
    { name: 'Dosyanın analizi', text: 'Olay, deliller ve uygulanacak hukuk kuralları ayrıntılı biçimde incelenir.' },
    { name: 'Hukuki strateji', text: 'Seçenekler, olası sonuçları ve süreleriyle birlikte müvekkile sunulur.' },
    { name: 'Sürecin takibi', text: 'Belirlenen yol izlenir; her aşamada müvekkil bilgilendirilir.' },
  ],
};

// ÖRNEK: Başlıklar ve özetler yer tutucudur; gerçek yazılarla ve bağlantılarla değiştirin.
export const publications = {
  title: 'Yayınlar',
  intro: 'Güncel hukuki konulara ilişkin yazılar ve notlar.',
  imageAlt: 'Deri ciltli kitapların önünde açık duran eski bir cilt',
  items: [
    { kind: 'Makale', title: 'Ticari sözleşmelerde cezai şartın sınırları', text: 'Cezai şartın kararlaştırılması, indirimi ve tacirler bakımından doğurduğu sonuçlar.', href: '#yayinlar' },
    { kind: 'Not', title: 'Kira uyuşmazlıklarında dava şartı arabuluculuk', text: 'Dava açmadan önce izlenmesi gereken yol ve süreler.', href: '#yayinlar' },
    { kind: 'Makale', title: 'İşe iade davalarında ispat yükü', text: 'Fesih gerekçesinin ispatı ve tarafların sunması gereken deliller.', href: '#yayinlar' },
  ],
};

export const contact = {
  title: ['Hukuki bir mesele,', 'doğru bir görüşmeyle başlayabilir.'],
  firm: 'BİÇER HUKUK BÜROSU',
  person: 'Yavuzhan Biçer',
  role: 'Avukat',
  // DOLDURUN: Gerçek iletişim bilgileri projede olmadığı için boş bırakıldı; doldurulan satırlar sayfada görünür.
  address: [] as string[],
  phone: '',
  email: '',
  hours: '',
  imageAlt: 'Belgeleri birlikte inceleyen takım elbiseli iki kişinin elleri',
};

export const footer = {
  disclaimer: 'Bu sitedeki içerik yalnızca bilgilendirme amaçlıdır; hukuki görüş veya tavsiye niteliği taşımaz.',
  copyright: '© 2026 Biçer Hukuk Bürosu',
};
