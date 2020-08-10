import React from 'react'


function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1);
}


const User = ({profile}) => (
	<>
		<h1>{capitalize(profile.name.title)} {capitalize(profile.name.first)} {capitalize(profile.name.last)}</h1>
		<img src={profile.picture.thumbnail} alt="profile of a random user" />
	</>
)

export default User
