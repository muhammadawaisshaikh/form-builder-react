import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from 'uuid';

export const FormContext = createContext();


const FormContextProvider = props => {
  const [forms, setForms] = useState([]);
  const [selectedFormId, setSelectedFormId] = useState(0);

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
  
  return (
    <FormContext.Provider value={{ selectedFormId, forms, addForm, editForm, removeForm, selectedForm }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;