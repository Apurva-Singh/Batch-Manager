import { useEffect, useState } from 'react';

interface FormData<T= any>{
    initialValue: T
}
const useForm=({})=>{
    
    const [data, setData]= useState({email:"", password:""});
    const [touched, setTouched]= useState({email: false, password: false});
    const [submitting, setSubmitting]= useState(false);
}


export default useForm;