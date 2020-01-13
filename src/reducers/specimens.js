export default function specimenReducer(state=[], action) {
  switch(action.type) {
    case 'UPDATE_SPECIMEN':
      return state

    case 'ADD_SPECIMEN':
      return [...state, action.payload]

    case 'REMOVE_SPECIMEN':
      return state

    default:
      return state
  }
}