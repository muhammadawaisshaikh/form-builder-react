import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from 'uuid';

export const FormContext = createContext();

const FormContextProvider = props => {
  const [forms, setForms] = useState([]);

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
  
  return (
    <FormContext.Provider value={{ forms, addForm, editForm, removeForm }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;