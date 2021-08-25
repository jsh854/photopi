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
        <div className="navBar--a">
        <h1>Photo-Pie</h1>
        <a href="https://www.linkedin.com/in/junaid-shah-ba2910a9/">Reach out to the creator</a>
        </div>
    
    <div className="navbar--search">
        <input type="text" placeholder="Search" onChange={captureData} style={{paddingLeft:10}}/>
        <Button text="Search" onclick={()=>dataToGet(data)}/>
    </div>
    </div>
)
}

export default memo(NavBar);