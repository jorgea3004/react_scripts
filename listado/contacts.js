class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {contacts};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.openForm = this.openForm.bind(this);
  }

  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleDelete(event){
    const target = event.target;
    const indice = target.parentElement.parentElement.parentElement.id;
    var LosElementosLista = this.state.contacts;
    LosElementosLista.splice(indice,1);
    this.setState({contacts: LosElementosLista});
  }

  handleSubmit(event) {
    event.preventDefault();
    var nextElementosLista = this.state.contacts.concat([this.state]);
    this.setState({contacts: nextElementosLista});
  }

  openForm(event) {
    event.preventDefault();
    document.getElementById('formulario').style.display='block';
  }

  render() {
    self=this;
    return (
      React.createElement('div', {className: 'ContactView'},
        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
        React.createElement('div', {id: 'formView'},
          React.createElement('button', {type: 'button', onClick:this.openForm}, "NUEVO")
        ),
        React.createElement('ul', {className: 'ContactView-list'}, 
          this.state.contacts.map(function(contact,index) {
            return (
              React.createElement('li', {className: 'ContactItem',key:index,id:index,ref:index},
                React.createElement('img', {className: 'ContactItem-image',src:'http://localhost/misitio/public/img/iconos_metro/'+contact.icono}),
                React.createElement('div', {className: 'ContactItem-description'},
                  React.createElement('h2', {className: 'ContactItem-name'}, contact.clase),
                  React.createElement('label', {className: 'ContactItem-clase'}, contact.open),
                  React.createElement('label', {className: 'ContactItem-clase'}, contact.link),
                  React.createElement('div', {className: 'ContactItem-clase'}, 
                    React.createElement('img', {className: 'ContactItem-edit', src:'http://localhost/misitio/public/img/notes.png'}),
                    React.createElement('img', {className: 'ContactItem-delete', src:'http://localhost/misitio/public/img/trash.png',onClick:self.handleDelete })
                  )
                )
              )
            )
          })
        ),
        React.createElement('div', {id: 'formulario'}, 
        React.createElement('form', {
          className: 'ContactForm',
            id: 'ContactForm',
            name: 'ContactForm',
            ref:'ContactForm',
            action:"#",
            method:"POST",
            encType:"multipart/form-data"
          },
          React.createElement('input', {
            type: 'hidden',
            value: this.state.key,
            id: 'idElemento',
            name: 'idElemento',
            ref:'idElemento'
          }),
          React.createElement('input', {
            type: 'file',
            placeholder: 'Icono',
            value: this.state.icono,
            id: 'icono',
            name: 'icono',
            ref:'icono', 
            onChange:this.handleChange
          }),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Clase',
            value: this.state.clase,
            id: 'clase',
            name: 'clase',
            ref:'clase', 
            onChange:this.handleChange
          }),
          React.createElement('input', {
            type: 'text',
            placeholder: 'Url',
            value: this.state.link,
            id: 'link',
            name: 'link',
            ref:'link', 
            onChange:this.handleChange
          }),
          React.createElement('select', {
            id: 'open',
            name: 'open',
            ref:'open', 
            onChange:this.handleChange
            },
            React.createElement('option', {
              value: '_self'
            }, 'Misma'),
            React.createElement('option', {
              value: '_Blank'
            }, 'Nueva')
          ),
          React.createElement('button', {type: 'submit',
            onClick:this.handleSubmit}, "GUARDAR")
        )
        )
      )
    )
  }
}
var contacts = [
  {key:0, icono: "html5icon.jpg", clase: "Applicaciones", open: "#", link: "#"},
  {key:1, icono: "cydiaicon.jpg", clase: "Conocimiento", open: "#", link: "#"},
  {key:2, icono: "cosplayicon.jpg", clase: "Cosplay", open: "#", link: "#"},
  {key:3, icono: "iexploreico.jpg", clase: "Entretenimiento", open: "#", link: "#"}
]
var newContact = {icono: "", clase: "", open: "", link: ""}
ReactDOM.render(
  React.createElement(ListView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('react-app')
)
