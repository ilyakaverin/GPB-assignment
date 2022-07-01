import { StoreInterface } from "./context/userContext"

export type ACTIONTYPE = 
{ type: "username"; payload: string } | 
{ type: "registryNumber"; payload: string } |
{ type: "fullName"; payload: string } |
{ type: "dateOfBirth"; payload: string } |
{ type: "placeOfBirth"; payload: string } |
{ type: "citizenship"; payload: string } |
{ type: "snils"; payload: string } |
{ type: "registerAdress"; payload: string } |
{ type: "livingAdress"; payload: string }

export const stateReducer = (state:StoreInterface, action:ACTIONTYPE) => ({ ...state, [action.type]: action.payload })

