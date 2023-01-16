<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter.options'

import CounterOptionsValue from '../components/CounterOptionsValue.vue'

const counterStore = useCounterOptionsStore()

const { add, substract, changeBy } = counterStore

</script>

<template>
    <div>
        <CounterOptionsValue />

        <div>
            <button class="minus" @click="substract">-</button>
            <button class="plus" @click="add">+</button>
        </div>
        <div>
            <button class="minus" @click="changeBy(-7)">-7</button>
            <button class="plus" @click="changeBy(7)">+7</button>
        </div>
        <div>
            <button @click="counterStore.$reset()">Reset</button>
        </div>
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