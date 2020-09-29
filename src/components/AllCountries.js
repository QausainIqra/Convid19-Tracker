import React, { useEffect } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Title } from '@material-ui/icons';
import DropDown from './DropDown'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 100,

  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  Title:{
    color: '#3f51b5',
    textTransform: 'uppercase'
    
  }
}));

export default function AllCountries() {
  const classes = useStyles();
  const [AllCountriesData, setAllCountriesData] = useState([{}]);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://cors-anywhere.herokuapp.com/" +'https://api.thevirustracker.com/free-api?countryTotals=ALL');

      let data = await response.json();
      // console.log(data.countryitems);
      // console.log(data.countryitems[0])
      setAllCountriesData(Object.values(data.countryitems[0]));
      // for(var i=1;i<183;i++){
      //   setAllCountriesData(data.countryitems[0]["i"]);
      // }
      console.log(AllCountriesData);
      console.log(AllCountriesData[0]);
      

    }
    getData();
  }, [])
  return (
    <div className={classes.root}>
      <DropDown />
      <Grid container spacing={3} className={classes.root}>
      {Object.keys(AllCountriesData[0]).map((key, ind)=> {
        return (
          <Grid item xs={12} sm={4} key={ind}>
            <Paper className={classes.paper} elevation={3}>
              <h3 className={classes.Title}>{key.replace(/_/g,' ').toUpperCase()}</h3>
              <h3>{AllCountriesData[0][key]}</h3>
            </Paper>
          </Grid>  
        )
      })}


      </Grid>
    </div>
  );
}
