class App extends React.Component {
  openWindow(){
    ReactDOM.render(<Window/>, document.getElementById("content"))
  }
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
            <li>
              <a href="#">
                <img src="img/folder-invoices--v1.png" onClick={this.openWindow} />
              </a>
            </li>
      		</ul>
      		<ul className='menuRg'>
      			<li className='powerb'>
      				<a href="#">
      					<img src="img/Power_Button-512.png" />
      				</a>
      			</li>
      		</ul>
      	</header>
        <section id="content">
        </section>
      	<footer>
          <ul className='menuRg'>
            <li>
              <a href="#">@jorgea3004</a>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

class Window extends React.Component {
  state = {
        page:1,
        total:0,
        limite:20,
        elementos:[]
    }
  constructor() {
    super();
    this.closeWindow = this.closeWindow.bind(this);
    this.newPage = this.newPage.bind(this);
  }
  closeWindow(){
    ReactDOM.unmountComponentAtNode(document.getElementById('content'));
  }
  componentWillMount(){
    let self = this;
     axios.get("./json/fotos.json").then(response => response.data)
        .then(function(data) {
          let lim = data.items.length/self.state.limite;
          let fraction = lim % 1;
          if (fraction>0) {lim=parseInt(lim)+1;};
          self.setState({elementos: data.items,total:lim});
        })
        .catch(function(error) {
          console.log(error);
        });
  }
  addPage(idPage){
    let count = 20;
    let fin = count * idPage;
    let inicio = fin - count;
    let elems = this.state.elementos;
    let sub = elems.slice(inicio,fin);
    return sub;
  }
  newPage(){
    let pageNew = parseInt(this.state.page)+1;
    if (pageNew<=this.state.total) {
      this.setState({page:pageNew});
    }
  }


  render() {
    let elemnts = this.addPage(this.state.page);
    return (
          <section id="window">
            <div className="headerdiv">
              <ul><li className="close" onClick={this.closeWindow}></li></ul>
            </div>
            <div className="bodydiv">
            <ul>{
              elemnts.map(function(v,i){
                  return (
                      <li key={i}>
                        <img src={"./uploads/"+v.foto} />
                        <p>{v.description+" - "+v.idItem}</p>
                      </li>
                  )
                })
            }
            </ul>
            <div className="next" onClick={this.newPage}>NEXT</div>
            </div>
          </section>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"))
