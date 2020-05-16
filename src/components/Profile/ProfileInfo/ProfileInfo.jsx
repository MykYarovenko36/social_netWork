import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
<div> 
  <div className={s.profileImg}>    
      <img src='data:image/jpeg;base64,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' alt="avatar" />
    </div>
    <div className={s.descriptionBlock}>
     ava + description
     </div>
    </div>  
  )
}

export default ProfileInfo;