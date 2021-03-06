import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import classes from './Products.css';


import ProductsHome from './ProductsHome/ProductsHome';

import Headphones from './ProdcutsContainer/Headphones';
import Computers from './ProdcutsContainer/Computers';
import TV from './ProdcutsContainer/TV';
import Smartphones from './ProdcutsContainer/Smartphones';


 class Products extends Component {
  render() {

    return (
      <section className={classes.Layout}>
              <div className={classes.Products}>                      
                        <Route exact path="/store" component={ProductsHome}></Route>
                        <Route path="/store/headphones" component={Headphones}></Route>
                        <Route path="/store/computers" component={Computers}></Route>
                        <Route path="/store/tv" component={TV}></Route>
                        <Route path="/store/smartphones" component={Smartphones}></Route>                                
            </div>
      </section>
    )
  }
}


export default Products;







