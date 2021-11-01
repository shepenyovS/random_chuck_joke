import React from 'react'
import classes from "./Result.module.css"
import norrisImg from "../../additional/img/norris.png"
function Result({randomJoke}) {
    return (
        <div className={classes.result_wrapper}>
            <img src={norrisImg} alt="" />
            <div className={classes.answer}>{randomJoke}</div>
           
        </div>
    )
}

export default Result
