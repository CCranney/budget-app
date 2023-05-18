import React from 'react'
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Collapse, Input, InputGroup, InputGroupText } from 'reactstrap'
import './BudgetCard.css'
import { useState } from 'react'

export const BudgetCard = ({name}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Card className='col-sm-5' >
            <CardHeader>{name}</CardHeader>
            <CardBody>
                <div className='row '>
                    <div className='w-50'>
                        <InputGroup>
                            <InputGroupText className='card-input-symbol'>+</InputGroupText>
                            <Input placeholder='0.00'/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText className='card-input-symbol'>+</InputGroupText>
                            <Input placeholder='0.00' readOnly={true}/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroupText className='card-input-symbol'>-</InputGroupText>
                            <Input placeholder='0.00' readOnly={true}/>
                        </InputGroup>
                    </div>
                    <div className='w-50'>
                        <Card className='h-50'>
                            <CardText className='card-text-final-output m-auto'>0.00</CardText>
                        </Card>
                        <Button className='m-auto' onClick={toggle}>Goals</Button>
                    </div>
                </div>
                <Collapse isOpen={isOpen}>
                    <InputGroup>
                        <Input placeholder='placeholder for goals' readOnly/>
                    </InputGroup>
                </Collapse>
            </CardBody>
        </Card>
    )
}