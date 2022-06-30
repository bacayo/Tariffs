import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
      console.log('response data: ', responseData);
      console.log('====================');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return {data, loading, error};
};

export default useFetch;
