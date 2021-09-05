import { ref } from 'vue'

export default function useAPI(apiHandler: any) {
    const query = ref('')
    const error = ref(false)
    const loading = ref(false)
    const res = ref('')

    function cleanRes() {
        res.value = ''
    }

    async function callAPI() {
        try {
            error.value = false
            loading.value = true
            cleanRes()
            res.value = await apiHandler()
        } catch (e) {
            console.error(e)
            error.value = true
        } finally {
            loading.value = false
        }
    }

    return { query, error, loading, res, cleanRes, callAPI }
}
