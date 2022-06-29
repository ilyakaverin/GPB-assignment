export const stateReducer = (state:any, action:any) => {
    const actionTypeMap:any = {
      "increment": () => ({...state, count:state.count + 1})
    }

  return actionTypeMap[action]()
}