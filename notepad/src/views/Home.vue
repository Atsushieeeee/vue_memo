<template>
  <div class="home">
    <ul v-for="memo in newest" :key="memo.id">
      <li>{{ memo.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  computed:{
    newest: function(){
      // slice().reverse()で逆から呼び出す
      return this.$store.state.memos.slice().reverse();
    }
  }
}
</script>