
class Ourwork extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: 'block'
    }

  }
  
  render() {
    return (
      React.createElement("section", {},
        React.createElement("h3", {},"Everything"),
        React.createElement("p", {className:"teamline"},""),
        React.createElement("section", {id:'galeriaFt'},''),
        React.createElement("section", {id:'galeriaBd'},''),
        React.createElement("hr", {className:'cleanit'}),
        React.createElement("ul", {className:'pagination'},
          React.createElement("li", {},
            React.createElement("a", {href:"#"},"1")
          ),
          React.createElement("li", {},
            React.createElement("a", {href:"#"},"2")
          ),
          React.createElement("li", {},
            React.createElement("a", {href:"#"},"[ 3 ]")
          ),
          React.createElement("li", {},
            React.createElement("a", {href:"#"},"4")
          ),
          React.createElement("li", {},
            React.createElement("a", {href:"#"},"5")
          )
        ),
        React.createElement("div", {className:'cara'},''),
        React.createElement("p", {className:'textit'},'Let’s put here some text, lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore!')

      )
    )
  }
}
ReactDOM.render(<Ourwork />, document.getElementById("content_inner"));
