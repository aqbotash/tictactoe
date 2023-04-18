import React from 'react'
import {useState} from 'react'
import './style.css'

function Square({value, onSquareClick}) {
  return (
    <>
    <button className ="bold-button" onClick = {onSquareClick}>{value}</button>
    </>
  )
}

export default Square