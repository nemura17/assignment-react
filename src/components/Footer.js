import React from 'react';
import PropTypes from 'prop-types';


const Panel = ({ addReceipt, total }) => (
    <div className = 'footer flex'>
        <div className = 'total'>
            <span> <strong> Total </strong> </span>
            <span> € { total.toFixed(2) }</span>
        </div>
        <button value = 'add receipt' className = 'button receiptButton' onClick = { addReceipt }> Add Receipt </button>
    </div>
)

Panel.propTypes = {
    addReceipt: PropTypes.func.isRequired,
    total: PropTypes.number
};

export default Panel;
