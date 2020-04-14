import React from 'react';
import '../App.css';
import {Card, Row, Col} from 'reactstrap';

const Todos =(props)=>{
    const toggleStyle = props.toDoTask.completed ? 'completed' : 'nomral'
    // console.log(toggleStyle)
     return(
    <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
     <Card body className="cardControl" >
         <p className={toggleStyle} onClick={() => props.toggleChange(props.toDoTask)}>
             {props.toDoTask.item}</p>

     </Card>
     </Col>
     </Row>
   
     )
}

export default Todos;