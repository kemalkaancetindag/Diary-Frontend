import { ActionTypes } from "../action-types"

const initialState: any = {
    unSavedDiary: {}
}


interface Action {
    type: string,
    payload: any
}

const reducer = (state:any = initialState, action: Action) => {
    switch(action.type){
        case ActionTypes.SET_FIELD:
            var newUnsavedDiary = {...state.unSavedDiary}
            newUnsavedDiary[action.payload.field] = action.payload.value            
            return {...state,  unSavedDiary:newUnsavedDiary}
        default:
            return state
    }
}


export default reducer