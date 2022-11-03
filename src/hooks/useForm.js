import React, { useRef, useState } from "react";

export const useForm = () => {
    const formRef = useRef(null)
    const [data, setData] = useState({})
    const [wasSubmitted, setWasSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {}
        const formData = new FormData(formRef.current)
        const entries = formData.entries()
        for(const entry of entries){
            data[entry[0]]=entry[1]
        }
        // if(validation) 
        setData(data)
        setWasSubmitted(true)
    }

    return { formRef, handleSubmit, data, wasSubmitted }
}
