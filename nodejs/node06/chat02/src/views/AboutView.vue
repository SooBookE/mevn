<template>
  <div>
    <h1>{{ kys }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script setup>
const name = '이것은 setup으로 작성한 것입니다.'
</script>
<!-- DOM 콘텐츠가 실행되기 전 실행되는 요소인데
JS 스크립트처럼 작성할 수 있다. -->

<script>
export default {
  name: 'chat',
  setup() {},
  created() {
    this.$socket.on('chat', (data) => {
      console.log(data)
      this.chatData.push(data)
    })
  },
  data() {
    return {
      chatData: []
    }
  },
  methods: {}
}
</script>

<style></style>
