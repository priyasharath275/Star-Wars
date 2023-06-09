
import {useEffect,useState,useCallback} from 'react'
import axios from "axios";

const useFetchData = (url) => {
    const [data, setData] = useState(null);

  
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setData(data));
      }, [url]);
    
      return [data];


}

export default useFetchData;
