import React, { useContext, useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';


const AuthGoogle = ({ setGoogleUser }) => {


    const clientId = "1090827000425-j3321nn36f2vtanoml4vkiqmj8qtau4b.apps.googleusercontent.com";

    useEffect(() => {

        try {

            const start = () => {
                gapi.auth2.init({
                    clientId: clientId,
                })
            }
            gapi.load("client:auth2", start);

        } catch (error) {
            console.log(error)
        }
    }, []);


    const onSuccess = (response) => {
        setGoogleUser(response.profileObj)
    }

    const onFailure = (error) => {
        console.log(error);

    }


    return (

        <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
                <button className="redesStyle-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <img src="/assets/Google.png" alt="google" />
                </button>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
        />
    )
}

export default AuthGoogle




