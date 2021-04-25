import { memo } from "react";

type buttonProps={
    width?:number;
    height?:number;
    rounded?:boolean;
    textcolor?:string;
	backgroundcolor?:string;
    text:string;
    onclick?:()=>void;
}

const Button = (
    {width = 130,
        height = 50,
        rounded = true,  
        textcolor = 'white',
		backgroundcolor='black',
        text,
		onclick
	}:buttonProps)=>{
    return(<div>
        <button 
        style={{height:`${height}px`,
        width:`${width}px`,
       backgroundColor:backgroundcolor,
        color:textcolor, 
		border:'1px solid grey' , 
        borderRadius : `${rounded ? 5 : 0}px`,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        
		outline:'none',
        cursor:'pointer'}}
		onClick={onclick}
		>
            {text}
        </button>
    </div>)

}

export default memo(Button);