import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

function App() {
  return(
    <div>
      <header className="App-header">
        <h1 className="Text-outline">My Daily Planner</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Planner</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <h2 className="content">Month</h2>
        <p>
          <table className="table">
            <th className="table-head">Sunday</th>
            <th className="table-head">Monday</th>
            <th className="table-head">Tuesday</th>
            <th className="table-head">Wednesday</th>
            <th className="table-head">Thursday</th>
            <th className="table-head">Friday</th>
            <th className="table-head">Saturday</th>
          </table>
        </p>
      </div>
    </div>
  );
}

export default App;