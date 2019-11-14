import React from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import AssociatesList from './components/AssociatesList';
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h2> sathya
        <u>Component List</u>
      </h2>
      <ul>
        <li>
          Chat Window: <ChatWindow someProp="Test"/>
          Notes: need to see who is in the chat
                 IM window between 2 people vs group window
        </li>
        <li> dhanesh
          Associates List: <AssociatesList someProp="Associates"/>
          Notes: need to be able to invite to chat, start new chat, see profile, send offline message
                 need API to update automatically (started work, working in 1 hr, etc)
        </li>
        <li>
          File Transfer:
          Notes: offline and online
        </li>
        <li> srija
          Profile:
          Notes: should support external links
                 homepage-like? (myspace)
          <Profile/>
        </li>
        <li> rohitha
          Group Homepage:
          Notes: to share schedule notes or whatever for a department etc
        </li>
        <li>
          Group Notifications:
          Notes: system maint, offline messages, tasks complete, whatever (need API)
        </li>
        <li> chris
          Offline Channels:
          Notes: (like teams/slack/etc?)
        </li>
        <li>
          Admin page:
          Notes: may need API for plugging into other apps
                 setup groups, permissions, etc
        </li>
      </ul>
    </div>
  );
}

export default App;
