<template>
  <div>
    <h1>3. 데이터 양방향 바인딩</h1>
    <h2>v-model을 사용하여 양방향을 구현</h2>
    <!-- 편하지만, input 포함해 사용처가 제한되어있다. -->
    <span>v-model :</span><input type="text" v-model="inData" />
    <p>{{ inData }}</p>
    <button @click="inData = outData">꺼내오기:{{ inData }}</button>
    <br />
    <hr />
    <h1>4. 데이터 단반향 바인딩</h1>
    <!-- 우리가 이때까지 코딩하면서 사용한 방식. 꺼내오고 사용하기가 따로 구동한다. -->
    <h2>v-bind(읽기)와 v-on(쓰기)을 사용해 단방향(2가지=양방향)을 구현한다.</h2>
    <h3>{{ inValue }}</h3>
    <input type="text" v-bind:value="inValue" v-on:input="upValue" />
    <button style="margin: 0 5px" @click="setData">데이터 입력</button>
    <button @click="getData">데이터 출력</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      inData: '',
      outData: '꺼내온 값이다.',
      inValue: '',
      temp: ''
    }
  },
  methods: {
    upValue: function (e) {
      this.inValue = e.target.value
    },
    setData: function (e) {
      if (this.inValue) {
        alert('v-binding 된 값' + this.inValue + ' 를 입력함')
        this.temp = this.inValue
        this.inValue = ''
      }
    },
    getData: function (e) {
      alert('v-on으로 저장된 값:' + this.temp + ' 를 꺼내온다.')
      this.inValue = this.temp
    }
  }
}
</script>

<style></style>
