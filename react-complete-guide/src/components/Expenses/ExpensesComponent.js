import React from 'react';
import './ExpensesComponent.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';


const ExpensesComponent = (props) => {

    return (<Card className='expenses'>
        <div>
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
        </div>
    </Card>
    )
}

export default ExpensesComponent; 