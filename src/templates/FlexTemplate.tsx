import {memo, ReactNode} from 'react'
import './FlexTemplate.css';
type templateProps={
    children : ReactNode 
}
const FlexTemplate = memo(({children}:templateProps)=>{
    return(
        <div className="mainDiv">
            {children}
        </div>
    )

})

export default FlexTemplate;