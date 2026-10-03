# Biçer Hukuk Bürosu — ana sayfa

Next.js (App Router) + React. Ek bağımlılık yok.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # yayın için derleme
```

## Düzenleme

- **Metinler ve dosya yolları:** `content/site.ts`. "ÖRNEK" notlu metinler (çalışma alanları, yayın başlıkları) yer tutucudur;
  "DOLDURUN" notlu alanlar (iletişim bilgileri, avukat ayrıntıları) boştur ve doldurulunca sayfada görünür.
- **Fotoğraflar:** `public/images` içinde 8 fotoğraf var; hangisinin nerede durduğu ve kadraj ayarları `GORSELLER.md` dosyasında.
- **Hero metinleri:** `components/Hero.tsx`.
- **Renkler, tipografi, yerleşim:** `app/globals.css` (tokenlar dosyanın başında).

## Sayfa akışı

Hero → Büro → Yaklaşım → Çalışma Alanları → ara görsel → Avukat → Süreç → Yayınlar → ara görsel → İletişim → alt bilgi.
Avukat bölümü dışında her bölümde tek bir büyük görsel vardır; terazi yalnızca hero videosundadır.

## Hero hakkında

- Video `autoplay / muted / loop / playsInline` ile kendi zamanında döner; scroll koduyla hiçbir bağlantısı yoktur.
- Scroll yalnızca soldaki dört düşünceyi değiştirir (`STARTS` eşikleri) ve sonda videoyu ceviz tonuna devreder (`EXIT`).
- Sahne `position: sticky` ile sabitlenir; hero'yu saran öğelere `overflow: hidden` vermeyin.

## Klasörler

```
app/          layout, sayfa, global stiller
components/   Header, Hero, Buro, Approach, PracticeAreas, VisualBreak, Lawyer, Process, Publications, Contact, Footer, Reveal
content/      site.ts — tüm içerik
public/       videos/ (hero), images/ (8 fotoğraf alanı)
```
