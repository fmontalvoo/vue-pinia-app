import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterSetupStore = defineStore('counterSetup', () => {
    const count = ref<number>(0)
    const lastChange = ref<Date>()

    const changeBy = (amount: number) => {
        count.value += amount
        lastChange.value = new Date()
    }

    return {
        // state
        count,
        lastChange,
        // getters
        squareCount: computed(() => count.value * count.value),
        // actions
        changeBy,
        add: () => changeBy(1),
        substract: () => changeBy(-1),
    }
})