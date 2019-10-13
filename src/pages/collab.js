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
      <Card.Body>
        <Card.Title>Project:</Card.Title>
        <Card.Text>
          {this.state.card["name"]}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{"Founder: " + this.state.card["founder"]}</ListGroupItem>
        <ListGroupItem>{"Description: " + this.state.card["description"]}</ListGroupItem>
        <a href={this.state.card["gitHubURL"]}><ListGroupItem>{"GitHub Link: " + this.state.card["gitHubURL"]}</ListGroupItem></a>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" onClick={this.handleDismiss}>Dismiss</Card.Link>
        <Card.Link href="#" onClick={this.handleLike}>Like</Card.Link>
      </Card.Body>
    </Card>
    </center>
    );
      }
  // }

};

export default collaborationPage;
