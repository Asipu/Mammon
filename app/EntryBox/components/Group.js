import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import {getItemsTotal, amountToText} from '../../selectors'
import GroupItem from './GroupItem'

let Group  = ({ entryId, type, items, onAddItem, onUpdateItem, onDelItem }) => {
    const groupItems = items.toArray().map(item =>
        <GroupItem
            id={item.get('id')}
            name={item.get('name')}
            amount={item.get('amount')}
            onUpdateItem={onUpdateItem}
            onDelItem={onDelItem}
            key={item.get('id')} />)

    const groupBlock = (type === 'accounts') ?
        <div className='uk-grid'>
            <div className='uk-width-1-2 uk-container-center'>
                {groupItems}
            </div>
        </div>
    :
        <div>{groupItems}</div>

    const chooseIcon = type => {
        switch(type) {
            case 'incomes' : return 'uk-icon-plus'
            case 'expenses' : return 'uk-icon-minus'
            default: return 'uk-icon-bank'
        }
    }

    return (
        <div>
            <div className='uk-grid'>
                <div className='uk-width-4-5'>
                    <div className={chooseIcon(type)}></div>
                    <span style={{'paddingLeft': '5px'}} className='uk-text-bold'>
                        {amountToText(getItemsTotal(items))}
                    </span>
                </div>

                <div className='uk-width-1-5'>
                    <div
                        onClick={() => onAddItem(entryId, type)}
                        style={{'float': 'right', 'cursor': 'pointer'}}
                        className='uk-icon-plus uk-badge'></div>
                </div>
            </div>

            <hr />
            {groupBlock}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (entryId, itemType) =>
            dispatch(actions.add_item(entryId, itemType)),

        onUpdateItem: (id, value, type) =>
            dispatch(actions.update_item(id, value, type)),

        onDelItem: (id) =>
            dispatch(actions.del_item(id))
    }
}

Group.propTypes = {
    entryId: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    items: PropTypes.object.isRequired,
    onAddItem: PropTypes.func.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
    onDelItem: PropTypes.func.isRequired
}

Group = connect(
    null,
    mapDispatchToProps
)(Group)

export default Group