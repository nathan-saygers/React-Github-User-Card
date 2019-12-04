import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerList = props => {

  return (
    <div>
      {props.followerData.map( follower =>
        <FollowerCard 
          avatar={follower.avatar_url}
          userName={follower.login}
          githubLink={follower.html_url}
        />
      )}
    </div>
  )
}

export default FollowerList;