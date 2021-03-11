import React, { useState, useContext, useEffect } from "react";
import '../assets/css/sidebar.css';
import { Link } from 'react-router-dom';

import { data } from '../data/data';

import { SidenavContext } from '../contexts/SidenavContext';
import { FormContext } from '../contexts/FormContext';

function Sidebar() {

  const { sideNav, changeSidenavState } = useContext(SidenavContext);
  const { selectedFormId, selectedForm, selectedDay, changeSelectedDay } = useContext(FormContext);

  const changeState = (state) => {
    changeSidenavState(state);
  }

  return (
    <div className="side-area">
      {
        sideNav == 1 ?
          <div className="form-selected">
            <h4 className="mx-2">{selectedDay.datetime}</h4>
            {
              selectedDay.forms && selectedDay.forms.length > 0 ?
                selectedDay.forms.map((form, index) => {
                  return (
                    <a key={index} onClick={() => { selectedForm(form.id); }} className={selectedFormId == form.id ? 'active' : ''}>
                      {form.name}
                    </a>
                  )
                })
                :
                null
            }
          </div>
          :
          null
      }

      <div className="sidebar">
        <div className="pt-4">
          {
            sideNav == 0 ?
              <Link className="button d-block mx-2 mb-4" to="/create" onClick={() => changeState(3)}>
                Create
            </Link>
              :
              <Link className="button d-block mx-2 mb-4" to="/create">
                Validate
            </Link>
          }
        </div>

        {
          sideNav == 0 ?
            <div className="forms">
              <h4 className="mx-2">Forms</h4>

              <ul className="parent">
                {
                  data && data.length > 0 ?
                    data.map((item, index) => {
                      return (
                        <li key={index}>
                          <a>{item.datetime}</a>
                          {
                            item.forms && item.forms.length > 0 ?
                              <ul className="child">
                                {
                                  item.forms.map((form, index) => {
                                    return (
                                      <li key={index}>
                                        <a onClick={() => { changeState(1); selectedForm(form.id); changeSelectedDay(item); }}>
                                          {form.name}
                                        </a>
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                              :
                              null
                          }
                        </li>
                      )
                    })
                    :
                    null
                }
              </ul>
            </div>
            :
            null
        }

        {
          sideNav == 1 || sideNav == 3 ?
            <div className="form-elements">
              <h4 className="mx-2">Cell Layout</h4>
              <a>Table</a>

              <h4 className="mx-2">Form Elements</h4>
              <a>Input</a>
              <a>Checkbox</a>
              <a>File Uploader</a>
              <a>Text</a>
              <a>Devider</a>
            </div>
            :
            null
        }
      </div>
    </div>
  );
}

export default Sidebar;
