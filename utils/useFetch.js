import React, { useState, useEffect } from 'react';
import { COVID_API } from '../constants';

export default function useFetch(endpoint = '') {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${COVID_API}/${endpoint}`)
      const data = await response.json()
      setData(data);
    }
    fetchData()
  }, [])
  return data;
}