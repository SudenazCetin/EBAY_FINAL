<!-- app/layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Her sayfada header -->
    <HeaderBar />

    <!-- Route içeriği -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Her sayfada footer -->
    <FooterBar />
  </div>
</template>
