# Görseller

Hero dışında sayfada 8 fotoğraf var; Avukat bölümü bilerek görselsizdir. Dosyalar `public/images` klasöründe.
Bir fotoğrafı değiştirmek için yenisini aynı dosya adıyla bu klasöre koymanız yeterli.

| Dosya | Bölüm | Fotoğraf | Yerleşim | Kadraj ayarı |
| --- | --- | --- | --- | --- |
| `01-buro.jpg` | Büro | Ahşap kaplamalı çalışma odası, mermer masa, deri koltuk | Sağ yarı, tam yükseklik | `.buroFigure img` → `object-position: 66% 50%` |
| `02-yaklasim.jpg` | Yaklaşım | Pencere önünde terazi ve tokmak | Sol yarı, tam yükseklik | `.approachStage img` → `50% 88%` |
| `03-calisma-alanlari.jpg` | Çalışma Alanları | Türk bayrağı önünde Adalet heykeli | Sağ %40, tam yükseklik | `.areasFigure img` → `50% 100%` |
| `04-ara-mimari.jpg` | Ara görsel 01 | Yapı cephesinde Adalet heykeli, siyah beyaz | Tam genişlik | `content/site.ts` → `breaks.first.position` |
| `06-surec.jpg` | Süreç | Büyüteç ve defterle çalışan eller | Tam genişlik bant | `.processFigure img` → `50% 40%` |
| `07-yayinlar.jpg` | Yayınlar | Kitaplık önünde açık eski bir cilt | Öne çıkan yazı | `.pubFeatured .frame img` → `50% 92%` |
| `08-ara-kutuphane.jpg` | Ara görsel 02 | Kitaplık önünde bronz Adalet heykelciği | Tam genişlik | `content/site.ts` → `breaks.second.position` |
| `09-iletisim.jpg` | İletişim | Belgeleri inceleyen eller | Tam ekran arka plan | `.contactImage img` → `50% 62%` |

Kadraj ayarı, fotoğrafın çerçevede hangi bölümünün görüneceğini belirler (yatay yüzde, dikey yüzde). CSS ayarları `app/globals.css` içindedir.

## Notlar

- Dikey fotoğraflar yatay alanlarda (ara görseller, Yayınlar, İletişim) bant olarak kırpılır; fotoğraf değişirse kadraj ayarını da güncelleyin.
- `01-buro.jpg` 1536 piksel genişliğinde; diğerleri 1800–2560 piksel. Çok büyük ekranlarda Büro görseli için daha yüksek çözünürlüklü bir kopya iyi olur.
- Alt metinler `content/site.ts` içindeki `imageAlt` / `alt` alanlarındadır.
