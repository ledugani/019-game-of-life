export function mapStateToProps(state, ownProps) {
  return {
    specimens: state.specimens,
    foods: state.foods,
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addSpecimen: (specimen) => {
        dispatch({ type: 'ADD_SPECIMEN', payload: specimen })
      },
      removeSpecimen: (specimen) => {
        dispatch({ type: 'REMOVE_SPECIMEN', payload: specimen })
      },
      updateSpecimen: (specimen) => {
        dispatch({ type: 'UPDATE_SPECIMEN', payload: specimen })
      },

      addFood: (food) => {
        dispatch({ type: 'ADD_FOOD', payload: food })
      }
    }
  }
}