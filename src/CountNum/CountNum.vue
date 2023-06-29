<template>
    <div>숫자 증가 감소</div>
    <div>{{ count }}</div>
    <button @click="plus">숫자 증가</button>
    <!-- 부모 컴포넌트에서 자식 컴포넌트로 값을 넘기면 read only가되어 부모 컴포넌트에서 함수를 만들어서 넘겨줘야 할듯 -->
    <DecNum :count="count" ref="child" @fromChild="minus"></DecNum>
    <button @click="callChild">초기화</button>
</template>
<!-- 먼가 뷰는 컴포넌트간의 이동이 자유롭지 않다 -->
<script>
import DecNum from "./DecNum.vue"
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        plus() {
            this.count++;
        },
        minus() {
            this.count--;
        },
        callChild() {
            this.$refs.child.reset();
        }

    },
    components: {
        DecNum,
    }
}
</script>