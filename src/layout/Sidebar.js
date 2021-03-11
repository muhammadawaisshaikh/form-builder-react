import React, { useState, useContext, useEffect } from "react";
import '../assets/css/sidebar.css';
import { Link } from 'react-router-dom';

import { SidenavContext } from '../contexts/SidenavContext';
import { FormContext } from '../contexts/FormContext';

function Sidebar() {

  const { sideNav, changeSidenavState } = useContext(SidenavContext);
  const { selectedFormId, selectedForm } = useContext(FormContext);

  const [navState, setNavState] = useState(0);

  useEffect(() => {
  })

  const changeState = (state) => {
    changeSidenavState(state);
  }

  return (
    <div className="side-area">
      {
        sideNav == 1 ?
        <div className="form-selected">
          <h4 className="mx-2">Forms</h4>

          <a onClick={() => selectedForm(1)} className={selectedFormId == 1 ? 'active' : ''}>Form 1</a>
          <a onClick={() => selectedForm(2)} className={selectedFormId == 2 ? 'active' : ''}>Form 2</a>
          <a onClick={() => selectedForm(3)} className={selectedFormId == 3 ? 'active' : ''}>Form 3</a>
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
              <li>
                <a>Today</a>
                <ul className="child">
                  <li>
                    <a onClick={() => { changeState(1); selectedForm(1); }}>Form 1</a>
                  </li>
                  <li>
                    <a onClick={() => { changeState(1); selectedForm(2); }}>Form 2</a>
                  </li>
                  <li>
                    <a onClick={() => { changeState(1); selectedForm(3); }}>Form 3</a>
                  </li>
                  <li>
                    <a onClick={() => { changeState(1); selectedForm(4); }}>Form 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Monday 21 oct</a>
              </li>
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
