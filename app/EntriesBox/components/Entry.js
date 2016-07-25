import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import {amountToText} from '../../selectors'

let Entry = ({ data, total, previousTotal, onDelEntry, onSwitchEntry }) => {
    const change = (previousTotal === null) ? 0 : total - previousTotal

    const grow = (change == 0 || previousTotal == null)
        ? '' : (change > 0)
            ? 'uk-icon-chevron-up' : 'uk-icon-chevron-down'

    const isPrimaryClass = (data.get('selected')) ?
        'uk-panel uk-panel-box-primary uk-panel-box' : 'uk-panel uk-panel-box'

    return (
        <div onClick={(e) => {
                if (e.target.className !== 'uk-icon-close uk-badge')
                    onSwitchEntry(data.get('id'))}}
            style={{'cursor': 'pointer', 'marginBottom': '5px'}}
            className={isPrimaryClass}>

            <div className='uk-grid'>
                <div className='uk-width-1-4'>
                    <span className='uk-text-primary uk-text-bold'>{data.get('date')}</span>
                </div>

                <div className='uk-width-1-4'>
                    <span className='uk-text-primary'>{amountToText(total)}</span>
                </div>

                <div className='uk-width-1-4'>
                    <div className={grow}></div>
                    <span className='uk-text'>
                        {amountToText(change == 0 ? null : Math.abs(change))}
                    </span>
                </div>

                <div className='uk-width-1-4'>
                    <div onClick={() =>
                        onDelEntry(data.get('id'))}
                        style={{'cursor': 'pointer', 'float': 'right'}} className='uk-icon-close uk-badge'></div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelEntry: (id) =>
            dispatch(actions.del_entry(id)),

        onSwitchEntry: (id) =>
            dispatch(actions.switch_entry(id))
    }
}

Entry.propTypes = {
    data: PropTypes.object.isRequired,
    total:PropTypes.number,
    previousTotal: PropTypes.number,
    onDelEntry: PropTypes.func.isRequired,
    onSwitchEntry: PropTypes.func.isRequired
}

Entry = connect(
    null,
    mapDispatchToProps
)(Entry)

export default Entry