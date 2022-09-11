import React, { Component } from 'react';
import Footer from './components/Footer';
import Receipt from './components/Receipts';
import { getTotalExpenses } from './helpers/Helpers';
import './App.css';

const getTotal = receipts =>
    Object.values(receipts).reduce(
        (sum, { expenses }) => sum + getTotalExpenses(expenses),
        0,
    )

class App extends Component {
    state = {
        receipts: { [`receipt-${Date.now()}`]: { expenses: [] } },
    }

    getTotal = () => {
        const { receipts } = this.state;
        return getTotal(receipts);
    }

    addReceipt = () => {
        this.setState(prevState => ({
            ...prevState, receipts: {
                ...prevState.receipts,
                [`receipt-${Date.now()}`]: { expenses: [] }
            },
        }))
    }

    handleChangeExpense = receiptId => index => (prop, value) => {
        this.setState(({ receipts }) => ({
            receipts: {
                ...receipts, [receiptId]: {
                    expenses: receipts[receiptId].expenses.map( (expense, i) => i === index ? { ...expense, [prop]: value } : expense ),
                }
            },
        }))
    }

    addExpense = receiptId => () => {
        this.setState(({ receipts }) => ({
            receipts: {
                ...receipts, [receiptId]: {
                    expenses: [ ...receipts[receiptId].expenses, { desc: '', price: '' } ],
                }
            },
        }))
    }

    render() {
        const { receipts } = this.state;
        const total = this.getTotal();
        return (
            <div>
                <div className = 'container'>
                    <div>
                        { Object.entries(receipts).map(([id, receipt]) => (
                            <Receipt onChangeExpense = { this.handleChangeExpense(id) } receipt = { receipt } key = { id } addExpense = { this.addExpense(id) } />
                        )) }
                    </div>
                </div>
                <Footer addReceipt = { this.addReceipt } total = { total } />
            </div>
        )
    }
}

export default App

