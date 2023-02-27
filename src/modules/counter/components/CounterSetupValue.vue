<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCounterSetupStore } from '@/store/counter.setup'

const counterStore = useCounterSetupStore()

const { count, squareCount } = storeToRefs(counterStore)

</script>

<template>
    <div>
        <h2>Pinia Setup</h2>
        <h3>Counter: {{ count }}</h3>
        <h4>Square counter: {{ squareCount }}</h4>
    </div>
</template>