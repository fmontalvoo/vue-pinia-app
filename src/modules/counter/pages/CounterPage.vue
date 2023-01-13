<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useCounterOptionsStore } from '@/store/counter.options';

const counterStore = useCounterOptionsStore()

const { add, substract } = counterStore
const { count, squareCount } = storeToRefs(counterStore)

</script>

<template>
    <h2>Pinia Options</h2>
    <h3>Counter: {{ count }}</h3>
    <h4>Square counter: {{ squareCount }}</h4>

    <div>
        <button class="minus" @click="substract">-</button>
        <button class="plus" @click="add">+</button>
    </div>
</template>

<style scoped>
.minus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: crimson;
    background-color: crimson;
}

.plus {
    margin: 5px;
    width: 30px;
    height: 30px;
    border-width: 1;
    border-radius: 5px;
    color: aliceblue;
    border-color: green;
    background-color: green;
}
</style>