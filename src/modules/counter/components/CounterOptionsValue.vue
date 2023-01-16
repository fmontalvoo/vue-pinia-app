<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCounterOptionsStore } from '@/store/counter.options'

const counterStore = useCounterOptionsStore()
const { count, squareCount } = storeToRefs(counterStore)

</script>

<template>
    <div>
        <h2>Pinia Options</h2>
        <h3>Counter: {{ count }}</h3>
        <h4>Square counter: {{ squareCount }}</h4>
    </div>
</template>