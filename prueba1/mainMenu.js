var Menu = React.createClass({
  render: function(){
    var menus = ['Inicio',
      'Acerca de',
      'Servicios',
      'Portafolio',
      'Contactanos']
    return React.createElement('ul',
      null,
      menus.map(function(v,i){
        return React.createElement('li',
          {key: i},
          React.createElement(Link, {label: v})
        )
      })
    )
}});
var Link = React.createClass({
  render: function () {
    var url='http://localhost/otros/reactjs/prueba1/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return React.createElement(
        'a',
        {href: url},
        this.props.label
      )
  }
});

ReactDOM.render(
  React.createElement(
    Menu,
    null
  ),
  document.getElementById('menu')
);
