import React from "react";
import { FormControl } from "@mui/material";

export default function GroupForm() {
  const submitGroup = (e) => {
    // to prevent the page from sending a get request
    e.preventDefault();
    // use FormData to construct sets of k/v pairs representing our form fields
    // and what is currently inside them(e.target)
    const formData = new FormData(e.target);
    // set a variable to represent the FromEntries method
    // that pulls and contains the values from FormData
    const payload = Object.fromEntries(formData);
    // send an axios post request that will post all the info we have and
    console.log(payload);

  };

  return (
    <form onSubmit={submitGroup}>
      <label htmlFor="group-name-form" id="group-name-form">
        Group Name
        <input name="name" type="text" />
      </label>
      <label htmlFor="group-form-players" id="group-form-players">
        Player List
        <input name="players" type="text" />
      </label>
      <label htmlFor="group-form-game" id="group-form-game">
        Game List
        <input name="games" type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
