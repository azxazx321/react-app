import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import {BsFillCalendarFill } from "react-icons/bs"
import './App.css'

import Message from "./Message";
import Like from "./components/Like/Like";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Expandable from "./components/Expandable";
import Form from "./components/Form";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import { set } from "react-hook-form";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";


function App() {
  const [expenses, setExpenses] = useState([
    { id:1,description:'1', amount: 10,category: 'a'},
    {id: 2,description:'2',amount: 20,category: 'b'}]
  )
  const [selectedCategory, setSelectedcategory] = useState('')


  const visibleExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses
  // const onSelectCategory = (category) => {
  //    setSelectedcategory(category);
  // }
  
  

  return <div>
    
    {/* <ExpenseTracker/> */}
    <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
    <div className="mb-3">
    <ExpenseFilter onSelectCategory={(category) => setSelectedcategory(category)} />

    </div>
    <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter(expense => expense.id !== id))}/>
  </div>
}

export default App;