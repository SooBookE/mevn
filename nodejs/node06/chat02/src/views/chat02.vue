<template>
  <div>
    {{ kys }}
  </div>
</template>

<script setup></script>

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
