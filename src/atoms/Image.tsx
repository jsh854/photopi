import React,{memo} from 'react'
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
    <a href={downloadHref} target="_blank" download>
    <img src={href} style={{height:`${height}px`, width:`${width}px`, borderRadius:`${rounded ? 50 : 0}%`}}/>
    </a>
</div>)
}

export default memo(Image);