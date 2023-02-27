<script setup lang="ts">
import { ref, toRef, watch } from 'vue'

const props = defineProps<{
    totalPages: number
    currentPage: number
}>()

const emits = defineEmits<{
    (e: 'pageChanged', page: number): void
}>()

const totalPages = toRef(props, 'totalPages')
const currentPage = toRef(props, 'currentPage')

const totalPageNumbers = ref<number[]>([])

watch(totalPages, () => {
    totalPageNumbers.value = [...new Array(totalPages.value)].map((_, i) => i + 1)
}, { immediate: true })
</script>

<template>
    <div>
        <button :disabled="currentPage === 1" @click="emits('pageChanged', currentPage - 1)">Anterior</button>

        <button v-for="page of totalPageNumbers" :key="page" :class="{ active: currentPage === page }"
            @click="emits('pageChanged', page)">{{ page }}</button>

        <button :disabled="currentPage === totalPages" @click="emits('pageChanged', currentPage + 1)">Siguiente</button>
    </div>
</template>

<style scoped>
div {
    margin-top: 10px;
}

button {
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid var(--color-border);
    color: var(--color-text);
    cursor: pointer;
    margin-right: 5px;
    padding: 10px;
    transition: all .5s;
}

button:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
    transition: all .5s;
}

button:disabled {
    cursor: not-allowed;
}

.active {
    background-color: hsla(160, 100%, 37%, 0.2);
}
</style>