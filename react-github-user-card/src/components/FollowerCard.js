import React from 'react';

const FollowerCard = props => {

  return (
    <div>
      <img src={props.avatar} alt="User Profile Picture"/>
      <h1>Username: {props.userName}</h1>
      <p>Github Link: {props.githubLink}</p>
    </div>
  )
}

export default FollowerCard;