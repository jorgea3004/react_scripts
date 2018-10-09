class MensajeAlert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	show: false,
    	texto: ''
    };
  }
  propTypes: {
    newMensaje: React.PropTypes.text.isRequired
  }

	render() {
		return (
			React.createElement('div', {},''+this.props.texto+'')
		)
	}
}
ReactDOM.render(<MensajeAlert texto=' ' />, document.getElementById("mensaje"));
