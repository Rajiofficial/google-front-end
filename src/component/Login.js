import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script'
import axios from 'axios'

const Login = (props) => {
    const clientId = "259846178726-jjdsbnhcbcvj6dndh9fdhofodku9srkh.apps.googleusercontent.com";
    useEffect(() => {
        gapi.load("client:auth2", () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        console.log(response)
        const email=response.wt.cu
        console.log(email)


        props.response(response)
        const datas=()=>{
            axios.post("http://localhost:3001/register",{mail_id:email}).then((data)=>{
                console.log(data)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        datas()

        
    }
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login