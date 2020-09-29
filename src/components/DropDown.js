import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Label } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  
  formControl: {
    marginTop: 0,
    marginLeft: 80,
    marginBottom: 0,
    margin: '0 auto',
    minWidth: 200,
    
  },
}));

export default function DropDown() {
  const classes = useStyles();
  const [AllCountriesData, setAllCountriesData] = useState([{}]);
  
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://cors-anywhere.herokuapp.com/" +'https://api.thevirustracker.com/free-api?countryTotals=ALL');

      let data = await response.json();
      setAllCountriesData(Object.values(data.countryitems[0]));
     
    }
    getData();
  }, [])
  const [age, setAge] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <select name="cars" id="cars">
            {AllCountriesData.map((country, ind) => {
                return <option key={'${country.title}-${ind}'}>{country.title}</option>
            })}
        </select>
       {/* <h1>List of countries</h1>
        <ul>
            {AllCountriesData.map((country, ind) => {
                return <li key={'${country.title}-${ind}'}>{country.title}</li>
            })}   
        </ul>  */}
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select a Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {AllCountriesData.map((country, ind) => {
                return <MenuItem key={'${country.title}-${ind}'}>{country.title}</MenuItem>
            })}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}



