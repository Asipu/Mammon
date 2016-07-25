import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import * as c from '../constants'

let ReportBox = ({ total, onSwitchMode }) => {
	return (
		<div className='uk-width-medium-4-10'>
            <div className='uk-block'>
                <div className='uk-panel uk-panel-space uk-panel-header'>



                    <h3 className='uk-panel-title'>
                        <span className='uk-text-bold'>€</span>
                    </h3>

                    <div>
                        <ul style={{marginBottom: '5px'}} className='uk-tab' data-uk-tab>
                            <li>
                                <a onClick={() => onSwitchMode(c.MODE_ENTRIES)} href=''>Entries</a>
                            </li>
                            <li className='uk-active'><a href=''>Report</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
        onSwitchMode: (mode) => {
            dispatch(actions.switch_mode(mode))
        }
    }
}

ReportBox = connect(
	null,
	mapDispatchToProps
)(ReportBox)

export default ReportBox