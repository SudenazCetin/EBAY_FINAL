<!-- app/components/organisms/PromoBanner.vue -->
<template>
  <section
    class="relative w-full rounded-3xl overflow-hidden mt-10"
  >
    <!-- Background Image -->
    <img
      src="/assets/banners/return2.jpg"
      alt="Returns banner"
      class="w-full h-[360px] object-cover"
    />

    <!-- Overlay content -->
    <div
      class="absolute inset-0 flex flex-col justify-center pl-10
             text-white"
    >
      <h2 class="text-4xl font-bold">
        Returns made simple
      </h2>

      <p class="mt-2 text-lg opacity-90">
        Not happy with your purchase? It's easy to start a return.
      </p>

      <!-- 🔵 Shop Now yönlendirme -->
      <NuxtLink
        to="/category/car-truck-parts"
        class="mt-5 bg-white text-black font-semibold px-5 py-2 rounded-full shadow-sm w-fit"
      >
        Shop Now
      </NuxtLink>
    </div>
  </section>
</template>
