import React from 'react';
// import FacebookLogin from '@greatsumini/react-facebook-login';

const AuthFacebook = ({ setFacebookUser }) => {

    const clientId = "905651887327176"


    return (
        <>
            <button className="redesStyle-item">
                <img src="/assets/Facebook.png" alt="facebook" />
            </button>

            {/* <FacebookLogin
                appId={clientId}
                autoLoad={false}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={(response) => {
                    setFacebookUser(response)
                }}
                render={renderProps => (
                    <button className="redesStyle-item" onClick={renderProps.onClick}>
                        <img src="/assets/Facebook.png" alt="facebook" />
                    </button>
                )}
            /> */}
        </>
    )
}

export default AuthFacebook
