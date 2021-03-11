import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from 'uuid';

export const FormContext = createContext();


const FormContextProvider = props => {
  const [forms, setForms] = useState([]);
  const [selectedFormId, setSelectedFormId] = useState(0);
  const [selectedDay, setSelectedDay] = useState({});

  const addForm = form => {
    setForms([...forms, { form, id: uuidv1 }]);
  };

  const editForm = updatedForm => {
    forms.map(element => {
        if(element.id === updatedForm.id) {
          return element = updatedForm;
        }
    });

    setForms(forms);
  };

  const removeForm = id => {
    setForms(forms.filter(form => form.id !== id));
  };

  const selectedForm = id => {
    setSelectedFormId(id);
  };

  const changeSelectedDay = day => {
    setSelectedDay(day);
  };
  
  return (
    <FormContext.Provider value={{ selectedFormId, forms, selectedDay, addForm, editForm, removeForm, selectedForm, changeSelectedDay }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;