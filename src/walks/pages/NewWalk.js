import React from 'react'

import Input from '../../shared/components/FormElements/Input'
import './NewWalk.css'

const NewWalk = () => {
    return <form className="place-form">
        <Input 
            element="input" 
            type="text" 
            label="Title" 
            validators={[]} 
            errorText="Please enter a valid title." /> 
    </form>
}

export default NewWalk
