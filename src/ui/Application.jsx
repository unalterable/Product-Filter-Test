import React from 'react';
import purple from '@material-ui/core/colors/purple';
import Theme from './Theme.jsx';
import TopNav from './components/TopNav.jsx';
import ProductFilter from './components/ProductFilter.jsx';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryColour: purple,
    };
  }
  render() {
    return (
      <Theme primary={this.state.primaryColour}>
        <TopNav />
        <ProductFilter />
      </Theme>
    );
  }
}

export default Application;
