<template>
    <div>
        게시판 상세페이지
        <div>
            {{ contents }}
        </div>
    </div>
</template>
<script>
export default{
    //computed는 아마도 날짜같은거 데이터 변환시킬때 사용 할 것 같다.
    computed:{
        contents(){
            return this.$route.params.idx + "번째 게시물 입니다"
        }
    }
}
</script>