import React, { Component } from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import star_wars_logo from '../images/star_wars_logo.png';
import axios from 'axios';

class Home extends Component {
	state = { planets: '' };

	componentDidMount() {
		axios.get('/api/planets/')
			.then(res => {
				this.setState({ planets: res.data.data })
			})
			.catch( error => {
				console.log(error.response);
			})
	}

	displayPlanets() {
		let { planet } = this.state;
	}

  render() {
    return (
    	<Segment basic inverted>
	    	<Segment basic inverted textAlign='center'>
	    		<Image centered size='small' src={star_wars_logo} alt='Star Wars Logo' />
	    	</Segment>
	    	<Segment basic inverted>
	      	<Header as='h1' textAlign='center'>Planets</Header>
	      	<displayPlanets planets={this.state.planets} />
	    	</Segment>
    	</Segment>
    );
  }
}


export default Home;
