import {Map, List} from 'immutable'
import * as c from './constants'

let nextId = 100
let nextItemId = 200

const createItem = (id, name, amount, index) =>
    Map({id, name, amount, index})

const createItems = (items) =>
    List(items)

const createEntry = (id, date, accounts = [], incomes = [], expenses = []) =>
    Map({id, date, accounts, incomes, expenses, selected: false})

const createEntries = (entries) =>
    List(entries)

const entries = (state, action) => {
    if(typeof state === 'undefined')
        return initialState

    switch (action.type) {
        case c.ADD_ENTRY:
            return state.push(createEntry(nextId++, new Date().toISOString().slice(0, 10), List(), List(), List()))

        case c.DEL_ENTRY:
            return state.filter(entry => entry.get('id') !== action.id)

        case c.SWITCH_ENTRY:
            return state.map(item =>
                item.update('selected', i => item.get('id') === action.id)
            )

        case c.UPDATE_ENTRY:
            return state.map(entry =>
                entry.get('id') !== action.id ?
                    entry : entry.update('date', date => action.date)
            )

        case c.UPDATE_ITEM:
            const updateItems = (items, action) =>
                (items) =>
                    items.map(item =>
                        (item.get('id') !== action.id)
                            ? item : item.update(action.valueType, () => action.value)
                    )

            return state.map(entry =>
                entry
                    .update('accounts', updateItems(entry.get('accounts'), action))
                    .update('incomes', updateItems(entry.get('incomes'), action))
                    .update('expenses', updateItems(entry.get('expenses'), action))
            )

        case c.ADD_ITEM:
            const addItem = (entry, itemType) =>
                entry.update(itemType, (items) => items.push(Map({id:nextItemId++, name:'', amount:0})))

            return state.map(entry =>
                entry.get('id') !== action.entryId ?
                    entry : addItem(entry, action.itemType)
            )

        case c.DEL_ITEM:
            const delItems = (items, action) =>
                (items) =>
                    items.filter(item => item.get('id') !== action.id)

            return state.map(entry =>
                entry
                    .update('accounts', delItems(entry.get('accounts'), action))
                    .update('incomes', delItems(entry.get('incomes'), action))
                    .update('expenses', delItems(entry.get('expenses'), action))
            )

        default:
            return state
    }
}

const initialState = createEntries([
    createEntry(1, '2016-01-18',
        createItems([
            createItem(1, 'BOI', 31323.23, 1),
            createItem(2, 'PBZ', 17331.21, 2)
        ]),
        createItems([
            createItem(3, 'Burning Games Ltd', 4230.40, 1),
            createItem(4, 'BAML', 2300.00, 2)
        ]),
        createItems([
            createItem(5, 'Household', 2500.00, 1),
            createItem(6, 'Trip', 830.32, 2)
        ])
    ),
    createEntry(2, '2016-07-02',
        createItems([
            createItem(7, 'BOI', 4323.23, 1),
            createItem(8, 'PBZ', 3631.21, 2)
        ]),
        createItems([
            createItem(9, 'Burning Games Ltd', 2300.00, 1),
            createItem(10, 'BAML', 4660.40, 2)
        ]),
        createItems([
            createItem(11, 'Household', 2770.00, 1),
            createItem(12, 'Trip', 230.32, 2)
        ])
    ),
    createEntry(3, '2015-12-28',
        createItems([
            createItem(13, 'BOI', 21322.77, 1),
            createItem(14, 'PBZ', 7321.21, 2)
        ]),
        createItems([
            createItem(15, 'Burning Games Ltd', 1300.00, 1),
            createItem(16, 'BAML', 5230.40, 2)
        ]),
        createItems([
            createItem(17, 'Household', 2110.00, 1),
            createItem(18, 'Trip', 830.32, 2)
        ])
    )
])

export default entries