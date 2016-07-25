import * as c from './constants'

export const add_entry = () => ({
	type: c.ADD_ENTRY
})

export const del_entry = (id) => ({
	type: c.DEL_ENTRY,
	id
})

export const switch_entry = (id) => ({
	type: c.SWITCH_ENTRY,
	id
})

export const switch_mode = (mode) => ({
	type: c.SWITCH_MODE,
	mode
})

export const update_item = (id, value, valueType) => ({
	type: c.UPDATE_ITEM,
	id,
	value,
	valueType
})

export const update_entry = (id, date) => ({
	type: c.UPDATE_ENTRY,
	id,
	date
})

export const add_item = (entryId, itemType) => ({
	type: c.ADD_ITEM,
	entryId,
	itemType
})

export const del_item = (id) => ({
	type: c.DEL_ITEM,
	id
})