import { createStore } from 'vuex'
import 'es6-promise/auto'
import getDataAllEmplyees from './getDataAllEmplyees'
import filterData from './filterData'

const store = createStore({
    modules: {
        getDataAllEmplyees,
        filterData
    }

})


export default store;



