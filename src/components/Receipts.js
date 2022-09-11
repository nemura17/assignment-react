import React from 'react';
import PropTypes from 'prop-types';
import Expense from './Expense';
import { getTotalExpenses } from '../helpers/Helpers';

const Receipt = ({ addExpense, receipt: { expenses }, onChangeExpense }) => (
    <div className = 'receiptContainer'>
        <div className = 'header flex'>
            <div className = 'selections'>
                <select name = 'categories' defaultValue = {''}>
                    <option value = '' disabled = { true } > Select </option>
                    <option value = 'food'> Food </option>
                    <option value = 'houseware'> Houseware </option>
                    <option value = 'entertainment'> Entertainment </option>
                </select>
            </div> 
            <button className = 'button expenseButton' type = 'button' onClick = { addExpense }> Add expense </button>
        </div>
        { expenses.length !== 0 && 
            <div className = 'expensesContainer'>
                <div className = 'expenses'>
                    { expenses.map((expense, index)  => (
                        <Expense onChangeExpense = { onChangeExpense(index) } key = { index } />
                    )) }
                </div>
                <div className = 'flex totalPrice'>
                    <h3> Total </h3>
                    <h3 className = 'price'> { getTotalExpenses(expenses).toFixed(2) } &nbsp; € </h3>
                </div>
            </div>
        }
    </div>
)

Receipt.propTypes = {
    addExpense: PropTypes.func.isRequired,
    onChangeExpense: PropTypes.func.isRequired,
    Receipt: PropTypes.object,
    expenses: PropTypes.array 
};

export default Receipt;
