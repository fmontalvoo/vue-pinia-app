<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useClient } from '../composables/useClient'

import LoadingModal from '@/shared/components/LoadingModal.vue'

const props = defineProps<{ id: number }>()

const { client, isLoading, } = useClient(props.id)
</script>

<template>
    <h1>Cliente: {{ id }}</h1>

    <div>
        <form action="">
            <input type="text" placeholder="Nombre">
            <br>
            <input type="text" placeholder="Direccion">
            <br>
            <button type="submit">Guardar</button>
        </form>
    </div>

    <code>
        <pre>{{ client }}</pre>
    </code>

    <LoadingModal v-if="isLoading" />
</template>