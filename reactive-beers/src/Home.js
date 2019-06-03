import React from 'react'
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default function Home(){
  return(
      <div className="Card">
      <Card>
        <CardImg src="https://static.vinepair.com/wp-content/uploads/2015/06/craft-beer-bar-header.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2"><NavLink to='/beers'>All Beers</NavLink></CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum cum sed neque natus beatae expedita sint similique sapiente!</CardText>
        </CardBody>
      </Card>
      <Card>
          <CardImg src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_350,q_50,w_623/v1/clients/spokane17/Beer_1_5b32b17e-a63c-4941-b0e0-0e58ab169350.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2"><NavLink to='/random-beer'>Random Beer</NavLink></CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti inventore commodi blanditiis ullam iuret.</CardText>
        </CardBody>
      </Card>
      <Card>
          <CardImg src="https://si.wsj.net/public/resources/images/NY-BN861_HAPPYH_G_20120321190854.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2"><NavLink to='/new-beer'>New Beer</NavLink></CardTitle>
          <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti inventore commodi blanditiis ullam iure.</CardText>
        </CardBody>
      </Card>
      </div>
  )
}

