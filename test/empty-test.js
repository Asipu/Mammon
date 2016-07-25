import assert from 'assert'

import mentat from '../app/reducer-mentat'
import * as c from '../app/constants'

describe('get state test', () => {

	it('initial state', () => {
		var state = mentat()
		assert.equal(state.selectedEntry, 0)
		assert.equal(state.mode, c.MODE_ENTRIES)
	})

})