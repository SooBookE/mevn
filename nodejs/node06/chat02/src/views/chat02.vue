<!-- <template>
  <div>
    <h1>{{ kys }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script setup>
const name = '이것은 setup으로 작성한 것입니다.'
</script> -->
<!-- DOM 콘텐츠가 실행되기 전 실행되는 요소인데
JS 스크립트처럼 작성할 수 있다. -->

<template>
  <div class="modal">
    <div class="modal-body">
      <div>👏변경됐습니다.</div>
    </div>
  </div>
  <div id="contanier">
    <div id="chatid1">
      <span
        >대화명
        <input
          id="chatidi"
          @input="myname = $event.target.value"
          placeholder="대화명을 입력해주세요."
        />
        <input type="button" value="확인" @click="makeName()" />
      </span>
      <span v-show="myname !== '익명'">대화명: {{ myname }}</span>
    </div>
    <div id="messages">
      <div class="chat-line" v-for="(chat, i) in chatData" :key="i">
        <div v-if="chat.toid == ''">{{ chat.id + ': ' + chat.message }}</div>
        <div v-else-if="chat.toid != myname">
          {{ toname + '에게 보낸 메시지: ' + chat.message }}
        </div>
        <div v-else>{{ chat.id + '에게 받은 메시지: ' + chat.message }}</div>
      </div>
      <!-- <span>
        {{ ids }}
      </span>
    내부 setup(){} 에 작성 변수-->
    </div>
    <div id="chatid2">
      귓속말: <input type="checkbox" @click="ck = $event.target.checked" />
      <input
        :disabled="!ck"
        @input="toname = $event.target.value"
        placeholder="상대 이름"
      />에게
    </div>
    <div id="send">
      <input
        id="input"
        v-model="message"
        autocomplete="off"
        @keyup.enter="message !== '' ? sendMessage() : false"
      />
      <button @click="message !== '' ? sendMessage() : false">전송</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  // setup() {
  //   const ids = 'zz'
  //   return { ids }
  // 이 안에 넣으려면 되게 귀찮다.
  // },
  created() {
    this.$socket.on('chat', (data) => {
      console.log(data)
      this.chatData.push(data)
    })
  },
  data() {
    return {
      chatData: [],
      myname: '' || '익명',
      ck: false,
      toname: '',
      message: '',
      modalon: false
    }
  },
  methods: {
    makeName() {
      console.log('나중에 활용할 함수')
    },
    sendMessage() {
      this.$socket.emit('chat', {
        message: this.message,
        id: this.myname,
        toid: this.toname
      })
      console.log(this.message)
      this.message = ''
    }
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
body {
  min-height: 500px;
  margin: 0;
  padding-bottom: 3em;
}
#container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
#messages {
  height: 450px;
  background-color: #f1eaea;
  text-align: left;
  overflow-y: auto;
}
#send {
  margin: 5px;
  padding: 5px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
}
#chatid1 {
  display: flex;
  justify-content: space-between;
}
#chatid2 {
  text-align: right;
  margin-right: 5px;
}
#input {
  height: 100%;
  width: 60%;
  border: none;
  padding: 0 16px;
  flex-grow: 1;
  border-radius: 32px;
  margin: 0;
  border-bottom: 1px solid #564949;
}
button {
  width: 25%;
  height: 100%;
  background-color: #999;
  border: none;
  padding: 0.1em;
  margin: 4px;
  border-radius: 5px;
  outline: none;
  color: #fff;
}
</style>
