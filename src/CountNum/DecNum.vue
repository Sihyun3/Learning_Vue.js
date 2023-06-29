<template>
    <div>
        <button @click="minus">숫자 감소</button>
        <div>{{ count }}</div>
        <div>{{ count1 }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count1: 11
        }
    },
    props: {
        count: Number
    },
    methods: {
        minus() {
            this.$emit("fromChild")
        },
        reset() {
            this.count1 = 0;
        }
    }
}
</script>