# 🛒 eBay Clone Project (Nuxt 3 & Firebase)

Bu proje, Yalova Üniversitesi Bilgisayar Mühendisliği dersi kapsamında geliştirilmiş modern bir eBay klonudur. Kullanıcıların ürün arayabildiği, sepete ekleyebildiği ve favorilerine ekleyebildiği tam işlevsel bir e-ticaret platformudur.

## 🚀 Teknolojiler

- **Framework:** Nuxt 3 / Vue 3
- **Styling:** Tailwind CSS
- **State Management:** Pinia
- **Backend/Database:** Firebase (Firestore)
- **Type Safety:** TypeScript

## ✨ Özellikler

- 🔐 Kullanıcı kimlik doğrulama (Login/Register)
- 🛍️ Ürün katalogları ve kategori filtreleme
- 🔍 Gelişmiş ürün arama
- 🛒 Alışveriş sepeti yönetimi
- ⭐ Favori ürünler (Watchlist)
- 📱 Responsive tasarım
- 🎨 Modern ve kullanıcı dostu arayüz
- 🔥 Firebase ile gerçek zamanlı veri senkronizasyonu

## 🛠 Kurulum ve Çalıştırma

### 1. Projeyi Klonlayın

```bash
git clone https://github.com/SudenazCetin/EBAY_FINAL.git
cd EBAY_FINAL
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Environment Variables Ayarlayın

**Önemli:** Kök dizinde bir `.env` dosyası oluşturun ve kendi Firebase anahtarlarınızı ekleyin:

```bash
# .env.example dosyasını kopyalayın
cp .env.example .env
```

`.env` dosyanızı açın ve Firebase Console'dan aldığınız gerçek değerlerle doldurun:

```env
NUXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

API_PORT=4001
```

### 4. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışmaya başlayacaktır.

## 📦 Production Build

Production için build almak:

```bash
npm run build
```

Production build'i önizlemek:

```bash
npm run preview
```

## 🔒 Güvenlik Notu

`.env` dosyası asla GitHub'a yüklenmez. Bu dosya `.gitignore` içinde tanımlıdır ve API anahtarlarınızı gizli tutar. Projeyi klonlayan her kullanıcının kendi Firebase projesini oluşturması ve kendi anahtarlarını kullanması gerekmektedir.

## 📝 Proje Yapısı

```
app/
├── components/      # Vue bileşenleri (atoms, molecules, organisms)
├── composables/     # Vue composables
├── layouts/         # Sayfa layouts
├── pages/           # Nuxt pages (routing)
├── stores/          # Pinia stores
├── types/           # TypeScript type definitions
└── utils/           # Utility fonksiyonlar (Firebase config)
```

## 👨‍💻 Geliştirici

**Sudenaz Çetin** - Yalova Üniversitesi Bilgisayar Mühendisliği

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.
