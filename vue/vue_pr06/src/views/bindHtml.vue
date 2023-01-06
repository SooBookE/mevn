<template>
  <div>HTML{{ htmlString }}</div>
  <!-- 우리 원하지 않는 결과 -->
  <div v-html="htmlString"></div>
  <!-- 우리가 원하는 결과. div 안에 p태그가 삽입된다. -->
</template>

<script>
export default {
  name: 'Html',
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 글자</p>'
    }
  },
  methods: {}
}
</script>

<style></style>
