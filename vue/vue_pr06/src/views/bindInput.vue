<template>
  <p>양방향 입출력 예제</p>
  <input type="text" v-model="userId" :placeholder="'sample'" />
  <p>계산기 예제1</p>
  <input type="number" v-model="num1" />+<input type="number" v-model="num2" />
  <span>{{ num1 + num2 }}</span>
  <!-- type을 넘버로 바꾸던가 -->
  <p>계산기 예제2</p>
  <input v-model.number="num3" />+<input v-model.number="num4" />
  <span>{{ num3 + num4 }}</span>
  <!-- v-model을 넘버로 받던가 -->
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      userId: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {}
}
</script>

<style></style>
