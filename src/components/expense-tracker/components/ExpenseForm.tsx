import categories  from '../categories'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// interface FormData {
//     id: number;
//     description: string;
//     amount: number;
//     category: string;
// }

interface Props {
   onSubmit: (data: ExpenseFormData) => void; 
}
const schema = z.object({
    description: z.string().min(3, {message: 'Description should be at 3 characters'}).max(50),
    amount: z.number({invalid_type_error:'Amount is required'}).min(0.01).max(5000),
    category: z.enum(categories, {
        errorMap: () => ({
            message: 'category is required'
        })
    })
})
type ExpenseFormData = z.infer<typeof schema>

const ExpenseForm = ({onSubmit}: Props) => {
    const {register, handleSubmit,reset, formState: {errors}} = useForm<ExpenseFormData>({ resolver: zodResolver(schema)})
  return (
    <form onSubmit={handleSubmit(data => {onSubmit(data); reset()})}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} type="text" className="form-control" id="description" />
            </div>
                {errors.description && <p className='text-danger'>{errors.description.message}</p> }
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', {valueAsNumber: true})} type="number" className="form-control" id="amount"/>
            </div>
            {errors.amount && <p>{errors.amount.message}</p> }

            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} className="form-select" id="category">
                    <option value=""></option>
                 {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
            {errors.category && <p className='text-danger'>{errors.categories.message}</p> }

            <button className="btn btn-primary" type='submit' >Submit</button>
        </form>
  )
}

export default ExpenseForm