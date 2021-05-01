import React,{memo} from 'react'
import Button from './Button'
type imageProps={
    height:number;
    width:number;
    rounded?:boolean;
    href:string;
    downloadHref?:string;
}
const Image = ({
    height,
    width,
    rounded=false,
href,
downloadHref
}:imageProps)=>{
    return(
<div>
<a href={`${downloadHref}?force="true"`} target="_blank" download>
    <button style={{zIndex:8,border:"none",background:'black',color:"white",position:"absolute",padding:'5px'}}>
    <svg height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M13 5v6h1.17L12 13.17 9.83 11H11V5h2m2-2H9v6H5l7 7 7-7h-4V3zm4 15H5v2h14v-2z"/></svg>
    </button>
    </a>
    <a href={downloadHref} target="_blank" download>
    <img src={href} style={{height:`${height}px`, width:`${width}px`, borderRadius:`${rounded ? 50 : 0}%`}}/>
    </a>

</div>)
}

export default memo(Image);