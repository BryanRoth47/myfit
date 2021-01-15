import React from 'react';
// import './App.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { useHistory } from "react-router-dom";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
import { useLocation } from 'react-router-dom'
import './login.scss';
import CustomNavBar from 'components/navbar';
import Profile from './Profile';

Amplify.configure(awsconfig);

const AuthStateApp = () => {
    const history = useHistory();
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState({ first: true });
    const currentRoute = useLocation().pathname;

    const isLoginPage = currentRoute === '/login';

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(prevState => {
              //console.log(prevState, nextAuthState);
              if (prevState !== AuthState.SignedIn && prevState !== undefined && nextAuthState === AuthState.SignedIn) {
                history.push('/create-plan'); // user signs in
                //history.push('/login'); // user signs in
              } else if (prevState === AuthState.SignedIn && nextAuthState !== AuthState.SignedIn) {
                history.push('/home'); // user signs out
              }
              return nextAuthState;
            });
            setUser(prevState => {
              return authData;
            })
        });
    }, [history]);

    

  return <div className="auth-wrapper">
          
          {authState === AuthState.SignedIn && user ? (
              isLoginPage &&
              <>
                <CustomNavBar loggedIn />
                <Profile user={user} />
              </>
            ) : (
              isLoginPage && 
              <>
                <CustomNavBar />
                <AmplifyAuthenticator />
              </>
            )}
        </div>
}

export default AuthStateApp;

/*
  If we want to just collect emails and not phone numbers, use this instead:
  <AmplifyAuthenticator >
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" }
        ]}
      />
  </AmplifyAuthenticator>


*/
