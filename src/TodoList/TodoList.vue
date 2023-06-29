<template>
    <div>TodoList</div>
    <input type="text" v-model="input" />
    <button @click="button">+</button>
    <div v-for="(d, i) in list">
        <input type="checkbox" :value="i" @click="check" />
        <div v-show="checked.includes(i.toString())">
            <span>인덱스{{ i }}</span>
            <span class="line">{{ d }}</span>
        </div>
        <div v-show="!checked.includes(i.toString())">
            <span>인덱스{{ i }}</span>
            <span>{{ d }}</span>
        </div>
        <button v-bind:value="d" @click="deleted">삭제</button>
        <!-- <button :value="d" @click="deleted">삭제</button> 
        둘다 사용가능 v-bind는 자주사용해서 : 로 생략 가능한 듯
        -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: "",
            list: [],
            checked: []
        }
    },
    methods: {
        button() {
            this.list = [...this.list, this.input]
        },
        deleted(e) {
            const newList = this.list.filter(data => data !== e.target.value);
            console.log(newList);
            this.list = newList
        },
        check(e) {
            if (e.target.checked) {
                this.checked = [...this.checked, e.target.value]
            } else {
                this.checked = this.checked.filter((d) => d !== e.target.value)
            }
        },
    },
    watch: {
        checked() {
            console.log("감지됨");
        }
    }

}
</script>
<style>
.line {
    text-decoration: line-through
}
</style>