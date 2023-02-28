import { ref, watch } from 'vue'

import { useQuery } from '@tanstack/vue-query'

import { getClient } from '../services'
import type { Client } from '../models/client'

export const useClient = (id: number) => {

    const client = ref<Client>()

    const { data, isLoading } = useQuery(
        ['client', id],
        () => getClient(id),
    )

    watch(data, () => {
        if (data.value)
            client.value = data.value
    }, { immediate: true })

    return {
        // properties
        client,
        isLoading,
        // methods
    }
}