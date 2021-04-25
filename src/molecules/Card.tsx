import { memo, ReactNode } from 'react'
type cardProps={
    height?:number,
    width?:number,
    background?:string,
    children:ReactNode
}
const Card = ({
    height=270,
    width=190,
    children
}:cardProps)=>{
    return(
        <div style={{height:`${height}px`,width:`${width}px`}} className="card--div">
           {children}
        </div>
    )
}
export default memo(Card);