import React from 'react';

const User = props => {

  return (
    <div>
      <img src={props.userData.avatar_url} alt="User Profile Picture"/>
      <h1>Username: {props.userData.login}</h1>
      <p>User Bio: {props.userData.bio}</p>
      <p>Github Link: {props.userData.html_url}</p>
    </div>
  )
}

export default User;