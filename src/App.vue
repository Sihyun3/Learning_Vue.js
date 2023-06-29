<template>
  <header>
      <nav>
        <div>여기 부분 헤더임</div>
        <RouterLink class="box" to="/">숫자 카운트</RouterLink>
        <RouterLink to="/1" style="margin-right: 10px;">TodoList 만들기</RouterLink>
        <RouterLink to="/2">Board 만들기</RouterLink>
      </nav>
  </header>
  <!-- 둘다 가능 -->
  <!-- <RouterView /> -->
  <router-view />
</template>
<!-- 왜 임포트 없어도 가능한건지는 모르겠다. -->
<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>


<!-- scope가 있으면 여기서만 적용이 되고 없으면 전역으로 적용이 된다. -->
<style scoped>
  .box{
    margin-right: 10px;
  }
</style>
