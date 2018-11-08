/**
 * Reducer 数据处理
 */
import { type } from  './../action'
const initialState = {
    cityId:'',
    menuName:'首页'
}

export default(state = initialState, action)=>{
    switch(action){
        case type.SWITCH_MENU:
            return {
                menuName:action.menuName
            }
        default: break;
    }
}