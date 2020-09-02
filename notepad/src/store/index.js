import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memos: [
      {id: 1, body: 'サンプルのメモです'}
    ]
  },
  mutations: {
    // memoをパラメータとして受け取る
    save(state, memo) {
      // 新しいIDを割り振る
      var max = state.memos[state.memos.length -1].id;
      memo.id = max +1;
      // stateの中のmemosにmemoをpush(追加)するという意味
      state.memos.push(memo);
    }
  }
})