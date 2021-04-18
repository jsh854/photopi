import {useState,memo,useEffect} from 'react'
import './Home.css'

import axios from 'axios';
import useSWR from 'swr';
import Image from '../atoms/Image';
import FlexTemplate from '../templates/FlexTemplate';
import Card from '../molecules/Card';
import env from 'react-dotenv'

const Home = memo(()=>{
  const [newData,changeData]=useState<any[]>([]);
    const CLIENT_ID = "0Z-LBq4hNinGRglNGQpYef33VyodRl1K012Ai9dJd18";
    const URL = `https://api.unsplash.com/photos?page=1&per_page=30&client_id=${CLIENT_ID}`
    const fetcher = (url:string)=>axios(url).then(res=>res.data)
    const {data} = useSWR(URL,fetcher, {
        refreshInterval: 1000 * 360 *30, 
      });
    useEffect(()=>{
       changeData(data)
        },[data]) 
return(
<FlexTemplate>
{newData?.map(i=>(
    <Card>
    <Image href={i.urls.regular} height={300} width={300} downloadHref={i.links.download}/>
    </Card>
))}
</FlexTemplate>
);
})
export default Home;