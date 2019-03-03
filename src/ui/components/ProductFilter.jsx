import React, { useState }from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = () => ({
  container: {
    display: 'flex',
  },
  formControl: {
    width: '140px',
  },
  filterer: {
    flex: '25%',
    margin: '20px',
    padding: '20px',
  },
  itemsList: {
    flex: '75%',
    margin: '20px',
    padding: '20px',
  },
});

const ProductFilter = ({ classes }) => {
  const [ productType, setProductType ] = useState('');


  return (
    <div className={classes.container}>

      <Paper className={classes.filterer}>
        <FormControl className={classes.formControl}>
          <InputLabel>Product Type</InputLabel>
          <Select value={productType} onChange={e => setProductType(e.target.value)} >
            <MenuItem value={'vegetables'}>Vegetables</MenuItem>
            <MenuItem value={'dairy'}>Dairy</MenuItem>
            <MenuItem value={'meat'}>Meat</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      <Paper className={classes.itemsList}>
        List
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ProductFilter);
