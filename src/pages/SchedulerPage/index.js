import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import "./style.css"
import API from "../../utils/API"

// import SomeComponent from '../../components/SomeComponent';

export default function SchedulerPage() {
    // const [playerState,setPlayerState]= useState({
    //     name:'',
    //     team:''
    // })

    // useEffect(()=>{
    //     API.getAllPlayers().then(res=>{
    //         console.log(res.data)
    //         setPlayersState(res.data)
    //         setFilteredPlayersState(res.data)
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // },[])

    // const params = useParams(); // for retrieving id from .../path/:id apis
    // const history = useHistory();

    // const handleDeleteBtnClick = event=>{
    //     event.preventDefault();
    //     API.deletePlayerById(params.id).then(res=>{
    //         history.push('/')
    //     })
    // }

    // const handleFormSubmit = event=>{
    // OR
    // const handleInputChange = event=>{
    //     event.preventDefault();
    //     API.createPlayer(playerState).then(newPlayer=>{
    //         console.log(newPlayer)
    //         setPlayerState({
    //             name:'',
    //             team:''
    //         })
    //         history.push("/")
    //     })
    // }

    return (
        <div className="SchedulerPage">
            <h1>SchedulerPage</h1>
            <h3>Navbar goes here</h3>
            <h3>last minute thought...zip code entry here?</h3>
            <h3>Market List Dropdown selector goes here</h3>
            <h3>Create pop-up/one-time event checkbox goes here</h3>
            <h3>FORM with <br></br>
                ....Market Name input,<br></br>
                ....Address input,<br></br>
                ....City input,<br></br>
                ....State input,<br></br>
                ....Date input,<br></br>
                ....Start Time input,<br></br>
                ....End Time input,<br></br>
                ....Schedule it! button<br></br>
                goes here
            </h3>
            <Link to="/user-landing" >temporary link to UserLandingPage</Link>
        </div>
    )
}