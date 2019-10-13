// import React, { Components } from 'react';

// class postCall extends Components {
//   componentDidMount() {
//     fetch('https://ideadate.azurewebsites.net/api/', {
//       method: 'POST',
//       body: JSON.stringify(values, null, 2)
//     })
//   }
// }

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));



export default (async function showResults(values) {
  // const url = {'https://ideadate.azurewebsites.net/api/' + domain}
    fetch('https://ideadate.azurewebsites.net/api/project/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values, null, 2),
    })
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});