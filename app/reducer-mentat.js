import * as c from './constants'

const initialState = () => ({
	selectedEntry: 0,
	mode: c.MODE_ENTRIES
})

const mentat = (state , action) => {
  	if(typeof state === 'undefined')
		return initialState()

	switch (action.type) {

		case c.DEL_ENTRY:
      		return Object.assign({}, state, {
				selectedEntry: state.selectedEntry === action.id ? 0 : state.selectedEntry
			})

    	case c.SWITCH_ENTRY:
			return Object.assign({}, state, {
				selectedEntry: action.id
			})

		case c.SWITCH_MODE:
			return Object.assign({}, state, {
				mode: action.mode
			})


    	default:
      		return state
	}
}

export default mentat
