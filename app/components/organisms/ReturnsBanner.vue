<template>
	<div>
		<div v-for="banner in banners" :key="banner.title" class="mb-8 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center" :style="bannerStyle(banner)">
			<div class="flex-1 p-8 md:p-12 text-white" :style="bannerBg(banner)">
				<h2 class="text-3xl font-bold mb-2">{{ banner.title }}</h2>
				<p class="text-lg mb-4">{{ banner.description }}</p>
				<NuxtLink
					:to="
						banner.buttonText && banner.buttonText.toLowerCase().includes('learn')
							? '/returns-info'
							: banner.buttonText && banner.buttonText.toLowerCase().includes('shop')
							? '/shop-info'
							: banner.buttonLink
					"
					class="px-6 py-2 bg-white text-black rounded-full text-base font-semibold hover:bg-gray-200 transition"
				>
					{{ banner.buttonText }}
				</NuxtLink>
			</div>
			<div v-if="banner.imageUrl" class="flex-1 h-[260px] md:h-[320px] w-full md:w-[50%] bg-cover bg-center" :style="`background-image: url('${banner.imageUrl}')`"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { ref, onMounted } from 'vue'

const props = defineProps({
	limit: { type: Number, default: 99 }
})

const banners = ref<any[]>([])

onMounted(async () => {
	// ========== Express API (Aktif) ==========
	try {
		const response = await $fetch('http://localhost:4001/api/returnsBanners')
		const allBanners = response as any[]
		banners.value = allBanners.slice(-props.limit)
	} catch (e) {
		console.error('Error fetching returns banners:', e)
	}
	
	// ========== Firebase (Yorum - Pasif) ==========
	// const db = getFirestore()
	// const querySnapshot = await getDocs(collection(db, 'returnsBanners'))
	// const allBanners = querySnapshot.docs.map(doc => doc.data())
	// banners.value = allBanners.slice(-props.limit)
})

function bannerStyle(banner: any) {
	if (banner.buttonText && banner.buttonText.toLowerCase().includes('shop')) {
		return 'background: #181818; color: #fff;'
	}
	return 'background: #2d292a; color: #fff;'
}
function bannerBg(banner: any) {
	return ''
}
</script>
