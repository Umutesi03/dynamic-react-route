import React from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { useState } from 'react';
import {zodResolver} from '@hookform/resolvers/zod';

//create form validation schema

const formSchema = z.object({
    username : z.string().min(1,"username is required"),
    email: z.string().email("Email is not valid"),
    age: z.number().int().min(18,"Age must be above 18")
});

// build form components

function SimpleForm(){
 const [submittedData , setSubmittedData] = useState(null);


    const form = useForm({
        resolver : zodResolver(formSchema)
    });



function onSubmit(values){
    console.log(values);
    setSubmittedData(values);
    alert("Form submitted successfully");
}
    return(
        <div>
        <form onSubmit ={form.handleSubmit(onSubmit)}>
            <div>
            <label>User name</label>
                <input type ="text" {...form.register("username")}/>
                {form.formState.errors.username && (
            <p>
                {form.formState.errors.username.message}
                </p>)}
            </div>

            <div>
            <label>Email</label>
                <input type ="email" {...form.register("email")}/>
                {form.formState.errors.email && (
            <p>{form.formState.errors.email.message}</p>
                )}
            </div>
            <div>
                <label>your age</label>
                <input type="number" {...form.register("age",{valueAsNumber:true})}/>
                {form.formState.errors.age&&(
                    <p>{form.formState.errors.age.message}</p>
                )}
            </div>
            <button type ="submit">Submit</button>
        </form>
        {submittedData &&(
            <p>Hello {submittedData.username} your email is {submittedData.email} your age is {submittedData.age}</p>
        )}
        
        </div>
        
    );
}
export default SimpleForm;


