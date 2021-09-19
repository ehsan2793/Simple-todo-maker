import React,{useState} from 'react';
import {data} from "./data";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
const App = () => {
    const [state, setState] = useState(data);

    const addNewdata = (input) => {
        const newData = {
            task: input,
            id:Math.random()*1000,
            completed: false,
        }
        setState([...state,newData])

    }

    const toggleCompleted = (id) => {
        setState(state.map(obj => {
            if(obj.id === id) {
                return {
                    ...obj,
                    completed: !obj.completed
                }
            }else {return obj}
        }))

    }

    const removeCompleted = () => {
        setState(state.filter(obj => !obj.completed))

    }

    return (
        <div>
            <TodoForm removeCompleted={removeCompleted} addNewdata={addNewdata}/>
            {state.map(todos => (
                <Todos key={Math.random() *1000} todos={todos} toggleCompleted={toggleCompleted}/>
            ))}

        </div>
    );
};

export default App;
