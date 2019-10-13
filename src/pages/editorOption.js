import React, { Components } from "react";
import { Provider } from "react-redux";
import store from "./store";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MaterialUiForm from './MaterialUiForm';
import showProj from "./showResults_proj";
import showUser from "./showResults_user";
import UserForm from "./userForm";
import ProjForm from './projForm';
import NoteForm from './noteForm';

const userCreate = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{ padding: 15}}>
          <h2>Create your account!</h2>
          <UserForm onSubmit={showUser} />
          {/* <Values form="simple" /> */}
        </div>
      </MuiThemeProvider>
  </Provider>
  )
};

// class userCreate extends Components {
//   render() {
//     return (
//       <Provider store={store}>
//       <div style={{ padding: 15 }}>
//         <h2>Simple Form</h2>
//         <UserForm onSubmit={showResults} />
//         {/* <Values form="simple" /> */}
//       </div>
//     </Provider>
//     )
//   }
// };
// class classprojCreate extends Components {
//   render() {
//     return (
//       <Provider store={store}>
//         <div style={{ padding: 15 }}>
//           <h2>Simple Form</h2>
//           <ProjForm onSubmit={showResults} />
//           {/* <Values form="simple" /> */}
//         </div>
//       </Provider>
//     )
//   }
// };

const projCreate = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={{ padding: 15}}>
          <h2>Create your project page!</h2>
          <h4>Talk about your project and find potential teammates and backers!</h4>
          <ProjForm onSubmit={showProj} />
          {/* <Values form="simple" /> */}
        </div>
      </MuiThemeProvider>
  </Provider>
  )
};

const noteCreate = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div style={{ padding: 15 }}>
      <h2>Send a note to the Hacker!</h2>
      <h4>What improvements do you want to bring to the project?</h4>
      <NoteForm onSubmit={showProj} />
      {/* <Values form="simple" /> */}
    </div>
    </MuiThemeProvider>
  </Provider>
  )
};

export {
  userCreate,
  projCreate,
  noteCreate
}