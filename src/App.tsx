import Home from './pages/Home';
import  { SWRConfig } from 'swr'
import axios from 'axios';

function App() {

  const fetcher = (url:string)=>axios(url).then(res=>res.data);
  return (
    <>
     <SWRConfig value={{ fetcher }}>

<Home />
</SWRConfig>
</>
  );
}

export default App;
