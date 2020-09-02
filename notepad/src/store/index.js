import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createdPersistedState()],
  state: {
    memos: [
      {id: 1, body: 'サンプルのメモです'}
    ]
  },
  // 変化をさせるときに使う処理 mutations
  mutations: {
    // memoをパラメータとして受け取る
    save(state, memo) {
      // 新しいIDを割り振る
      var max = state.memos[state.memos.length -1].id;
      memo.id = max +1;
      // stateの中のmemosにmemoをpush(追加)するという意味
      state.memos.push(memo);
    },
    update(state,data) {
      // 指定したdataというものをmemosの中からidと一致するものだけを取り出してxに格納する
      let x = state.memos.find(memo => memo.id == data.id);
      x.body = data.body;
    }
  }
})