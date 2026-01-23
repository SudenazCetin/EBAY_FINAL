import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/utils/firebase'

export function useSliders() {
  // ========== Express API (Yorum - Pasif) ==========
  // const { data: sliders, pending: loading } = useAsyncData(
  //   'sliders',
  //   async () => {
  //     try {
  //       const response = await $fetch('http://localhost:4001/api/sliders')
  //       return response as any[]
  //     } catch (e) {
  //       console.error('Error fetching sliders:', e)
  //       return []
  //     }
  //   },
  //   {
  //     server: true,
  //     lazy: false,
  //     default: () => []
  //   }
  // )

  // ========== Firebase (Aktif) ==========
  const { data: sliders, pending: loading } = useAsyncData(
    'sliders',
    async () => {
      // Server-side'da boş dizi döndür, client-side'da Firebase'den çek
      if (process.server) return []
      
      try {
        const querySnapshot = await getDocs(collection(db, 'sliders'))
        return querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }))
      } catch (e) {
        console.error('Error fetching sliders:', e)
        return []
      }
    },
    {
      server: false, // Firebase sadece client-side
      lazy: false,
      default: () => []
    }
  )

  return { sliders, loading }
}
