import { defineStore } from "pinia";

interface counterOptionsState {
    count: number;
    lastChange?: Date;
}

export const useCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({
        count: 0,
        lastChange: undefined,
    } as counterOptionsState),
    getters: {
        squareCount: (state) => state.count * state.count,
    },
    actions: {
        add() {
            this.changeBy(1)
        },
        substract() {
            this.changeBy(-1)
        },
        changeBy(amount: number) {
            this.count += amount
            this.lastChange = new Date()
        }
    }
})