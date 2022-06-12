import React, { useCallback, useEffect, useState } from 'react'
import Paginate from './Paginate';

const url = 'https://api.github.com/users/Asensio0227/following?per_page=100'

const Fetchfollowers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [followers, setFollowers] = useState([]);

  const getFollowers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFollowers(Paginate(data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [followers]);

  useEffect(() => {
    getFollowers();
  }, []);

  return { isLoading, followers };
}

export default Fetchfollowers
