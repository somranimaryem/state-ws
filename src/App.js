import logo from './logo.svg'
import './App.css'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: 'Maryem Somrani',
      bio: 'Lorem ipsum dolor sit amet, consectetur adip',
      imgSrc: 'https://',
      profession: 'Full-stack dev',
      show: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  tick() {
    console.log(new Date())
  }
  render() {
    return (
      <div>
          {!this.state.show ? (
          <button
            onClick={() => {
              this.setState({ show: true })
              console.log(this.state.show)
            }}
          >
            Show
          </button>
        ) : (
          <button
            onClick={() => {
              this.setState({ show: false })
              console.log(this.state.show)
            }}
          >
            Hide
          </button>
        )}

        {this.state.show ? (
          <h1>FullName : {this.state.fullName}</h1>
          
        ) : (
          <h1>Click on the show button to display </h1>
        )}
      </div>
    )
  }
}

export default App
