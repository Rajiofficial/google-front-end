import React, { useEffect, useState } from 'react'
import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios'

const Login = () => {
    const clientId = "259846178726-jjdsbnhcbcvj6dndh9fdhofodku9srkh.apps.googleusercontent.com";
    const [login ,setlogin]=useState(true)
    const [logout ,setlogout]=useState(false)

    const loginsuccess=(response)=>{
        console.log(response)
        setlogin(false)
        setlogout(true)
    }
    
    const logoutsuccess=()=>{
        console.log("logout success")
        setlogin(true)
        setlogout(false)
    }

    const failure=(res)=>{
        console.log("log in failed",res)
    }

    // useEffect(() => {
    //     GoogleOAuthProvider.load("client:auth2", () => {
    //         gapi.auth2.init({ clientId: clientId })
    //     })
    // }, [])

    // const responseGoogle = (response) => {
    //     console.log(response)
    //     const email=response.wt.cu
    //     console.log(email)


    //     props.response(response)
    //     const datas=()=>{
    //         axios.post("http://localhost:3001/register",{mail_id:email}).then((data)=>{
    //             console.log(data)
    //         })
    //         .catch((error)=>{
    //             console.log(error)
    //         })
    //     }
    //     datas()

        
    // }
    return (
        <div>
            {login?(<GoogleOAuthProvider
                clientId={clientId}
                buttonText="Login"
                onSuccess={loginsuccess}
                onFailure={failure}
                cookiePolicy={'single_host_origin'}
            />):null}
         
        </div>
    )

}

export default Login