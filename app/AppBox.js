import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as c from './constants'
import EntryBox from './EntryBox'
import ReportBox from './ReportBox'
import EntriesBox from './EntriesBox'
import ReportDataBox from './ReportDataBox'
import ReportGraphBox from './ReportGraphBox'

let AppBox = ({ mode }) => (
	<div className='uk-grid'>
		{mode === c.MODE_ENTRIES ?
			<EntriesBox /> : <ReportBox />}

    	{(() => {
    		switch (mode) {
    			default: return <EntryBox />
    			case c.MODE_REPORT_DATA: return <ReportDataBox />
    			case c.MODE_REPORT_GRAPH: return <ReportGraphBox />
    		}
    	})()}
  	</div>
)

const mapStateToProps = (state) => {
    return {
		mode: state.mentat.mode
	}
}

AppBox.propTypes = {
    mode: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(AppBox)