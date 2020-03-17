import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import fetch from 'isomorphic-unfetch';
import Link from '../src/Link';
import Layout from '../components/Layout';
import { COVID_API } from '../constants';
import { map } from 'lodash'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    height: 500,
  },
});


function createData(countryRegion, iso2, confirmed, recovered, deaths) {
  return {
    name: countryRegion,
    code: <img src={`https://www.countryflags.io/${iso2}/flat/64.png`} />,
    id: iso2,
    confirmed,
    recovered,
    deaths,
  };
}

const Index = props => {
  const { data } = props;
  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'confirmed', label: 'Confirmed', minWidth: 170
    },
    {
      id: 'recovered', label: 'Recovered', minWidth: 170
    },
    {
      id: 'deaths', label: 'Deaths', minWidth: 170
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const classes = useStyles()
  return (
    <Layout pageTitle="COVID-19 Global">
      <Link href="/covidGlobal" color="secondary">
        COVID-19 Global Data
      </Link>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch(`${COVID_API}/confirmed`);
  const data = await res.json();

  return {
    data: map(data, item => {
      const { countryRegion, iso2, confirmed, recovered, deaths } = item;
      return createData(countryRegion, iso2, confirmed, recovered, deaths)
    })
  };
};
export default Index;