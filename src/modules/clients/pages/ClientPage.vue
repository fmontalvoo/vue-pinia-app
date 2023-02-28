<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router'

import { useClient } from '../composables/useClient'

import LoadingModal from '@/shared/components/LoadingModal.vue'

const props = defineProps<{ id: number }>()

const router = useRouter()

const {
    // properties
    error,
    client,
    isError,
    mutation,
    isLoading,
    // methods
    submit,
} = useClient(props.id)

watch(isError, () => {
    if (isError.value)
        setTimeout(() => {
            router.replace({ name: 'clients' })
        }, 3000)
})
</script>

<template>
    <h1>Cliente: {{ id }}</h1>

    <div v-if="isError">
        <h2>Error</h2>
        <p>{{ error }}</p>
    </div>

    <div v-if="client">
        <form @submit.prevent="submit">
            <input type="text" placeholder="Nombre" v-model="client.name">
            <br>
            <input type="text" placeholder="Direccion" v-model="client.address">
            <br>
            <button type="submit" :disabled="mutation.isLoading.value">Guardar</button>
        </form>
    </div>

    <code>
            <pre>{{ client }}</pre>
        </code>

    <LoadingModal v-if="isLoading" />
</template>