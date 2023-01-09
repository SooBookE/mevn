<template>
  <form action="/Translate" method="post">
    <input type="radio" name="trans" @click="type = 1" />한>영
    <input type="radio" name="trans" @click="type = 2" />영>한 <br /><br />
    <input v-model="text" autocomplete="off" />
    <input type="submit" value="번역하기" @click="translate()" />
  </form>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Translate',
  data() {
    return {
      text: '',
      type: ''
    }
  },
  methods: {
    translate() {
      this.$socket.emit('transL', {
        text: this.text,
        type: this.type
      })
    }
  }
}
</script>

<style></style>
