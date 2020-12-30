import React from 'react';
import {connect} from 'react-redux';
import {brands} from "../../data/brands";
import {addBrandToFilter, removeBrandFromFilter} from "../../actions";


const BrandFilter = (props) => {

    const {dispatch, brandItemsCount} = props;
    const handleSelectBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked;

        if(e.target.checked) {
            dispatch(addBrandToFilter(name));
        } else {
            dispatch(removeBrandFromFilter(name));
        }
    };


        return (
            <div className="card mb-3">
                <div className="card-header">
                    <h3>Brands</h3>
                </div>
                    {brands.map(brand => (
                        <div className="form-control">
                           <input type="checkbox"
                                name={brand}
                                className="custom-checkbox_input" onInput={handleSelectBox}/>
                             <label className="custom-checkbox text-capitalize" style={{padding:'8px'}}> {brand} ({brandItemsCount[brand]})</label>
                        </div>
                    ))}
                </div>
          
        );

};

const mapStateToProps = (state) => {

    const brandItemsCount = {};

    state.shop.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount
    }

};

export default connect(mapStateToProps)(BrandFilter);