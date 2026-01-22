import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/utils/firebase'
import type { Product } from '~/types/Product'

/**
 * SSR-uyumlu ürünleri çeken composable
 * useAsyncData kullanarak server-side'da veri çeker
 */
export const useProducts = () => {
    const { data: products, pending, error, refresh } = useAsyncData<Product[]>(
        'products',
        async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'))
                return querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Product[]
            } catch (e) {
                console.error('Error fetching products:', e)
                return []
            }
        },
        {
            // Server ve client'ta sadece bir kere çalışır
            server: true,
            lazy: false
        }
    )

    return {
        products,
        pending,
        error,
        refresh
    }
}

/**
 * Tek bir ürünü ID'ye göre çeken composable
 */
export const useProduct = (id: MaybeRef<string | number>) => {
    const { data: product, pending, error } = useAsyncData<Product | null>(
        `product-${unref(id)}`,
        async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'))
                const products = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Product[]

                // Hem string hem sayı id'leri karşılaştır
                return (
                  products.find(p => String(p.id) === String(unref(id)) || p.id === unref(id)) || null
                )
            } catch (e) {
                console.error('Error fetching product:', e)
                return null
            }
        },
        {
            server: true,
            lazy: false
        }
    )

    return {
        product,
        pending,
        error
    }
}
