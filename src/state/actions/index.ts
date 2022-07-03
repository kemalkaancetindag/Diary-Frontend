import { ActionTypes } from "../action-types";

export interface CreateNewDiaryAction {
    type: ActionTypes.CREATE_NEW_DIARY,
    payload: any
}

export interface SetFieldAction {
    type: ActionTypes.SET_FIELD,
    payload: any

}