import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import Link from '../src/Link';
import Layout from '../components/Layout';
import { COVID_API } from '../constants';
import { chain } from 'lodash'
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Index = props => {
  const { linechartData, pieChartData } = props;

  const classes = useStyles()


  return (
    <Layout pageTitle="COVID-19 Global">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <LineChart data={linechartData} colors={["#eb860c", "#e63509", "#0be63b"]} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <PieChart data={pieChartData} colors={["#eb860c", "#e63509", "#0be63b"]} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch(`${COVID_API}/daily`);
  const data = await res.json();

  const totalResponse = await fetch(COVID_API);
  const totalData = await totalResponse.json();

  return {
    linechartData: [{
      name: "Confirmed",
      data: chain(data).map(item => ({ [item.reportDate]: item.totalConfirmed })).reduce((result, item) => {
        let key = Object.keys(item)[0]; //first property: a, b, c
        result[key] = item[key];
        return result;
      }, {}).value()
    },
    {
      name: "Deaths",
      data: chain(data).map(item => ({ [item.reportDate]: item.deaths.total })).reduce((result, item) => {
        let key = Object.keys(item)[0]; //first property: a, b, c
        result[key] = item[key];
        return result;
      }, {}).value()
    },
    {
      name: "Recovered",
      data: chain(data).map(item => ({ [item.reportDate]: item.recovered.total })).reduce((result, item) => {
        let key = Object.keys(item)[0]; //first property: a, b, c
        result[key] = item[key];
        return result;
      }, {}).value()
    }],
    pieChartData: [
      ["Confirmed", totalData.confirmed.value],
      ["Deaths", totalData.deaths.value],
      ["Recovered", totalData.recovered.value],
    ]
  };
};
export default Index;