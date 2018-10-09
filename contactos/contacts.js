class ContactItem extends React.Component {
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  }

  render() {
    return (
      React.createElement('li', {className: 'ContactItem'},
        React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('a', {className: 'ContactItem-email', href: 'mailto:'+this.props.email}, this.props.email),
        React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
      )
    )
  }
}

class ContactForm extends React.Component {
  propTypes: {
    contact: React.PropTypes.object.isRequired
  }

  render() {
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          value: this.props.contact.name,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('textarea', {
          placeholder: 'Description',
          value: this.props.contact.description,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  }
}

class ContactView extends React.Component {
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
  }

  render() {
    var contactItemElements = this.props.contacts
      .filter(function(contact) { return contact.email })
      .map(function(contact) { return React.createElement(ContactItem, contact) })

    return (
      React.createElement('div', {className: 'ContactView'},
        React.createElement('h1', {className: 'ContactView-title'}, "Contacts"),
        React.createElement('ul', {className: 'ContactView-list'}, contactItemElements),
        React.createElement(ContactForm, {contact: this.props.newContact})
      )
    )
  }
}
var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com", description: "Front-end Unicorn"},
  {key: 3, name: "Joe", email: "joons@jamesknelson.com", description: "Front-end Unicorn"},
]
var newContact = {name: "", email: "", description: ""}
ReactDOM.render(
  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('react-app')
)