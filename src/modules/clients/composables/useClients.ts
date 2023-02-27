import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'

import { getClients } from '../services'
import { useClientsStore } from '@/store/clients'

const loadClients = async (page: number) => await getClients(page)

export const useClients = () => {

    const store = useClientsStore()
    const { clients, currentPage, totalPages } = storeToRefs(store)

    const { data, isLoading } = useQuery(
        ['clients?page=', currentPage],
        () => loadClients(currentPage.value),
    )

    watch(data, clients => {
        if (clients)
            store.setClients(clients)
    })

    return {
        // properties
        clients,
        isLoading,
        totalPages,
        currentPage,
        // methods
        getPage(page: number) {
            store.setPage(page)
        }
    }
}