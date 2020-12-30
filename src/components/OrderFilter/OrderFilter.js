import React, {useState} from 'react';
import {connect} from 'react-redux';
import './OrderFilter.css';
import {clearOrderBy, ORDER_BY_ASC, ORDER_BY_DESC, orderByAsc, orderByDesc} from "../../actions";

const OrderFilter = ({dispatch}) => {

    let removeSelected;
    const [selected, setSelected] = useState('');

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if(value === ORDER_BY_ASC) {
            dispatch(orderByAsc());
        } else {
            dispatch(orderByDesc());
        }
    };

    const removeFilter = (e) => {

        const buttons = document.getElementsByName('orderByPrice');

        buttons.forEach(el => {
            el.checked = false;
        });

        dispatch(clearOrderBy());
        setSelected('');
    };

    if(selected) {
        removeSelected  =  <span onClick={removeFilter} className="text-remove-selected text-right">Remove filter</span>
    }



    return (
            <div className="card">
                <div className="card-header">
                    <h3>Price {removeSelected} </h3>
                </div>
                    <div className="form-control">
                        <input
                            value={ORDER_BY_ASC}
                            type="radio"
                            onChange={handleRadioChange}
                           name="orderByPrice" className="custom-radio-btn"/>
                   
                        <label className="custom-radio-btn"> Low to high </label>
                        </div>
                    <div className="form-control">
                        <input
                            value={ORDER_BY_DESC}
                            onChange={handleRadioChange}
                            type="radio" name="orderByPrice" className="custom-radio-btn"/>
        
                        <label className="custom-radio-btn"> High to low </label>     
                    </div>
              
            </div>
    );
};

export default connect()(OrderFilter);