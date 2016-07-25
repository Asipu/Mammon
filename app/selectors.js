import {Map} from 'immutable'

export const findEntry = (entries, id) =>
    entries.find(entry => entry.get('id') === id)

export const sortEntries = (entries) =>
	entries.sort((a, b) => {
        const ax = a.get('date')
        const bx = b.get('date')
        if(ax === bx) return 0
        return -1? ax < bx : 1
    })

export const textToAmount = (txt) =>
	txt === '' || txt === null || parseFloat(txt) === NaN ? 0.0 : parseFloat(txt)

export const amountToText = (amount) =>
	(amount == null) ? '' : amount.toLocaleString()

export const getItems = (entry, type = 'accounts') =>
	!entry || entry.get(type).size == 0 ? null : entry.get(type)

export const getItemsTotal = (items) =>
	!items || items.size == 0 ? null :
		items.reduce((a, b) =>
	        Map({amount: parseFloat(a.get('amount')) + parseFloat(b.get('amount'))}),
	        Map({amount: 0.0})
	    ).get('amount')

export const getEntryTotal = (entry, entries) => {
	let passedCurrent = false
	let total = null

	for(let e of entries) {
		if(passedCurrent && total != null) break
		if(e === entry) passedCurrent = true
		if(passedCurrent)
			total = getItemsTotal(getItems(e))
	}

	return total
}

export const getPreviousEntryTotal = (entry, entries) => {
	let passedCurrent = false
	let total = null

	for(let e of entries) {
		if(passedCurrent && total != null) break
		if(passedCurrent)
			total = getItemsTotal(getItems(e))
		if(e === entry) passedCurrent = true
	}

	return total
}
