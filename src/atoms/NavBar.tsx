import {useState,memo} from 'react';

import Button from './Button';
type childProps={
dataToGet:Function;

}
const NavBar = ({dataToGet}:childProps) =>{
    const [data,changeData]=useState<string>();
    const captureData=(e: React.FormEvent<HTMLInputElement>)=>{  
        changeData(e.currentTarget.value);
     }

return(
    <div className="navBar--nav">

        <h1 className="navBar--a">Photo-Pie</h1>
    <div className="navbar--search">
        <input type="text" placeholder="Search" onChange={captureData} style={{paddingLeft:10}}/>
        <Button text="Search" onclick={()=>dataToGet(data)}/>
    </div>
    </div>
)
}

export default memo(NavBar);