import React from 'react'

function UserData(props) {
  return (
    <div>
      <h3>{props.isLoaded ? "Loaded" : "Loading"}</h3>
    </div>
  )
}

export default UserData