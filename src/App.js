import React, { useState } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'

const App = () => {
  const [stateAuth, setStateAuth] = useState()
  const response = (res) => {
    setStateAuth(res)
  }
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'
      style={{ height: "100vh" }}
    >
      {!stateAuth ?
        <Login response={response} />
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src={stateAuth.profileObj.imageUrl} />
          <h5>{stateAuth.profileObj.name}</h5>
          <p>{stateAuth.profileObj.email}</p>
        <Logout response={response} />
        </div>
      }
    </div>
  )
}

export default App