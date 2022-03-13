import { createStore } from 'vuex'

export default createStore({
  state: {
    pos:0,
    Nbtn:5,
  },
  getters: {
    getPos(state){
      return state.pos
    },
    getNbtn(state){
      return state.Nbtn
    }
  },
  mutations: {
    moove(state,n){
           let id = null;
           let shag = 65
           let lastpositeon = shag*(n-1)
              clearInterval(id);
              id = setInterval(frame, n);
              function frame() {
                if ( state.pos == lastpositeon) {
                  clearInterval(id);
                } else if( state.pos < lastpositeon)  {
                 state.pos++; 
                
                }else if ( state.pos > lastpositeon){
                  state.pos--;
                }
  }
        },
        mooves(state,n){
          console.log(n,state);
        }
  },
  actions: {
  },
  modules: {
  }
})
