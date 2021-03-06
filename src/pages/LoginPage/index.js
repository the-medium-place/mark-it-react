import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import "./style.css"
import API from "../../utils/API"
import { toast } from "bulma-toast";

export default function LoginPage(props) {
  const history = useHistory()
  const [loginState, setLoginState] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = event => {
    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.login(loginState).then(res => {
      console.log(res.data)
      if (res.data.user) {
        props.submitHandler(res.data.user)
        history.push(`/user/${res.data.user.id}`)
      } else {
        // let user know what went wrong
        toast({
          message: res.data,
          type: "is-danger",
          position: "center",
          duration: 4000,
          dismissible: true
        });
        props.submitHandler(false)
      }
    }).catch((err) => console.log(err));
  }

  return (
    <div className="LoginPage">
      <section className="hero is-bold">
        <div className="hero-body color-change-3x">
          <div className="container">
            <h1 className="title">
              Login to your Account
            </h1>

          </div>
        </div>
      </section>
      <div className="section loginSection">
        <div className="container">
          <div className="box formbox">
            <form>
              <div className="field">
                <div className="control">
                  <label className="label">User Name:</label>
                  <input className="input" type="text" onChange={handleInputChange} name="username" value={loginState.name} placeholder="username" />

                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="label">Password:</label>
                  <input className="input" type="password" onChange={handleInputChange} name="password" value={loginState.password} placeholder="password" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-info" onClick={handleFormSubmit}>
                    Login
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


