var User = React.createClass({
	getInitialState: function(){
		return {
			username: "@jorgea3004",
			avatar: "res_20_1.jpg",
			description: "Usuario Twitter"
		}
	},
	changeUser: function(){
		this.setState({
			username: "jorge.gonzalez",
			avatar: "res_20_1.jpg",
			description: "Usuario Gmail"
		})
	},
	render:  function(){
		var image = "./images/" + this.state.avatar;
		return (
				<article className="user" onClick={this.changeUser}>
					<img src={image} width="100px" />
					<div className="user-description">
						<p className="user-name">{this.state.username}</p>
						<p>{this.state.description}</p>
					</div>
				</article>
			)
	}
});



ReactDOM.render(
    <User/>,
    document.getElementById('user')
);