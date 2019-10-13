// template page
import React from 'react';

const templatePage = () => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', 'https://ideadate.azurewebsites.net/api/user', true);
  xmlHttp.send(null);
  return xmlHttp.responseText;

  return (
    <div>
      <h2>Collaborate with others</h2>
      <b>Hello World</b>
    </div>
  );
};

export default templatePage;
