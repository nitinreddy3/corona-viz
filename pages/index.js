import React from 'react';
import useFetch from '../utils/useFetch';
import Link from '../src/Link';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout pageTitle="COVID-19 Global">
      <Link href="/covidGlobal" color="secondary">
        COVID-19 Global DAta
      </Link>
    </Layout>
  )
}

export default Index;