// db firebase
export { firebase } from '@/db/firebase';
export { collection, getDocs,doc, addDoc, serverTimestamp, query, orderBy, updateDoc, deleteDoc  } from 'firebase/firestore'

//Vue Hooks
export { ref, onUpdated, defineExpose, watchEffect, computed, watch, defineProps, onMounted, nextTick, defineEmits, inject, onBeforeUnmount, reactive, onBeforeMount } from 'vue';


//utils
export {default as headerEmployeesKeys} from '@/utils/headerEmployeesKeys'
export {default as rules} from '@/utils/formValidationRules'

//store
export { useStore } from 'vuex';

//Dashboard
export { default as DashIndex } from '@/layout/userLayout/Index.vue'
export { default as GetEmployeesLayout } from '@/layout/userLayout/GetEmployeesLayout.vue'
export { default as AddEmplyeesForm } from '@/layout/userLayout/AddEmplyeesForm.vue'
export { default as EmplyeesLengthCalculate } from '@/layout/userLayout/EmplyeesLengthCalculate.vue'
export { default as Header } from '@/layout/userLayout/Header.vue'
export { default as EditEmplyeesData } from '@/layout/userLayout/EditEmplyeesData.vue'
export { default as DeleteEmployeForm } from '@/layout/userLayout/DeleteEmployeForm.vue'
export { default as FilterEmployees } from '@/filterEmployees/FilterEmployees.vue'
export { default as ResetFilter } from '@/filterEmployees/ResetFilter.vue'



//form
export { default as TextInput} from '@/components/form/TextInput.vue'
export { default as Switch} from '@/components/form/Switch.vue'
export { default as Select} from '@/components/form/Select.vue'
