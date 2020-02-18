import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components';

const FollowerList = props => {

  return (
    <FollowerListContainer>
      {props.followerData.map( follower =>
        <FollowerCard 
          avatar={follower.avatar_url}
          userName={follower.login}
          githubLink={follower.html_url}
        />
      )}
    </FollowerListContainer>
  )
}

export default FollowerList;

const FollowerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 40rem;
  border: gray 2px solid;
`