import { Fragment, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form"

interface FormData {
    id: number;
    description: string;
    amount: number;
    category: string;
}


const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState(
       [ {
        id:'1',
        description:'1',
        amount: 10,
        category: 'a'
    },{
        id: 2,
        description:'2',
        amount: 20,
        category: 'v'
    },
    ]
    )
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>()

    const handleClick = (e: MouseEvent) => {
        //e.preventDefault()
    }

    const onSubmit = (data: FormData) => {
        console.log(data)
        const newItem = {...data, id:data.description}
        setExpenses([...expenses, newItem])
    }
  return (
    <Fragment>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description', {required: true})} type="text" className="form-control" id="description" />
            </div>
                {errors.description?.type ==='required' && <p>This field is required</p> }
            <div className="mb-3">
                <label htmlFor="amout" className="form-label">Amount</label>
                <input {...register('amount', {required: true, min: 0})} type="number" className="form-control" id="amount"/>
                {errors.amount?.type ==='required' && <p>This field is required</p> }
                {errors.amount?.type === "min" && <p>The amount must be greater than or equal to 0</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register("category", {required: true})} className="form-select" id="category">
                <option value="1">a</option>
                <option value="2">b</option>
                <option value="3">c</option>
                </select>
            </div>
            <button className="btn btn-primary" type='submit' >Submit</button>
        </form>
        <select name="category"  >
            <option value="1">a</option>
        </select>
        <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>                       
                        {/* {expenses.map((expense) => <th scope="col">{Object.keys(expense)}</th>)} */}
                    </tr>
                </thead>
                <tbody>
                   {expenses.map((row) => (
                    <tr>
                        <td>{row.description}</td>
                        <td>{row.amount}</td>
                        <td>{row.category}</td>
                        <td><button className="btn btn-danger">DELETE</button></td>
                    </tr>
                   ))
                }
                <tr>
                    <td>Total</td>
                    <td>{expenses.reduce((acc,expense) => acc + expense.amount,0)}</td>
                </tr>
                </tbody>
            </table>
            
    </Fragment>
 
  )
}

export default ExpenseTracker