import React, { Component } from 'react';
import { ProductConsumer } from '../../../context';
import Product from '../../../components/Product/Product';
import classes from './ProductsList.css';


class ProductsList extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <section className={classes.List}>
                <ProductConsumer>
                    { val => {

                        const { searchedValue, products } = val;


                        {/*LIST OF PRODUCTS FOR EACH TYPE*/}
                        let temProducts = [];

                        products.forEach(item => {
                            if(item.type === this.props.type) {
                                const singleItem = {...item};
                                temProducts = [...temProducts, singleItem]
                            }
                        });


                        {/*THE SAME LIST FILTERED*/}
                        let searchedProducts = [...temProducts];

                        if( searchedValue !== "") {
                            searchedProducts = searchedProducts.filter(item => {
                                return item.brand
                                        .toLowerCase()
                                        .search(searchedValue.toLowerCase()) !== -1;
                            })
                        

                           if(searchedProducts.length > 0) {
                                return searchedProducts.map(item => {
                                    return <Product 
                                                key={item.id}
                                                product={item}/>
                                })
                           } else {
                               return <div>Sorry, no results found</div>
                           }
                            


                        } else {
                            return temProducts.map(item => {
                                return <Product 
                                            key={item.id}
                                            product={item}/>
                            })
                        }
                    }}
                </ProductConsumer>              
          </section>
        )
    }
}


export default ProductsList;