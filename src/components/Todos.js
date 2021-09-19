import React from 'react';
import { CardBody, Card } from 'reactstrap';

const Todos = ({todos,toggleCompleted}) => {
    const handleClick = () => {
        toggleCompleted(todos.id)

    }
    return (
        <div>


                <Card onClick={handleClick} style={{background:todos.completed? "lightcoral":"lightblue"}}>
                    <CardBody  style={{textDecoration: todos.completed? 'line-through':'none' }}>
                        {todos.task}

                    </CardBody>
                </Card>

        </div>
    );
};

export default Todos;
