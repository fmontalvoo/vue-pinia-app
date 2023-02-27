<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import PaginationComponent from '../components/PaginationComponent.vue';

import { useClients } from '../composables/useClients';

const { clients, currentPage, isLoading, totalPages, getPage } = useClients()

</script>

<template>
    <h1>Clientes</h1>
    <ClientList :clients="clients" />

    <PaginationComponent :current-page="currentPage" :total-pages="totalPages" @page-changed="getPage" />
</template>