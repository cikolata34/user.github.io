# Discord Sunucusu Web Sitesi

Modern ve akışkan tasarıma sahip Discord sunucunuz için tanıtım web sitesi.

## Özellikler

- ✨ Modern ve göz alıcı tasarım
- 📱 Tamamen duyarlı (responsive) tasarım - tüm cihazlarda çalışır
- 🌊 Akıcı animasyonlar ve geçişler
- ⚡ Hızlı yükleme süresi
- 🔥 Kolay özelleştirme

## Başlangıç

Web sitesini kullanmaya başlamak için şu adımları izleyin:

1. Bu depoyu (repo) bilgisayarınıza indirin veya klonlayın
2. `images` klasörüne aşağıdaki görselleri ekleyin:
   - `logo.png` - Sunucunuzun logosu (40x40px önerilen)
   - `server-icon.png` - Sunucu ikonu (100x100px önerilen)
3. `index.html` dosyasını herhangi bir metin editörü ile açın ve gerekli bilgileri güncelleyin

## Özelleştirme

### Discord Davet Bağlantınızı Değiştirme

`index.html` dosyasını açın ve aşağıdaki satırları sunucunuza ait bilgilerle güncelleyin:

1. Discord davet bağlantınızı değiştirin:
   ```html
   <span>discord.gg/sunucuadı</span>
   ```
   ve
   ```html
   <a href="https://discord.gg/sunucuadı" target="_blank" class="btn primary-btn">Şimdi Katıl</a>
   ```

### Metinleri Özelleştirme

`index.html` dosyasındaki tüm metinleri kendi Discord sunucunuza uygun şekilde değiştirebilirsiniz.

### Renkleri Değiştirme

`styles.css` dosyasında, web sitesinin renklerini değiştirmek için `:root` bölümünü düzenleyebilirsiniz:

```css
:root {
    --primary-color: #5865F2; /* Ana renk */
    --secondary-color: #404EED; /* İkincil renk */
    --dark-color: #2C2F33; /* Koyu renk */
    --light-color: #FFFFFF; /* Açık renk */
    --gray-color: #99AAB5; /* Gri renk */
    --success-color: #57F287; /* Başarı rengi */
    --danger-color: #ED4245; /* Tehlike rengi */
    /* Diğer renk ve değişkenler */
}
```

## Görselleri Değiştirme

1. `images` klasörünü açın
2. Aşağıdaki görselleri kendi görsellerinizle değiştirin:
   - `logo.png` - Sitenin üst kısmında ve alt bilgisinde görüntülenen logo
   - `server-icon.png` - Discord sunucunuzun ikonu

Not: Bu görselleri eklemezseniz, site otomatik olarak yedek görseller kullanacaktır.

## Sosyal Medya Bağlantıları

Sosyal medya bağlantılarını güncellemek için `index.html` dosyasındaki footer bölümünü bulun:

```html
<div class="social-icons">
    <a href="#" target="_blank"><i class="fab fa-discord"></i></a>
    <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
</div>
```

`href="#"` kısmını gerçek sosyal medya bağlantılarınızla değiştirin.

## Yayınlama

Web sitenizi internet üzerinde yayınlamak için şu adımları izleyebilirsiniz:

1. [GitHub Pages](https://pages.github.com/) - Ücretsiz bir seçenek, Github hesabınız varsa
2. [Netlify](https://www.netlify.com/) - Ücretsiz ve hızlı bir hosting hizmeti
3. [Vercel](https://vercel.com/) - Hızlı ve ücretsiz bir seçenek

Bu platformlardan herhangi birine tüm proje dosyalarını yükleyerek web sitenizi kolayca yayınlayabilirsiniz.

## İletişim

Herhangi bir sorunuz veya öneriniz varsa, lütfen Discord sunucumuza katılın: [discord.gg/sunucuadı](https://discord.gg/sunucuadı)

---

© 2023 Discord Sunucumuz. Tüm hakları saklıdır. 