import React, { useState } from 'react'

interface Props {
    children: string,
    maxChar?: number
}

const Expandable = ({children, maxChar = 1000 }: Props) => {
//     const [textLength, setTextLength] = useState(maxChar)

//     const changeTextLength = (length: number) => {
//         setTextLength(length)
//     }



//   return (
//     <div>{children.substring(0, textLength)}
//         {textLength > maxChar ?
//         <button onClick={() => changeTextLength(maxChar)}>Less</button>
//         :<button onClick={() => changeTextLength(children.length)}>More</button>}
//     </div>

 // )

        const [isExpandable, setIsShowExpandable] = useState(false)

        if(children.length <= maxChar) return <p>{children}</p>

        const text = isExpandable ? children : children.substring(0, maxChar)

         return <p>{text}...<button onClick={() => setIsShowExpandable(!isExpandable)}>{isExpandable ? 'less' : 'more'} </button></p>

         //return isExpandable ?  <p>{text}...<button onClick={() => setIsShowExpandable(!isExpandable)}>Less</button></p> :  <p>{text} <button onClick={() => setIsShowExpandable(!isExpandable)}>More</button></p>
}

export default Expandable