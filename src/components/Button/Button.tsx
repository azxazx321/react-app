import React, { Fragment } from 'react'
import styles from './Button.module.css'
interface Props {
    children: string,
    color?: 'primary' | 'secondary' | 'danger',
    onClick: () => void
}
const Button = ({children, color = 'primary', onClick}: Props) => {
  return (
    <Fragment>    
      <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
      <button className={[styles.btn,styles['btn-' + color]].join(' ')}>Button</button>
    </Fragment>
  )
}

export default Button