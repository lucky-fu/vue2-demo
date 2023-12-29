<template>
<ul>
  <li>
    <router-link to="/login">登陆</router-link>
  </li>
</ul> 
 <!-- 路由出口 -->
 <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
