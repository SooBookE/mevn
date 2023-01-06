<template>
  <div>
    <input type="checkbox" id="inHtml" value="HTML" v-model="chkData" />
    <label for="inHtml">HTML</label>
    <input type="checkbox" id="inCSS" value="CSS" v-model="chkData" />
    <label for="inCSS">CSS</label>
    <input
      type="checkbox"
      id="Javascript"
      value="Javascript"
      v-model="chkData"
    />
    <label for="Javascript">Javascript</label>
    <input type="checkbox" id="vuejs" value="vuejs" v-model="chkData" />
    <label for="vuejs">vuejs</label>
    <input type="checkbox" id="nodejs" value="nodejs" v-model="chkData" />
    <label for="nodejs">nodejs</label>
    <input type="checkbox" id="JSON" value="JSON" v-model="chkData" />
    <label for="JSON">JSON</label>
    <hr />
    <div v-if="chkData.length !== 0">
      선택하신 내용은 :
      <span v-for="ele in chkData" :key="ele">| {{ ele }} |</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Check',
  data() {
    return {
      chkData: []
    }
  },
  methods: {}
}
</script>

<style></style>
