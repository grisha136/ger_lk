import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Menu} from "./components/Menu";
import {Profile} from "./components/Profile";
import {Settings} from "./components/Settings";
import {Users} from "./components/Users";


const Settings = ()=> {
    return <div className="row">
        <div className="col-2">
            <p>Имя: Виктор</p>
            <p>Фамилия: Иванов</p>
            <p>Email: ivanov@mail.com</p>
            <p>ID: 1</p>
        </div>
    </div>
}

const Users = ()=> {
    return <div className="row">
        <div className="col-2">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Имя Фамилия</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Виктор Иванов</td>
                    <td>ivanov@mail.com</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Иван Иванов</td>
                    <td>ivanov@mail.ru</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Виктор Сергеев</td>
                    <td>sergeev@mail.com</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}

function App() {
  return (
       <div className="container-fluid">
           <BrowserRouter>
               <div className="row">
                 <div className="col-3">
               <Menu/>
           </div>
           <div className="col-9">
              <Route path ="/profile" render={()=>{return <Profile/>}}/>
              <Route path ="/settings" render={()=>{return <Settings/>}}/>
              <Route path ="/users" render={()=>{return <Users/>}}/>
             </div>
           </div>
         </BrowserRouter>
       </div>
  );
}

export default App;
