import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import AppBox from './AppBox'
import mentat from './reducer-mentat'
import entries from './reducer-entries'

const rootReducer = combineReducers({
	entries,
	mentat
})

ReactDOM.render(

	<Provider store={createStore(rootReducer)}>
		<AppBox />
	</Provider>,

  	document.getElementById('root')
)