import axios from 'axios'

import type { Client } from '../models/client'

const apiUrl = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: `${apiUrl}/clients`,
})

export const getClient = async (id: number) => {
    try {
        const { data } = await api.get<Client>(`${id}`)
        return data
    } catch (error) {
        throw error
    }
}

export const getClients = async (page: number = 1) => {
    try {
        const { data } = await api.get<Client[]>(`?_page=${page}`)
        return data
    } catch (error) {
        throw error
    }
}