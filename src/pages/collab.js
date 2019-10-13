// template page
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';



class collaborationPage extends Component {
  // const proj = getGroups(); 
  constructor(props) {
    super(props);
    this.state = { card: "", projects: [] }
    
    this.handleLike = this.handleLike.bind(this)
    this.handleDismiss = this.handleDismiss.bind(this)
  }

  componentDidMount() {
    // fetch('https://ideadate.azurewebsites.net/api/collaborator/getprojects')
    // .then(res => res.json())
    // .then((data) => {
    //   this.setState({ projects: data })
    // })
    // .catch(console.log)
    this.getGroups();
  }

  getGroups() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.addEventListener('load', () => {
      let projects = JSON.parse(xmlHttp.responseText);
      this.setState(
        {
        card: projects[0],
        projects: projects
      })
    })
    
    xmlHttp.open('GET', 'https://ideadate.azurewebsites.net/api/collaborator/getprojects', true);
    xmlHttp.send();
 
  }

  handleDismiss() {
    if (this.state.projects.length > 1){
      let nextProjects = this.state.projects.slice(1, this.state.projects.length);
      this.setState({card: this.state.projects[1],
      projects: nextProjects})
      console.log(this.state.card)
    } else {
      this.setState({card: null })
    }
  }

  handleLike() {
    if (this.state.projects.length > 1){
      let nextProjects = this.state.projects.slice(1, this.state.projects.length);
      this.setState({card: this.state.projects[1],
      projects: nextProjects})
      console.log(this.state.card)
    } else {
      this.setState({card: null })
    }
  } 

  render() {
    // if(this.state.projects === null) {
      // return (<div></div>);
    // } else {
      return (

      <center>
      <Card style={{ width: '30rem'}}>
      <Card.Img variant="top" src="https://picsum.photos/500/600" />
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>
          {this.state.card["name"]}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{this.state.card["founder"]}</ListGroupItem>
        <ListGroupItem>{this.state.card["description"]}</ListGroupItem>
        <ListGroupItem>{this.state.card["gitHubURL"]}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" onClick={this.handleDismiss}>Card Link</Card.Link>
        <Card.Link href="#" onClick={this.handleLike}>Another Link</Card.Link>
      </Card.Body>
    </Card>
    </center>
    );
      }
  // }

};

export default collaborationPage;
