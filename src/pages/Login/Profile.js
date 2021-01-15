import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';

import './Profile.scss';

const Profile = ({user}) => {

    //console.log(user);

    return (<>
    <div className="profile-wrapper">
        <h1 className="phead">Hello, {user.username}!</h1>
        <div style={{padding: '0px 50px'}}>
            <p>Checkout the <i>Create Plan Page</i> to generate your custom fitness plan.</p>
            
        </div>
        <div className="amp-signout-wrapper">
        <AmplifySignOut />
        </div>
    </div>
    </>);
}

export default Profile;