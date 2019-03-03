import React, { useState, useEffect } from 'react';
import axios from 'axios';
import purple from '@material-ui/core/colors/purple';
import Theme from './Theme.jsx';
import TopNav from './components/TopNav.jsx';
import ProductFilter from './components/ProductFilter.jsx';

const primaryColour = purple;

const Application = () => {
  const [groupedProducts, setGroupedProducts] = useState();

  useEffect(() => {
    axios.get('/api/items').then(({ data: products }) => {
      setGroupedProducts(products.reduce((acc, { type, ...item }) => ({
        ...acc,
        [type]: (acc[type] || []).concat(item),
      }), {}));
    });
  }, []);

  return (
    <Theme primary={primaryColour}>
      <TopNav />
      { groupedProducts
        ? (<ProductFilter groupedProducts={groupedProducts} />)
        : (<div className="t-loading">Loading</div>)
      }
    </Theme>
  );
};

export default Application;
