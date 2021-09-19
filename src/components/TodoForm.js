import React, {useState} from 'react';
import {Button, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoForm = ({addNewdata,removeCompleted}) => {
   const [value,setValue] =useState('')
    const [error, setError] = useState('');


const handleChange = (e) => {
    setError('')
       setValue(e.target.value);
}
const handleAdd = ( ) => {

       if (value) {
           addNewdata(value)
           setValue('')

       }else {
           setError('Please enter something')
       }

}



const handleDelete = () => {
    removeCompleted()
}

return (
        <div>


            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">Add New Todo :</Label>
                <Input type="text" name="todo" id="examplePassword" placeholder="Enter new todo" value={value} onChange={handleChange}/>
                {error ? <p style={{color: 'lightcoral'}}>{error}</p> :null}
            </FormGroup>
            <br/>
            <Button onClick={handleAdd} style={{margin: '10px'}} color={'success'}>Submit</Button>
            <Button onClick={handleDelete} color={'info'}>delete</Button>


        </div>
    );
};

export default TodoForm;
