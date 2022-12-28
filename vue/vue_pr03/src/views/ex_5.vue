<template>
  <div>
    <h1>예제(강사님 풀이)</h1>
    <button
      @click="page = p"
      v-for="p in pages"
      :key="p"
      :class="{ active: page == p }"
    >
      {{ p }}
    </button>
    <div v-for="(g, i) in pages" :key="i">
      <div v-if="g == page">
        <div>{{ g }}</div>
        <!-- <img :src="'..//..//public//sample' + (i + 1) + '.jpg'" /> -->
        <!-- //는 직접주소를 사용한 것 -->
        <!-- <img :src="'../../sample' + (i + 1) + '.jpg'" /> -->
        <!-- / 하나만 사용할 때는 public폴더가 숨으므로? 생략해도 된다. -->
      </div>
      <img v-if="g == page" :src="'../../sample' + (i + 1) + '.jpg'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      page: 'page1',
      pages: ['page1', 'page2', 'page3', 'page4']
    }
  },
  methods: {}
}
</script>

<style scoped>
/* 예제4에만 스타일 적용하기 위해 scoped 입력 */
button {
  scale: 200%;
  background-color: #fff;
  border: 1px solid gray;
  margin: 30px;
  cursor: pointer;
}
button:hover {
  background-color: yellowgreen;
}
button.active {
  color: #fff;
  background-color: mediumslateblue;
}
img {
  width: 50%;
  height: 50%;
}
</style>
