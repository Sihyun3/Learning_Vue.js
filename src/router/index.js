import { createRouter, createWebHistory } from 'vue-router'
import CountVue from '../CountNum/CountNum.vue'
import Board from '../Board/Board.vue'
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),

  //여기서 route 설정을 해주는데 두가지 방법으로 가능 한 것 같다.
  //1번은 위에서 라우팅을 해주는 방식이고 2번은 객체 상태로 임포트 해주는 차이
  routes: [
    {
      path: '/',
      name: 'CountNum',
      component: CountVue
    },
    {
      path: '/1',
      name: 'TodoList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../TodoList/TodoList.vue')
    },
    {
      path: '/2',
      component: Board
    },
    {
      path: '/2/:idx',
      component: () => import('../Board/BoardDetail.vue')
    }

  ]
})

export default router
