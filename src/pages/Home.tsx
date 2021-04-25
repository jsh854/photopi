import {useState,memo,useEffect,useCallback} from 'react'
import './Home.css'
import useSWR from 'swr';
import Image from '../atoms/Image';
import FlexTemplate from '../templates/FlexTemplate';
import Card from '../molecules/Card';
import Loader from '../atoms/Loader';
import NavBar from '../atoms/NavBar';


const Home = memo(()=>{
  const [newData,changeData]=useState<any>([]);
  const [urlFetch,changeURLFetch]=useState<boolean>(false);
  const [searchString,ChangeSearchString]=useState<string>();
    const CLIENT_ID = process.env.REACT_APP_API_KEY;
    const URL = `https://api.unsplash.com/photos?page=1&per_page=30&client_id=${CLIENT_ID}`
    const SearchUrl=`https://api.unsplash.com/search/photos?page=1&per_page=90&query=${searchString}&client_id=${CLIENT_ID}`

    //fetch a certain url based on the requirements
    const {data} = useSWR(urlFetch?SearchUrl:URL,{
        refreshInterval: 1000 * 360 *30, 
      });

//callback  from the child to get the search string 
      const clbck=useCallback((searchString:string)=>{
        changeURLFetch(true);
        ChangeSearchString(searchString);
      },[searchString])

      //use effect to check the data
    useEffect(()=>{
       changeData(data);
        },[data,changeURLFetch]) 

//show a loader if there is no data available
    if(!data){
          return (<>
           <NavBar dataToGet={clbck}/>
          <Loader/></>)
        }

return(
  <>
 <NavBar  dataToGet={clbck}/>
<FlexTemplate>
{data && urlFetch ?newData?.results.map((i: { urls: { regular: string; }; links: { download: string | undefined; }; })=>(
    <Card>
    <Image href={i.urls.regular} height={300} width={300} downloadHref={i.links.download}/>
    </Card>
)):newData?.map((i: { urls: { regular: string; }; links: { download: string | undefined; }; })=>(
  <Card>
  <Image href={i.urls.regular} height={300} width={300} downloadHref={i.links.download}/>
  </Card>))}
</FlexTemplate>
</>
);
})
export default memo(Home);