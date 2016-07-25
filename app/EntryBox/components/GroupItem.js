import React, { PropTypes } from 'react'
import EditableInput from './EditableInput'

const GroupItem = ({ id, name, amount, onUpdateItem, onDelItem }) => (
    <div
        style={{'marginBottom': '5px', 'cursor': 'pointer'}}
        className='uk-grid uk-grid-collapse'>

        <div className='uk-width-6-10'>
            <span className='uk-text'>
                <EditableInput
                    type='name'
                    id={id}
                    value={name}
                    onChange={onUpdateItem} />
            </span>
        </div>

        <div className='uk-width-3-10'>
            <span className='uk-text'>
                <EditableInput
                    type='amount'
                    id={id}
                    value={amount}
                    onChange={onUpdateItem} />
            </span>
        </div>

        <div className='uk-width-1-10'>
            <div
                onMouseDown={() => onDelItem(id)}
                style={{'marginTop': '3px', 'float': 'right', 'cursor': 'pointer'}}
                className='uk-icon-close uk-badge'>
            </div>
        </div>
    </div>
)

GroupItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    amount: PropTypes.number,
    onUpdateItem: PropTypes.func.isRequired,
    onDelItem: PropTypes.func.isRequired
}

export default GroupItem