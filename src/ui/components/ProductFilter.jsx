import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = () => ({
  container: {
    display: 'flex',
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
  return (
    <div className={classes.container}>
      <Paper className={classes.filterer}>
        Filter
      </Paper>
      <Paper className={classes.itemsList}>
        List
      </Paper>
    </div>
  );
};

export default withStyles(styles)(ProductFilter);
