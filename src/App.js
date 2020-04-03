import React from 'react';
import './App.css';
import ItemsContainer from './components/ItemsContainer'
import NewItemForm from './components/NewItemForm'

class App extends React.Component {
  state = {
    photos: []
  }

  componentDidMount(){
    fetch(`https://photo-uploader-node.herokuapp.com/photos`)
    .then(res => res.json())
    .then(data => {
      this.setState(() => {
          return {
            photos: data
          }
      })
    })
  }

  render(){
    return (
      <div className="App">
        <NewItemForm/>
        <ItemsContainer photos={this.state.photos}/>
      </div>
    )
  }
}

export default App;
