import { ref, watch } from 'vue'

import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'

import type { Client } from '../models/client'
import { getClient, updateClient } from '../services'

export const useClient = (id: number) => {

    const client = ref<Client>()
    const mutation = useMutation(updateClient)
    const queryClient = useQueryClient()

    const { data, isLoading, isError, error } = useQuery(
        ['client', id],
        () => getClient(id),
        {
            retry: false,
        }
    )

    const submit = () => {
        console.info('submit')
        mutation.mutate(client.value!)
        const queries = queryClient.getQueryCache().findAll(['clients?page='], { exact: true })
        queries.forEach(query => query.reset())
    }

    watch(data, () => {
        if (data.value)
            client.value = { ...data.value }
    }, { immediate: true })

    return {
        // properties
        error,
        client,
        isError,
        mutation,
        isLoading,
        // methods
        submit,
    }
}