import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Reload(props) {
    let Cmp =props.Cmp
    const history =useNavigate();
    useEffect(() => {
        if (window.onload) {
            history("/user");
            window.location.reload(true);
        }
      },[]);
  return (
    <Cmp/>
  )
}

export default Reload