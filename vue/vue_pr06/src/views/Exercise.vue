<template>
  <select v-model="sel">
    <option value="없음">선택해주세요.</option>
    <option value="서울">서울</option>
    <option value="대전">대전</option>
    <option value="대구">대구</option>
    <option value="부산">부산</option>
  </select>
  <div>선택한 배송지역 : {{ sel }}</div>
  <br />
  <br />
  <table>
    <tr>
      <th v-for="ele in dataH" :key="ele">{{ ele }}</th>
    </tr>
    <tr v-for="(ele, i) in dataArr" :key="i">
      <td>{{ i + 1 }}</td>
      <td>{{ ele.category }}</td>
      <td>{{ ele.product_name }}</td>
      <td>{{ ele.price }}</td>
      <td>{{ ele.delivery_price }}</td>
      <td>
        <input
          type="number"
          @input="ele.ea = $event.target.value"
          @click="ele.ea = $event.target.value"
          :value="ele.ea"
        />
      </td>
      <td @input="result[i] = $event.target.value">
        {{ ele.ea * ele.price + (ele.ea != 0 ? ele.delivery_price : 0) }}
      </td>
    </tr>
    <tr>
      <td colspan="6">총합</td>
      <td>{{ result[1] }}</td>
    </tr>
  </table>
</template>

<script>
import data from '../assets/productData.js'
export default {
  name: 'Exercise',
  data() {
    return {
      sel: '없음',
      dataH: ['No.', '카테고리', '제품명', '가격', '배송료', '수량', '합계'],
      dataArr: data,
      result: [0, 0, 0, 0, 0]
    }
  },
  methods: {}
}
</script>

<style></style>
