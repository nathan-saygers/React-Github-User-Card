import React from 'react';
import styled from 'styled-components';

const FollowerCard = props => {

  return (
    <FollowerContainer>
      <FollowerImg src={props.avatar} alt="User Profile Picture"/>
      <h3>Username: {props.userName}</h3>
      <p>Github Link: {props.githubLink}</p>
    </FollowerContainer>
  )
}

export default FollowerCard;

const FollowerImg = styled.img`
  width: 5rem;
`

const FollowerContainer = styled.div`
  height: 10rem;
  width: 20rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: black solid 2px;
`