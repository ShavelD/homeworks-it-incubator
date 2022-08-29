export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const newState = [...state].sort((a,b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix
            return state
        }
        default: return state
    }
}