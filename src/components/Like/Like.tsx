import { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import styles from './Like.module.css'

interface Props {
  onClick: () => void
}

const Like = ({onClick} : Props) => {
  const [status, setStatus] = useState(false)

  return (
    <div  onClick={()=> {setStatus(!status); onClick()}}>
      <AiFillHeart className={status ? styles.like : styles.notLike} size={20}/> 

    </div>
  )
}



export default Like
