import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import {findEntry} from '../selectors'
import * as actions from '../actions'
import EntryOverview from './components/EntryOverview'

const EntryBox = connect(
	createSelector(
		(state) => findEntry(state.entries, state.mentat.selectedEntry),
		(current) => ({entry: current})
	),

	(dispatch) => ({
        onChangeEntryDate: (id, value) =>
            dispatch(actions.update_entry(id, value))
	})
)(EntryOverview)

export default EntryBox