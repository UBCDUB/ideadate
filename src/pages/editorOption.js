import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import UserForm from "./userForm";


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

export default userCreate;