import React from 'react'
import ReactDOM from 'react-dom'
import {act} from 'react-dom/test-utils'
import User from './User'

let container = null

beforeEach(() => {
	container = document.createElement('div')
	document.body.appendChild(container)
})

afterEach(() => {
	document.body.removeChild(container)
	container = null
})


it('can add a terminal e for female user', () => {
	const profile = {
		"gender": "female",
		"name": {
			"title": "Mademoiselle",
			"first": "Zoé",
			"last": "Laurent"
		},
		"picture": {"thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"},
		"dob": {
			"date": "1956-10-04T03:32:36.596Z",
		}
	}

	act(() => {
		ReactDOM.render(<User profile={profile} />, container)
	})

	const birth = container.querySelector("p")
	expect(birth.textContent[2]).toBe("e")

})
