import React, { useState, useEffect } from 'react'
import "./style.css"
import { useParams, useHistory } from "react-router-dom"


export default function DetailsPage() {
    const params = useParams(); // for retrieving id from .../path/:id apis
    const history = useHistory(); // to save page visited, can return back
    const [atBatState, setAtBatState] = useState({
        result: "none",
        RBIS: 0
    })

   

    

    const handleInputChange = event => {
        const { name, value } = event.target;
        setAtBatState({
            ...atBatState,
            [name]: value
        })
    }
    

    

    return (
        <div className="DetailsPage">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">One</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Two</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Three</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Four</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>

                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <p class="title">One</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>
                <div class="tile is-parent is-2">
                    <article class="tile is-child box">
                        <p class="title">Two</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>
                <div class="tile is-parent is-3">
                    <article class="tile is-child box">
                        <p class="title">Three</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Four</p>
                        <p class="subtitle">Subtitle</p>
                    </article>
                </div>
            </div>
            {/* <div class="tile is-ancestor">
                <div class="tile is-vertical is-9">
                    <div class="tile">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">Five</p>
                                <p class="subtitle">Subtitle</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-8 is-vertical">
                            <div class="tile">
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                        <p class="title">Six</p>
                                        <p class="subtitle">Subtitle</p>
                                    </article>
                                </div>
                                <div class="tile is-parent">
                                    <article class="tile is-child box">
                                        <p class="title">Seven</p>
                                        <p class="subtitle">Subtitle</p>
                                    </article>
                                </div>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Eight</p>
                                    <p class="subtitle">Subtitle</p>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="tile">
                        <div class="tile is-8 is-parent">
                            <article class="tile is-child box">
                                <p class="title">Nine</p>
                                <p class="subtitle">Subtitle</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">Ten</p>
                                <p class="subtitle">Subtitle</p>
                                <div class="content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <div class="content">
                            <p class="title">Eleven</p>
                            <p class="subtitle">Subtitle</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Twelve</p>
                        <p class="subtitle">Subtitle</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent is-6">
                    <article class="tile is-child box">
                        <p class="title">Thirteen</p>
                        <p class="subtitle">Subtitle</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                        </div>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <p class="title">Fourteen</p>
                        <p class="subtitle">Subtitle</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut.</p>
                        </div>
                    </article>
                </div>
            </div> */}
        </div>
    )
}
