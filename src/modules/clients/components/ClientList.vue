<script setup lang="ts">
</script>

<template>
    <ul>
        <li>
            <router-link :to="{ name: 'client-detail', params: { id: 1 } }">Cliente 1</router-link>
        </li>
    </ul>
</template>