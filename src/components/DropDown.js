import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
      const response = await fetch("https://cors-anywhere.herokuapp.com/" +'https://api.thevirustracker.com/free-api?countryTotals=ALL');

      let data = await response.json();
      setAllCountriesData(Object.values(data.countryitems[0]));
     
    }
    getData();
  }, [])
  const [countryName, setcountryName] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setcountryName(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Select a Country</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={countryName}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {AllCountriesData.map((country, ind) => {
                return <MenuItem value={country.title} key={ind}>{country.title}</MenuItem>
            })}
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}



