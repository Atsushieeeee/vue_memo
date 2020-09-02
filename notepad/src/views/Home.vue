<template>
  <div class="home">
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
export default {
  name: "new",
  data: function(){
    return {
      memobody: ""
    }
  },
  methods: {
    save: function(){
      this.$store.commit("save",{
        body: this.memobody
      })
      this.$router.push("/");
    }
  }
}
</script>

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