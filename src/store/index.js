import { createStore } from "vuex";

export default createStore ({
  state: {
    count: 0,
    memos: []
  },
  getter: {
  },
  mutations: {
    // メモを保存
    save (state, newMemo) {
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    }
  },
  actions: {
  },
  modules: {
  },
})
