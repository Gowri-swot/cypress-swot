import React from 'react';
import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from "../../containers/ProductList/ProductList";
import './Home.css';

const Home = () => {
    return (
        <React.Fragment>
            <div className="row home-card">
                <FilterBar/>
                <ProductList/>
            </div>

        </React.Fragment>
    );
};


export default Home;
