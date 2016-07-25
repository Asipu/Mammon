import React, { PropTypes } from 'react'

import Group from './Group'
import EditableInput from './EditableInput'

let EntryOverview = ({ entry, onChangeEntryDate }) => {
    return (entry) ? (
        <div className='uk-width-medium-6-10'>
            <div className='uk-block'>
                <div className='uk-panel uk-panel-space uk-panel-header uk-panel-box-primary'>
                    <h3 className='uk-panel-title'>
                        <EditableInput
                            type='date'
                            id={entry.get('id')}
                            value={entry.get('date')}
                            onChange={onChangeEntryDate} />
                    </h3>

                    <Group entryId={entry.get('id')} type='accounts' items={entry.get('accounts')} />
                    <br/>

                    <div className='uk-grid'>
                        <div className='uk-width-1-2'>
                            <Group entryId={entry.get('id')} type='incomes' items={entry.get('incomes')} />
                        </div>

                        <div className='uk-width-1-2'>
                            <Group entryId={entry.get('id')} type='expenses' items={entry.get('expenses')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  ) : (<div></div>)
}

EntryOverview.propTypes = {
    entry: PropTypes.object,
    onChangeEntryDate: PropTypes.func.isRequired
}

export default EntryOverview