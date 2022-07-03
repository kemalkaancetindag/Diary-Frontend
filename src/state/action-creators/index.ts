import { Dispatch } from "redux"
import { ActionTypes } from "../action-types"
import { CreateNewDiaryAction, SetFieldAction } from "../actions"


export const createNewDiary = (data:any) => {
    return (dispatch: Dispatch<CreateNewDiaryAction>) => {
        dispatch({
            type: ActionTypes.CREATE_NEW_DIARY,
            payload: data
        })
    }
}

export const setFieldForNewDiary = (data:any) => {
    return (dispatch: Dispatch<SetFieldAction>) => {
        dispatch({
            type: ActionTypes.SET_FIELD,
            payload: data
        })
    }
}