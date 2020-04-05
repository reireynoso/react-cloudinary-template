import React from 'react';
import './App.css';
import NewItemForm from './components/NewItemForm'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <NewItemForm/>
      </div>
    )
  }
}

export default App;
