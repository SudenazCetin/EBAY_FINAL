const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 4001;

app.use(cors());
app.use(express.json());

// JSON dosyaları
const dbFiles = {
  banners: 'banners.json',
  categoryBanners: 'categoryBanners.json',
  featuredDeals: 'featuredDeals.json',
  motors: 'motors.json',
  products: 'products.json',
  recentlyViewed: 'recentlyViewed.json',
  returnsBanners: 'returnsBanners.json',
  returnsProducts: 'returnsProducts.json',
  sliders: 'sliders.json',
  spotlightDeals: 'spotlightDeals.json',
  trending: 'trending.json',
};

function readData(type) {
  try {
    return JSON.parse(fs.readFileSync(dbFiles[type], 'utf-8'));
  } catch {
    return [];
  }
}

function writeData(type, data) {
  fs.writeFileSync(dbFiles[type], JSON.stringify(data, null, 2));
}

// CRUD endpointleri
['banners', 'categoryBanners', 'featuredDeals', 'motors', 'products', 'recentlyViewed', 'returnsBanners', 'returnsProducts', 'sliders', 'spotlightDeals', 'trending'].forEach((type) => {
  // Listele
  app.get(`/api/${type}`, (req, res) => {
    res.json(readData(type));
  });

  // Ekle
  app.post(`/api/${type}`, (req, res) => {
    const data = readData(type);
    const newItem = { id: Date.now().toString(), ...req.body };
    data.push(newItem);
    writeData(type, data);
    res.status(201).json(newItem);
  });

  // Güncelle
  app.put(`/api/${type}/:id`, (req, res) => {
    let data = readData(type);
    const idx = data.findIndex((item) => item.id === req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    data[idx] = { ...data[idx], ...req.body };
    writeData(type, data);
    res.json(data[idx]);
  });

  // Sil
  app.delete(`/api/${type}/:id`, (req, res) => {
    let data = readData(type);
    data = data.filter((item) => item.id !== req.params.id);
    writeData(type, data);
    res.status(204).end();
  });
});

app.listen(PORT, () => {
  console.log(`Express API running on http://localhost:${PORT}`);
});
