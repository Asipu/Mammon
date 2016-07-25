import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import * as actions from '../actions'
import {sortEntries, getEntryTotal, amountToText} from '../selectors'
import EntriesOverview from './components/EntriesOverview'

const mapDispatchToProps = (dispatch) => {
    return {
        onAddEntry: () =>
            dispatch(actions.add_entry()),

        onSwitchMode: (mode) =>
            dispatch(actions.switch_mode(mode))
    }
}

const EntriesBox = connect(
    createSelector(
        (state) => sortEntries(state.entries),

        (entries) => ({
            entries,
            total: entries.size === 0
                ? '' : amountToText(getEntryTotal(entries.get(0), entries))
        })
    ),

    mapDispatchToProps

)(EntriesOverview)

export default EntriesBox