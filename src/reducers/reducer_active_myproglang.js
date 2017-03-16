export default (state = null, action) => {

  switch(action.type) {
    case 'LANG_SELECTED':
      return action.payload
  }

  return state
}
