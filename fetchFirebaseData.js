import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Firebase config (client config'den alındı)
const serviceAccount = {
    type: "service_account",
    project_id: "ebay-nuxt-final",
    // Bu bilgiler Firebase Console'dan Service Account key indirerek alınabilir
    // Şimdilik client SDK kullanarak veri çekeceğiz
};

// Firebase'i initialize et
// NOT: Admin SDK için service account key gerekli
// Alternatif olarak client SDK kullanacağız

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const firebaseConfig = {
    apiKey: "AIzaSyApd6fgqxWeyN4VQRLjr2REt0Ve2sl_Xcc",
    authDomain: "ebay-nuxt-final.firebaseapp.com",
    projectId: "ebay-nuxt-final",
    storageBucket: "ebay-nuxt-final.firebasestorage.app",
    messagingSenderId: "700656860406",
    appId: "1:700656860406:web:de5e76c421516563b340d7",
    measurementId: "G-WZYR36GM2X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Koleksiyon adları
const collections = [
    'banners',
    'categoryBanners',
    'featuredDeals',
    'motors',
    'products',
    'recentlyViewed',
    'returnsBanners',
    'returnsProducts',
    'sliders',
    'spotlightDeals',
    'trending'
];

// Ana fonksiyon
async function fetchAllData() {
    console.log('🔥 Firebase\'den veri çekme başlıyor...\n');

    for (const collectionName of collections) {
        try {
            console.log(`📦 ${collectionName} koleksiyonu çekiliyor...`);

            const querySnapshot = await getDocs(collection(db, collectionName));
            const data = [];

            querySnapshot.forEach((doc) => {
                data.push({
                    id: doc.id,
                    ...doc.data()
                });
            });

            // JSON dosyasına kaydet
            const filePath = path.join(__dirname, 'api', `${collectionName}.json`);
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

            console.log(`✅ ${collectionName}.json oluşturuldu (${data.length} kayıt)\n`);
        } catch (error) {
            console.error(`❌ ${collectionName} çekilirken hata:`, error.message);
        }
    }

    console.log('🎉 Tüm veriler başarıyla çekildi!');
    process.exit(0);
}

// Script'i çalıştır
fetchAllData().catch((error) => {
    console.error('❌ Genel hata:', error);
    process.exit(1);
});
