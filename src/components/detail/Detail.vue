<template>
  <div>
    <header-nav></header-nav>
    <detail-header></detail-header>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>

<script>
import HeaderNav from './pages/HeaderNav'
import DetailHeader from './pages/Header'
export default {
  components: {
    DetailHeader,
    HeaderNav
  },
  deactivated() {
    this.$destroy();
   },
   activated() {
     document.documentElement.scrollTop = 0
   },
}
</script>

<style scoped>
.header-nav{
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0.58rem;
  background-color: #73d2df;
  padding: 0.1rem 0;
  border: 1px solid #000;
  align-items: center;
  font-size: 0.3rem;
  color: #fff;
}
.left{
  border: 1px solid #000;
  padding: 0.2rem 0.1rem;
}
.right{
flex: 1;
text-align: center;
}
</style>
