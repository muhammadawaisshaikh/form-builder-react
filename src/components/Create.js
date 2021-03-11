import React, { useState, useContext, useEffect } from "react";
import '../assets/css/create.css';
import { FormContext } from '../contexts/FormContext';

function Create() {

  const { forms, addForm, editForm, removeForm } = useContext(FormContext);

  const [form, setForm] = useState({});

  const saveForm = () => {
    addForm(form);
  }

  const updateForm = () => {
    editForm(form);
  }

  return (
    <div className="create">
        <h2>Create</h2>
    </div>
  );
}

export default Create;
