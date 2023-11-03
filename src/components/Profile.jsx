import React from 'react'
import {useAuth0} from '@auth0/auth0-react';
import {Dna} from 'react-loader-spinner';

const Profile = () => { 
  const {user , isAuthenticated , isLoading} = useAuth0();  
  
 
 
  return (
    
     isAuthenticated && (
      <div className="profilewala">
         <img src={user.picture} alt={user.name}
        
         style={{
            borderRadius:'50%',
            width:'2.7rem',
            position:'relative',
            top:'0rem',
            marginLeft:'0.9rem',
            border:'1.7px solid orange'
         }}
         
         
         />
        {/* <h2>{user.name}</h2>*/}
        <p
           className="maill"
        style={{

            fontSize:'1rem',
            opacity:'0.5',
            position:'absolute',
            left:'0rem',
            display:'none'
        }}
        >{user.nickname}</p>
      </div>
    )

  )
    
}

export default Profile
