/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
/*
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Welcome name="Mario" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
  function handleClick(e) {
    e.preventDefault();
    alert('Zoquete');
    console.log('The link was clicked.');
  }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render() {
    return (
      <div>
        <header>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </header>
        <section>
          <a href="#" onClick={handleClick}>
            Click me
          </a>
        </section>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);