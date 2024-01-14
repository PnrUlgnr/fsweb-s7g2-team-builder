import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";

function App() {
  const [teamList, setTeamList] = useState([]);
  const [editMode, setEditMode] = useState();

  const [oldMember, setOldMember] = useState(null);
  const addMember = (newMember) => {
    newMember.id = new Date();
    setTeamList([...teamList, newMember]);
  };
  const editMember = (formData) => {
    const updateTeamList = teamList.map((item) => {
      if (item.id == oldMember.id) {
        //
        formData.id = oldMember.id;
        return formData;
      } else {
        return item;
      }
    });
    setTeamList(updateTeamList);
    setOldMember(null);
  };

  const handleEditClick = (member) => {
    setOldMember(member);
  };
  return (
    <div className="App">
      <div className="container">
        <h2>Team List</h2>
        <div className="teamList">
          {teamList.map((member) => {
            <div key={member.id} className="teamList-row">
              {member.isim}
              <button onClick={() => handleEditClick(member)}>Düzenle</button>
            </div>;
          })}
        </div>
      </div>
      <Form
        addMember={addMember}
        editMode={editMode}
        oldMember={oldMember}
        editMember={editMember}
      />
    </div>
  );
}

export default App;
