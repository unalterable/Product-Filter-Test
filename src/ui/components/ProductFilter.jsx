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


const ProductFilter = ({ classes, groupedProducts }) => {
  const [ selectedProductType, setSelectedProductType ] = useState('');
  const allProductTypes = Object.keys(groupedProducts);

  return (
    <div className={classes.container}>

      <Paper className={`${classes.filterer} t-filterer`}>
        <FormControl className={classes.formControl}>
          <InputLabel>Product Type</InputLabel>
          <Select
            value={selectedProductType}
            onChange={e => setSelectedProductType(e.target.value)}
            className="t-productTypeDropdown"
          >
            {allProductTypes.map(productType => (
              <MenuItem
                key={productType}
                className={`t-${productType}Option`}
                value={productType}
              >
                {capitalize(productType)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>

      <Paper className={`${classes.itemsList} t-itemsList`}>
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
