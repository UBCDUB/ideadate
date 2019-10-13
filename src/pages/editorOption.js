import React, { Components } from "react";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import UserForm from "./userForm";
import ProjForm from './projForm';
import NoteForm from './noteForm';

const userCreate = () => {
  return (
    <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <UserForm onSubmit={showResults} />
      {/* <Values form="simple" /> */}
    </div>
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
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <ProjForm onSubmit={showResults} />
      {/* <Values form="simple" /> */}
    </div>
  </Provider>
  )
};

const noteCreate = () => {
  return (
    <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <NoteForm onSubmit={showResults} />
      {/* <Values form="simple" /> */}
    </div>
  </Provider>
  )
};

export {
  userCreate,
  projCreate,
  noteCreate
}