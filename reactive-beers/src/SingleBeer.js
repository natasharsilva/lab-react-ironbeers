import React from 'react'
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap'
import axios from 'axios';

class SingleBeer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: null
    }
  }
  render(){
    if(!this.state.beer)
      return <div>Loading...</div>
    return (
      <div>
        <h2>Beer Info</h2>
        {console.log(this.state.beer)}
        <div key={this.state.beer._id}>
        <Card className='beerCard'>
        <div>
        <CardImg src={this.state.beer.image_url} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle tag="h4">{this.state.beer.name} {this.state.beer.attenuation_level}</CardTitle>
          <CardText>
            <strong>{this.state.beer.tagline}</strong>
            {this.state.beer.first_brewed}
            {this.state.beer.description} 
          </CardText>
          <small><strong>Created by:</strong> {this.state.beer.contributed_by}</small><br />
        </CardBody>
      </Card>
      </div>
      </div>
    )
  }
  componentDidMount() {
    let beerId = this.props.match.params.beerId
    axios.get(`https://ironbeerapi.herokuapp.com/beers/single/${beerId}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          beer: response.data
        })
      })
  }
}

export default SingleBeer;