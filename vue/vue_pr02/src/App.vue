<template>
  <!-- Vue 문제
  step1) 새 뷰 프로젝트(vue_pr02)를 생성하기.
  step2) 값을 입력하면 그 값에 해당하는 구구단표가 만들어지도록 하기.
  step3) 위의 내용에서 버튼을 누르면 표가 보이고, 한 번 더 누르면 사라지게(on/off) 하기. -->
  <button v-on:click="status=!status">전환버튼</button>
  <table v-if="status">
    <tr>
      <td>{{ input*1 }}</td>
      <td>{{ input*2 }}</td>
      <td>{{ input*3 }}</td>
      <td>{{ input*4 }}</td>
      <td>{{ input*5 }}</td>
      <td>{{ input*6 }}</td>
      <td>{{ input*7 }}</td>
      <td>{{ input*8 }}</td>
      <td>{{ input*9 }}</td>
    </tr>
  </table>
</template>

<script>
  export default{
    data(){
      return{
        input: prompt('구구단! 원하는 단수를 입력하세요.','1~9까지만'),
        status: true
      }
    }
  }
</script>

<style>

</style>
