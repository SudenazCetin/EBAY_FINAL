<div align="center">

# 🛒 eBay Clone Project

### Modern Full-Stack E-Commerce Platform

[![Nuxt 3](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue 3](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Latest-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📖 Proje Hakkında

Bu proje, **Yalova Üniversitesi Bilgisayar Mühendisliği** dersi kapsamında geliştirilmiş modern bir **eBay klonudur**. Kullanıcıların ürün arayabildiği, sepete ekleyebildiği, favorilerine ekleyebildiği ve mesajlaşabildiği **tam işlevsel bir e-ticaret platformudur**.

## 🚀 Teknoloji Stack

### Frontend
- 🎨 **Nuxt 3** - Meta Framework
- ⚡ **Vue 3** - Progressive JavaScript Framework
- 🎭 **Tailwind CSS** - Utility-First CSS Framework
- 📦 **Pinia** - State Management
- 🔷 **TypeScript** - Type Safety

### Backend & Database
- 🔥 **Firebase Firestore** - NoSQL Cloud Database
- 🔐 **Firebase Authentication** - User Management
- 💾 **Firebase Storage** - File Storage
- 🌐 **Express.js** - REST API Server
- 🔄 **Nuxt Server API** - Server-Side Endpoints

## ✨ Özellikler

| Özellik | Açıklama |
|---------|----------|
| 🔐 **Kimlik Doğrulama** | Firebase Authentication ile güvenli giriş/kayıt sistemi |
| 🛍️ **Ürün Yönetimi** | Kategori bazlı ürün listeleme ve filtreleme |
| 🔍 **Gelişmiş Arama** | Anlık ürün arama ve sonuç gösterimi |
| 🛒 **Alışveriş Sepeti** | Ürün ekleme/çıkarma ve miktar yönetimi |
| ⭐ **Favoriler (Watchlist)** | Beğenilen ürünleri kaydetme |
| 💬 **Mesajlaşma** | Kullanıcılar arası mesajlaşma sistemi |
| 📦 **Sipariş Takibi** | Sipariş geçmişi ve durum takibi |
| 📱 **Responsive Tasarım** | Mobil, tablet ve desktop uyumlu |
| 🎨 **Modern UI/UX** | Atomic Design prensiplerine uygun bileşenler |
| 🔥 **Real-time Updates** | Firebase ile anlık veri senkronizasyonu |
| 🌙 **SSR (Server-Side Rendering)** | SEO ve performans optimizasyonu |

## 🛠 Kurulum ve Çalıştırma

### 📋 Ön Gereksinimler

- **Node.js** 18.x veya üzeri
- **npm** veya **yarn** paket yöneticisi
- **Firebase** hesabı ve projesi

### 🚀 Adım Adım Kurulum

#### 1️⃣ Projeyi Klonlayın

```bash
git clone https://github.com/SudenazCetin/EBAY_FINAL.git
cd EBAY_FINAL
```

#### 2️⃣ Bağımlılıkları Yükleyin

```bash
npm install
```

#### 3️⃣ Environment Variables Ayarlayın

> **⚠️ Önemli:** Kök dizinde bir `.env` dosyası oluşturun ve kendi Firebase anahtarlarınızı ekleyin.

```bash
# .env.example dosyasını kopyalayın
cp .env.example .env
```

`.env` dosyanızı açın ve [Firebase Console](https://console.firebase.google.com/)'dan aldığınız gerçek değerlerle doldurun:

```env
# Firebase Configuration
NUXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# API Configuration
API_PORT=4001
```

#### 4️⃣ Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

✅ Uygulama **`http://localhost:3000`** adresinde çalışmaya başlayacaktır.

---

### 🔧 Express API Server'ı Başlatma (Opsiyonel)

Mock data ile çalışmak için Express API server'ı ayrıca başlatabilirsiniz:

```bash
cd api
npm install
node server.js
```

API **`http://localhost:4001`** portunda çalışacaktır.


## 📦 Production Build

Production için build almak:

```bash
npm run build
```

Production build'i önizlemek:

```bash
npm run preview
```

---

## 🔒 Güvenlik

> **🛡️ API Key Güvenliği:** `.env` dosyası asla GitHub'a yüklenmez. Bu dosya `.gitignore` içinde tanımlıdır ve API anahtarlarınızı gizli tutar. 

⚠️ **Önemli Notlar:**
- Projeyi klonlayan her kullanıcının kendi Firebase projesini oluşturması gerekmektedir
- API anahtarlarınızı asla GitHub'a commit etmeyin
- Production ortamında environment variables'ları hosting platformunuzda ayarlayın

---

## 📝 Proje Yapısı

```
📦 ebay-clone
├── 📂 app/                      # Nuxt uygulama dizini
│   ├── 📂 components/           # Vue bileşenleri
│   │   ├── 📂 atoms/            # Temel bileşenler (Button, Input, etc.)
│   │   ├── 📂 molecules/        # Orta seviye bileşenler (Forms, Cards)
│   │   └── 📂 organisms/        # Kompleks bileşenler (Header, Footer)
│   ├── 📂 composables/          # Vue composables (useProducts, useAuth)
│   ├── 📂 layouts/              # Sayfa layouts
│   ├── 📂 pages/                # Nuxt pages (auto-routing)
│   ├── 📂 stores/               # Pinia state management
│   ├── 📂 types/                # TypeScript type definitions
│   └── 📂 utils/                # Utility fonksiyonlar (Firebase config)
├── 📂 api/                      # Express.js API Server
│   ├── 📄 server.js             # API endpoint definitions
│   └── 📄 *.json                # Mock data files
├── 📂 public/                   # Static assets
├── 📂 server/                   # Nuxt server endpoints
│   ├── 📂 api/                  # Server API routes
│   └── 📂 data/                 # Server-side data
├── 📄 .env.example              # Environment variables template
├── 📄 nuxt.config.ts            # Nuxt configuration
├── 📄 tailwind.config.ts        # Tailwind CSS config
└── 📄 package.json              # Dependencies
```

---

## 🎯 Temel Kullanım Senaryoları

### 🔐 Kullanıcı Kayıt ve Giriş
1. `/register` sayfasından yeni kullanıcı kaydı oluşturun
2. Firebase Authentication ile güvenli giriş yapın
3. Kullanıcı bilgileriniz Firestore'da saklanır

### 🛍️ Ürün Arama ve Satın Alma
1. Ana sayfadan veya arama barından ürün arayın
2. Ürün detay sayfasında bilgileri inceleyin
3. "Add to Cart" ile sepete ekleyin
4. Sepet sayfasından siparişi tamamlayın

### ⭐ Favorilere Ekleme
1. Beğendiğiniz ürünün kalp ikonuna tıklayın
2. "My eBay > Watchlist" menüsünden favorilerinizi görüntüleyin

---

## 🛠️ Kullanılan Teknolojiler ve Araçlar

| Kategori | Teknoloji |
|----------|-----------|
| **Frontend Framework** | Nuxt 3, Vue 3, TypeScript |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **State Management** | Pinia |
| **Backend** | Firebase (Firestore, Auth, Storage) |
| **API Server** | Express.js, Node.js |
| **Build Tools** | Vite, ESBuild |
| **Package Manager** | npm |
| **Version Control** | Git, GitHub |

---

## 👨‍💻 Geliştirici

<div align="center">

**Sudenaz Çetin**

🎓 Yalova Üniversitesi - Bilgisayar Mühendisliği

[![GitHub](https://img.shields.io/badge/GitHub-SudenazCetin-181717?style=flat&logo=github)](https://github.com/SudenazCetin)

</div>

---

## 📄 Lisans

Bu proje **eğitim amaçlı** geliştirilmiştir.

---

<div align="center">

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ❤️ by Sudenaz Çetin

</div>
