import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Input, InputGroup, InputGroupText } from 'reactstrap'
import './BudgetCard.css'


export const BudgetCard = ({name}) => {
  return (
    <Card body className='col-sm-8' >
        <CardBody>
            <div className='row '>
                <div className='w-75'>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>month additions + carryover - expenses</CardSubtitle>
                    <InputGroup>
                        <InputGroupText>+</InputGroupText>
                        <Input placeholder='0.00'/>
                        <InputGroupText>+</InputGroupText>
                        <Input placeholder='0.00' readOnly={true}/>
                        <InputGroupText>-</InputGroupText>
                        <Input placeholder='0.00' readOnly={true}/>
                        <InputGroupText>=</InputGroupText>
                    </InputGroup>
                </div>
                <div className='w-25'>
                    <Card className='h-100'>
                        <CardText className='card-text-final-output m-auto'>0.00</CardText>
                    </Card>
                </div>
            </div>
        </CardBody>
    </Card>
  )
}
