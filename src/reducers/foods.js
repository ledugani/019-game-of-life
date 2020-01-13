export default function foodReducer(state=[], action) {
  switch(action.type) {
    case 'UPDATE_FOOD':
      return state

    case 'ADD_FOOD':
      return [...state, action.payload]

    case 'REMOVE_FOOD':
      return state

    default:
      return state
  }
}