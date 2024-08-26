import React, { FormEvent, useRef } from 'react'
import { FieldValue, FieldValues, useForm } from 'react-hook-form';

interface FormData {
    name: string;
    age: number;
}

const Form = () => {
 
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>()
    const  onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // const person = {
    //     name: '',
    //     age: 0
    // }


    // const handleSubmit = (e: FormEvent) =>{
    //     e.preventDefault(); 
    //     if(nameRef.current!==null){
    //         person.name = nameRef.current.value
    //         console.log(nameRef.current.value)
    // }
    // if(ageRef.current!==null){
    //         person.age = parseInt(ageRef.current.value)
    //         console.log(person)
    // }
    // }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3" >
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register('name', {required: true, minLength: 3}) } id="name" type="text" className="form-control" />
                {errors.name?.type === 'required' && <p className='text-danger'>The name field is required</p>}
                {errors.name?.type === 'minLength' && <p className='text-danger'>The name must be at least 3 characters</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age')} type="number" id="age" className="form-control" />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}

export default Form