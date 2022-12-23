<template>
  <div>
    <hr>
    <h3>변수 머스타치 사용하기</h3>
    <!-- {{  }} 를 머스타치라고 한다.-->
    <h1>안녕하세요. {{vname}} 반갑습니다. {{ age }}살입니까?</h1>
    <!-- {{ 변수 }} 로 vue는 변수를 인지한다. -->
    <hr>
    <h3>v-on 기능 사용하기</h3>
    <button v-on:click="func('팝업창')">버튼</button>
    <!-- v-on:click 축약형은 @click -->
    <button @dblclick="func('떱클 팝업')">더블클릭버튼</button>
    <hr>
    <h3>v-if 조건문</h3>
    <h1 v-if="status">제가 보이나요?</h1>
    <!-- v-if는 주석을 넣고 스크립트를 제거 -->
    <h1 v-show="status">제가 보이나요?</h1>
    <!-- v-show는 스타일을 display: none 으로 전환. -->
    <button v-on:click="status=true">보이게 할게요.</button>
    <button v-on:click="status=false">숨길게요.</button>
    <!-- 예제. 버튼 한 개로 on/off 하기 -->
    <button v-on:click="status=!status">전환할게요.</button>
    <hr>
    <h3>v-model 양방향데이터</h3>
    <input type="text" v-model="inData" v-on:keyup="func(inData+'적고 손뗐다.')">
    <input type="text" v-model="inData" v-on:keyup.enter="func(inData+'적고 엔터치따.')">
    <!-- 이때까지는 단 방향으로 동작했는데(읽기/쓰기 따로 작성해야 한다.), vue는 양방향 기능 지원한다. -->
    <h2>{{inData}}</h2>





    <!-- <div class="e" v-for="(e,i) in list" :key='i'> -->
      <!-- for가 나오면 항상 :key가 나와야 한다. i는 딱히 쓸 게 없으면 인덱스 쓰면 된다. -->
      <!-- <div class="i">
        <img :src="e" alt=""></div> -->
        <!-- <img v-bind:src="e" alt=""></div> 와 같다. -->
    <!-- </div> -->
    <!-- <svg viewBox="0 0 93.3 100" class="">
      <path d="M52.1 5.4l-5.4 5.4-5.4-5.4L46.6 015.5 5.4z"></path>
    </svg>
    <div class="t">{{ e.msg }}</div> -->


  </div>
  <hr>
  <h3>v-for 사용하기 <br>배열:{{ arrData }}</h3>
  <button v-on:click="add">추가하기</button>
  <button v-on:click="sub">삭제하기</button>
  <ul>
    <li v-for="data in arrData" :key="data">{{ data }}</li>
    <!-- for를 쓰면 항상 key를 적어줘야 한다. 딱히 없으면 그냥 요소값 넣어주기. -->
  </ul>
  <p>추가한 값: {{ anum }}</p>
  <p>삭제한 값: {{ dnum }}</p>
</template>

<script>
export default{
  name:'app',
  data(){
    return{
      vname: '홍길동',
      age: 20,
      status: false,
      inData:'',
      arrData:[1,2,3,4,5],
      dnum:0,
      anum:0
    }
  },
  methods:{
    func : function(text){
      alert(text); // on click에 바로 alert 넣으면 안 되고, 이렇게 거쳐서 실행시켜야한다.
      // this를 많이 쓰므로 화살표 함수는 쓰면 안 된다...?
    },
    add:function(){
      this.arrData.push(this.arrData.length+1);
      this.anum=this.arrData.length;
      this.dnum='';
    },
    sub:function(){
      this.dnum=this.arrData.pop();
      this.anum='';
    }
  }
}
</script>

<style>
button{
  margin: 0 10px;
}
ul{
    display: flex;
  }
  li{
    position: relative;
    margin: 0 30px;
  }
  li>text {
    margin-left: -3px;
  }
</style>
