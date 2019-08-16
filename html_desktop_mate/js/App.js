class App extends React.Component {
  render() {
    return (
      <div id='wrapper'>
      	<header>
      		<ul className='menuLeft'>
      			<li>
      				<a href="#">
      					<img src="img/list-512.png" />
      				</a>
      			</li>
      		</ul>
      		<ul className='menuRg'>
      			<li>
      				<a href="#">
      					<img src="img/Power_Button-512.png" />
      				</a>
      			</li>
      		</ul>
      	</header>
      	<footer></footer>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById("app"))
