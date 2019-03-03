import React, { useState }from 'react';
import capitalize from 'lodash/capitalize';
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

const baseProducts = [
  { type: 'vegetables', name: 'carrot' },
  { type: 'vegetables', name: 'cabbage' },
  { type: 'vegetables', name: 'parsnip' },
  { type: 'dairy', name: 'eggs' },
  { type: 'dairy', name: 'milk' },
  { type: 'dairy', name: 'yoghurt' },
  { type: 'dairy', name: 'cheese' },
  { type: 'meat', name: 'chicken' },
  { type: 'meat', name: 'ostrich' },
  { type: 'meat', name: 'beef' },
  { type: 'meat', name: 'donkey' },
  { type: 'meat', name: 'west african hyena' },
];

const groupedProducts = baseProducts.reduce((acc, { type, ...item }) => ({
  ...acc,
  [type]: (acc[type] || []).concat(item),
}), {});

const allProductTypes = Object.keys(groupedProducts);

const ProductFilter = ({ classes }) => {
  const [ selectedProductType, setSelectedProductType ] = useState('');

  return (
    <div className={classes.container}>

      <Paper className={classes.filterer}>
        <FormControl className={classes.formControl}>
          <InputLabel>Product Type</InputLabel>
          <Select value={selectedProductType} onChange={e => setSelectedProductType(e.target.value)} >
            {allProductTypes.map(productType => (
              <MenuItem value={productType} key={productType}>{capitalize(productType)}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>

      <Paper className={classes.itemsList}>
        { (selectedProductType ? [selectedProductType] : allProductTypes)
          .reduce((acc, productType) => ([...acc, ...groupedProducts[productType]]), [])
          .map(({ name }) => (
            <div key={name}>{capitalize(name)}</div>
          ))
        }
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ProductFilter);
