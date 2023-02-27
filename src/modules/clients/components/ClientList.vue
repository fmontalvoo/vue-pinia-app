<script setup lang="ts">
import type { Client } from '../models/client';

defineProps<{ clients: Client[] }>()
</script>

<template>
    <ul>
        <li v-for="client of clients">
            <router-link :to="{ name: 'client-detail', params: { id: client.id } }">{{ client.name }}</router-link>
        </li>
    </ul>
</template>