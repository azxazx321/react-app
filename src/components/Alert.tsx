import React from 'react'
interface Props {
    text: string,
    isShow: boolean
}


const Alert = ({text, isShow}: Props) => {
  return (
    <div  className={"alert alert-primary alert-dismissible fade" + (isShow ? "show" : "")}>{text}</div>
  )
}

export default Alert