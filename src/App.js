/* eslint-disable */   //문법 warning을 막음

import './App.css';
import React,{Component, useState} from 'react';
import Customer from './mycomponents/Customer';

const customer = {
  'name':'용이',
  'birth':'051212',
  'gender':'남',
  'job':'student'
}

class App extends Component {
  render(){
    return(
      <Customer
      name={customer.name}
      birth={customer.birth}
      gender={customer.gender}
      job={customer.job}
      />
    )
  }
}

export default App;
