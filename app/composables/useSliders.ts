import { ref, onMounted } from 'vue'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '~/utils/firebase'

export function useSliders() {
  const sliders = ref([])
  const loading = ref(true)

  onMounted(async () => {
    const db = getFirestore(app)
    const querySnapshot = await getDocs(collection(db, 'sliders'))
    sliders.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    loading.value = false
  })

  return { sliders, loading }
}
