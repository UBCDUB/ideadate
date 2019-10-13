// template page
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

async function getGroups() {
  try {
    let projects = await fetch('https://ideadate.azurewebsites.net/api/collaborator/getprojects');
    let projects_json = await projects.json();
    return projects_json
  }
  catch (error) {
    console.log(error);
  }
  // var xmlHttp = new XMLHttpRequest();
  // xmlHttp.open('GET', 'https://ideadate.azurewebsites.net/api/collaborator/getprojects', true);
  // xmlHttp.send(null);
  // // xmlHttp.responseText;
  // var projects;
  // xmlHttp.onloadend = function() {
  //   projects = xmlHttp.responseText;
  //   console.log(xmlHttp.responseText);
  // }
}

const templatePage = () => {
  const proj = getGroups(); 

  return (
      <center>
      <Card style={{ width: '30rem'}}>
      <Card.Img variant="top" src="https://picsum.photos/500/600" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {/* {proj[0]["name"]} */}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </center>
    );

};

export default templatePage;
