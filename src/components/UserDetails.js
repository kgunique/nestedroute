import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userId} = useParams()
  return <div>
      
      <h1>Details about user {userId}</h1>
      </div>
  ;
};

export default UserDetails;
