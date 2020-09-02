<template>
  <div class="home">
    <Header>My Memos</Header>
    <ul v-for="memo in newest" :key="memo.id">
      <li>
        <!-- index.jsのname:Editを定義したのでrouterから自動的にpathを取ってきている。 -->
        <!-- idの部分はmemoのidを割り当てるようにしている -->
        <router-link :to="{name: 'Edit',params:{id: memo.id}}">
          {{ memo.body }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
  textarea{
    width: 100%;
    height: 10em;
  }

  button{
    border: 1px solid #333;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    margin-top: 10px;
  }
</style>

<script>
import Header from "@/components/Header.vue"
export default {
  name: "home",
  components: {
    Header
  },
  computed:{
    newest: function(){
      // slice().reverse()で逆から呼び出す
      return this.$store.state.memos.slice().reverse();
    }
  }
}
</script>