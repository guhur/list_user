import React from 'react'
import ReactDOM from 'react-dom'
import Users from './assets/users'
import User from './components/User'

console.log(Users)

let user = {}
let id = 0

const App = () => (
	<ul>
		<li key={id}>
			<User profile={user} />
		</li>
	</ul>
)


ReactDOM.render(<App />, document.getElementById("root"))
