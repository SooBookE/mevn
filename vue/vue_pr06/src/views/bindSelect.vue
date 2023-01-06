<template>
  <div>
    <select name="" id="" v-model="selData">
      <option value="051">부산</option>
      <option value="02">서울</option>
      <option value="064">제주</option>
      <option value="055">창원</option>
      <option value="053">대구</option>
    </select>
    <span>{{ selData }}</span>
  </div>
  <hr />
  <div>
    <select name="" id="" v-model="selData2">
      <option :value="v.num" v-for="(v, i) in selList" :key="i">
        {{ v.locate }}
      </option>
    </select>
    <span>{{ selData2 }}</span>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      selData: '고르세오',
      selData2: '',
      selList: [
        { locate: '부산', num: '051' },
        { locate: '서울', num: '02' },
        { locate: '제주', num: '064' },
        { locate: '창원', num: '055' },
        { locate: '대구', num: '053' }
      ]
    }
  },
  methods: {}
}
</script>

<style></style>
