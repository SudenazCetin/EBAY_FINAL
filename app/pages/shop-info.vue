<template>
  <div>
    <CategoryBannerShop />
    <div class="max-w-3xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-4">Alışveriş Bilgileri</h1>
    <p class="mb-4">Bu sayfa, eBay'de alışveriş yaparken dikkat etmeniz gerekenler ve ipuçları hakkında bilgi vermek için hazırlanmıştır. Kendi açıklamalarınızı ve rehberinizi buraya ekleyebilirsiniz.</p>
    <ul class="list-disc pl-6 mb-4">
      <li>Güvenli ödeme yöntemleri kullanın</li>
      <li>Satıcı puanlarını ve yorumlarını kontrol edin</li>
      <li>Kampanya ve indirimleri takip edin</li>
      <li>Herhangi bir sorun için destek ekibimize ulaşabilirsiniz</li>
    </ul>
    <p class="mb-2">Daha fazla bilgi ve özel kampanyalar için bizimle iletişime geçin.</p>
    <NuxtLink to="/" class="text-blue-600 underline">Ana sayfaya dön</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryBannerShop from '~/components/organisms/CategoryBannerShop.vue'
</script>

<style scoped>
/* Stil düzenlemeleri buraya eklenebilir */
</style>
