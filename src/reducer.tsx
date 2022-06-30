import { StoreInterface } from "./ context/userContext"

export type ACTIONTYPE = { type: "username"; payload: string }

export const stateReducer = (state:StoreInterface, action:ACTIONTYPE) => {
    switch(action.type) {
      case "username": 
        return {...state, username: action.payload }
    }


}