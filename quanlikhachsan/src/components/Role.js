import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Role(props) {

  console.log(props)
    let Cmp =props.Cmp.name
    console.log("props",props)
    const history =useNavigate();
   
  return (
    <div>
        <Cmp />
    </div>
  )
}

export default Role