import React from 'react';
import PropTypes from 'prop-types';

const Expense = ({ onChangeExpense }) => (
    <div className = 'expense'>
        <div className = 'grid'>
            <input type = 'text' placeholder = 'Expense name' onChange = { e  => onChangeExpense('desc', e.target.value) } />
            <input type = 'number' placeholder = '€0.00'  min = '0.00' step = '0.01' default = '0' onChange = { e  => onChangeExpense('price', +e.target.value) } />
        </div>
    </div>
)

Expense.propTypes = {
    onChangeExpense: PropTypes.func.isRequired
};

export default Expense;
