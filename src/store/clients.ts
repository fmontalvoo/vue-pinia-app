import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Client } from '@/modules/clients/models/client'

export const useClientsStore = defineStore('clients', () => {
    const clients = ref<Client[]>([])
    const totalPages = ref<number>(5)
    const currentPage = ref<number>(1)

    return {
        // state
        clients,
        totalPages,
        currentPage,
        // getters

        // actions
        setClients(cli: Client[]) {
            clients.value = cli
        },
        setPage(page: number) {
            if (currentPage.value === page) return

            currentPage.value = page
        }
    }
})