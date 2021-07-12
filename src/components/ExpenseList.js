import ExpenseItem from "./ExpenseItem"
import './ExpenseList.css'
import Card from "./Card"

function ExpenseList(props) {
    return <Card className='expenses'>
        <ExpenseItem
            title={props.ExpenseList[0].title}
            amount={props.ExpenseList[0].amount}
            date={props.ExpenseList[0].date} />
        <ExpenseItem
            title={props.ExpenseList[1].title}
            amount={props.ExpenseList[1].amount}
            date={props.ExpenseList[1].date} />
        <ExpenseItem
            title={props.ExpenseList[2].title}
            amount={props.ExpenseList[2].amount}
            date={props.ExpenseList[2].date} />
        <ExpenseItem
            title={props.ExpenseList[3].title}
            amount={props.ExpenseList[3].amount}
            date={props.ExpenseList[3].date} />
    </Card>

}

export default ExpenseList