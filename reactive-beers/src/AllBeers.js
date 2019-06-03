import React from 'react'
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap'
import { Link } from "react-router-dom";
import axios from 'axios'

class AllBeers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: null
    }
  }
  render(){
    if(!this.state.beers)
    return <div>Loading...</div>
    return (
      <div>
        <h2>All Beers</h2>
        {this.state.beers.map(beer => <div key={beer._id}>
        <Card className='beerCard'>
        <div>
        <CardImg src={beer.image_url} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle tag="h4">{beer.name}</CardTitle>
          <CardText>{beer.tagline}</CardText>
          <small><strong>Created by:</strong> {beer.contributed_by}</small><br />
          <Link to={"/beers/"+beer._id}>Check the beer details</Link>
        </CardBody>
      </Card>
      </div>)}
      </div>
    )
  }
  componentDidMount() {
    axios.get('https://ironbeerapi.herokuapp.com/beers/all')
      .then(response => {
        this.setState({
          beers: response.data
        })
      })
  }
}

export default AllBeers;
