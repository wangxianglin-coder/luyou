<template>
    <div class="top-bar">
        <div class="header-left">
            <span class="iconfont">
                &#xe743;
            </span>
        </div>
        <div class="header-center">
            <span class="iconfont">
                &#xe6a2;
            </span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city" class="city">
          <div class="header-right">
            {{city}}
            <span class="iconfont">
                &#xe665;
            </span>
          </div>
        </router-link>

    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
      ...mapState(['city'])
    }
}
</script>
<style scoped>
.top-bar{
    width: 100%;
    height: 0.88rem;
    background-color:  #00bcd4;
    display: flex;
    color: #fff;
    font-size: 0.36rem;
    line-height:  0.88rem;
}
.header-left{
    width: .4rem;
    padding: 0 0.2rem;
}
.header-center{
    flex: 1;
    font-size: 0.22rem;
    height: 0.58rem;
    border-radius: 0.1rem;
    background-color: #fff;
    margin-top: 0.15rem;
    line-height: 0.48rem;
    color: #e4e7ea ;
    padding-left: 0.2rem;
}
.header-right{
    font-size: 0.3rem;
    padding-left: 0.2rem;
}
.city {
  color: #fff;
}
</style>
