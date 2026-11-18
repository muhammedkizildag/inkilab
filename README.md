# ATA 121 — Atatürk İlkeleri ve İnkılâp Tarihi Çalışma Platformu

7 dersin (**309 slayt**) tamamından çıkarılmış madde madde çalışma notları, çevrilebilir öğrenme kartları ve 5 şıklı çoktan seçmeli testlerden oluşan, mobil uyumlu React + Vite statik web uygulaması.

## Özellikler
- **%100 Slayt Kapsamı:** 7 dersin tüm slaytları (görsel ve tablo içerikleri dahil) slayt numarası referanslarıyla işlenmiştir.
- **Madde Madde Çalışma Notları:** Hiyerarşik özetler, karşılaştırma tabloları, kritik uyarı/alıntı kutuları ve bölüm tamamlama takibi.
- **Öğrenme Kartları (Flashcards):** Dokunmatik uyumlu çevrilebilir kartlar, kategori filtreleme, karıştırma ve *Biliyorum / Tekrar Et* takibi.
- **Çoktan Seçmeli Testler & Karma Sınav:** Her ders için Alıştırma Modu (anında açıklamalı çözüm) ve Sınav Modu (puanlı test simülasyonu + yanlışları tekrar çözme), ayrıca seçilen derslerden Karma Deneme Sınavı.
- **Mobil Öncelikli ve Çevrimdışı İlerleme:** Açık/Koyu tema, yazı boyutu ayarı, tüm derslerde anlık arama ve `localStorage` ile telefonda kaldığın yeri kaydetme.

## Yerelde Çalıştırma
```bash
npm install
npm run dev
```

## GitHub Pages ile Yayınlama
`.gitignore` dosyası orijinal `*.pdf` dosyalarını otomatik olarak hariç tutar; yalnızca uygulama kodları GitHub'a yüklenir.

1. Bu klasörde bir Git deposu başlatın ve GitHub'a gönderin:
   ```bash
   git init
   git add .
   git commit -m "ATA 121 calisma platformu"
   git branch -M main
   git remote add origin https://github.com/<KULLANICI_ADIN>/<REPO_ADIN>.git
   git push -u origin main
   ```
2. GitHub deponuzda **Settings → Pages → Build and deployment → Source** kısmından **GitHub Actions** seçeneğini seçin.
3. `.github/workflows/deploy.yml` iş akışı otomatik olarak uygulamayı derleyip yayınlayacaktır. Ardından `https://<KULLANICI_ADIN>.github.io/<REPO_ADIN>/` adresinden telefonunuzla doğrudan erişebilirsiniz.
