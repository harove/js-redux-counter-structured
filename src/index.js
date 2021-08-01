import store from './store/index.js'
import {INCREMENT} from './store/const.js'

store.dispatch({type:INCREMENT})
store.dispatch({type:INCREMENT})

console.log(store.getState())

