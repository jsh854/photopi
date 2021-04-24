import {useState} from 'react';

import Button from './Button';
type childProps={
dataToGet:Function;
goHome:Function;
}
const NavBar = ({dataToGet,goHome}:childProps) =>{
    const [data,changeData]=useState<string>();
    const captureData=(e: React.FormEvent<HTMLInputElement>)=>{  
        changeData(e.currentTarget.value);
     }

return(
    <div className="navBar--nav">

        <h1 className="navBar--a" onClick={()=>goHome()}>Photo-Pie</h1>
    <div className="navbar--search">
        <input type="text" placeholder="Search" onChange={captureData}/>
        <Button text="Search" onclick={()=>dataToGet(data)}/>
    </div>
    </div>
)
}

export default NavBar;