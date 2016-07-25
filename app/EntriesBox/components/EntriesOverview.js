import React, { PropTypes } from 'react'

import * as c from '../../constants'
import Entry from './Entry'
import {getEntryTotal, getPreviousEntryTotal} from '../../selectors'

const EntriesOverview = ({ entries, total, onAddEntry, onSwitchMode }) => {
    return (
        <div className='uk-width-medium-4-10'>
            <div className='uk-block'>
                <div className='uk-panel uk-panel-space uk-panel-header'>

                    <div
                        onClick={onAddEntry}
                        style={{cursor: 'pointer'}}
                        className='uk-panel-badge uk-badge uk-icon-plus'></div>

                    <h3 className='uk-panel-title'>
                        <span className='uk-text-bold'>€ {total}</span>
                    </h3>

                    <div>
                        <ul style={{marginBottom: '5px'}} className='uk-tab' data-uk-tab>
                            <li className='uk-active'><a href=''>Entries</a></li>
                            <li>
                                <a onClick={() => onSwitchMode(c.MODE_REPORT_DATA)} href=''>Report</a>
                            </li>
                        </ul>

                        {entries.toArray().map(entry =>
                            <Entry
                                data={entry}
                                key={entry.get('id')}
                                total={getEntryTotal(entry, entries)}
                                previousTotal={getPreviousEntryTotal(entry, entries)} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

EntriesOverview.propTypes = {
    entries: PropTypes.object.isRequired,
    total: PropTypes.string.isRequired,
    onAddEntry: PropTypes.func.isRequired,
    onSwitchMode: PropTypes.func.isRequired
}

export default EntriesOverview