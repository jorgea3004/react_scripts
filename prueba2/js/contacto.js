class Proyectos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      url: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(event) {
    this.setState({nombre: event.target.nombre});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log('A name was submitted: ' + this.state.nombre);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.nombre);
    event.preventDefault();
  }

  render() {
    return (
      React.createElement("section", {},
        React.createElement("h3", {},"Leave a message"),
        React.createElement("p", {className:"textit"},"Let’s put here some text, lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore!"),
        React.createElement("form", {action:"#",method:"post",className:"formit"},
          React.createElement("input", {type:"text",name:"nombre",id:"nombre",placeholder:"YOUR NAME", value:this.state.nombre, onChange:this.handleInputChange }),
          React.createElement("input", {type:"email",name:"email",id:"email",placeholder:"YOUR email", value:this.state.email, onChange:this.handleInputChange }),
          React.createElement("input", {type:"text",name:"url",id:"url",placeholder:"YOUR url", value:this.state.url, onChange:this.handleInputChange }),
          React.createElement("textarea", {type:"text",name:"message",id:"message",placeholder:"YOUR message", value:this.state.message, onChange:this.handleInputChange }),
          React.createElement("input", {type:"submit",name:'envia',id:"envia",value:"SEND A MESSAGE",className:'button_submit'})
        ),
        React.createElement("h3", {},"Contact information"),
        React.createElement("div", {className:'contactinfo'},
          React.createElement("span", {className:'ico_mapmark'},
            React.createElement("b", {},'15th Avenue, 15 362, San Francisco')
          )
        ),
        React.createElement("div", {className:'contactinfo'},
          React.createElement("span", {className:'ico_message'},
            React.createElement("b", {},'cats@ninatheme.com')
          )
        ),
        React.createElement("div", {className:'contactinfo'},
          React.createElement("span", {className:'ico_iphone'},
            React.createElement("b", {},'(+123) 456 789 012')
          )
        ),
        React.createElement("hr", {className:'cleanit'})
      )
    )
  }
}

ReactDOM.render(<Proyectos />, document.getElementById("content_inner"));