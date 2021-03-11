import React, { useState, useContext, useEffect } from "react";
import '../assets/css/create.css';

import { SidenavContext } from '../contexts/SidenavContext';
import { FormContext } from '../contexts/FormContext';

function Create() {

  const { sideNav, changeSidenavState } = useContext(SidenavContext);
  const { forms, addForm, editForm, removeForm } = useContext(FormContext);

  const [form, setForm] = useState({});

  const saveForm = () => {
    addForm(form);
  }

  const updateForm = () => {
    editForm(form);
  }

  // sidenav state change on save - to change behaviour of presentation 
  const changeState = (state) => {
    changeSidenavState(state);
  }

  return (
    <div className="create px-3 pt-4">
        <h2>Drop & Create</h2>

        {
          sideNav == 1 ?
          <div className="form-area py-3">
            <p>Form Area</p>
          </div>
          :
          <p className="py-3 text-black-50">Select a Form to Edit, or Create a New one.</p>
        }

        {
          sideNav == 1 ?
          <div className="row">
            <div className="col-2">
              <a className="btn btn-outline-primary w-100" onClick={() => changeState(0)}>Validate</a>
            </div>

            <div className="col-2">
              <a className="btn btn-primary w-100" onClick={() => changeState(0)}>Save</a>
            </div>
          </div>
          :
          null
        }

        {
          sideNav == 3 ?
          <div className="row">
            <div className="col-2">
              <a className="btn btn-outline-primary w-100" onClick={() => changeState(0)}>Cancel</a>
            </div>

            <div className="col-2">
              <a className="btn btn-primary w-100" onClick={() => changeState(0)}>Save</a>
            </div>
          </div>
          :
          null
        }
        
    </div>
  );
}

export default Create;
