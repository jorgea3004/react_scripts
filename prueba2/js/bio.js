class Biog extends React.Component {
  render() {
    return (
      React.createElement("section", {},
        React.createElement("h3", {},"Sígueme o contáctame en:"),
        React.createElement("p", {className:"teamline"},""),
        React.createElement("div", {className:"sixths_team"},
          React.createElement("h4", {}, "GMail",
            React.createElement("br", {}),
            React.createElement("span", {},"gmail.com")
          ),
          React.createElement("a", {href:"#", target:"_blank"},
            React.createElement("img", {src:"img/social_gmail_logo.png",alt:"GMail"})
          ),
          React.createElement("a", {href:"#",className:"profession", target:"_blank"},"")
        ),
        React.createElement("div", {className:"sixths_team"},
          React.createElement("h4", {}, "Hotmail",
            React.createElement("br", {}),
            React.createElement("span", {},"hotmail.com")
          ),
          React.createElement("a", {href:"#", target:"_blank"},
            React.createElement("img", {src:"img/social_Live_Hotmail.png",alt:"Hotmail"})
          ),
          React.createElement("a", {href:"#",className:"profession", target:"_blank"},"")
        ),
        React.createElement("div", {className:"sixths_team"},
          React.createElement("h4", {}, "Twitter",
            React.createElement("br", {}),
            React.createElement("span", {},"@jorgea3004")
          ),
          React.createElement("a", {href:"#", target:"_blank"},
            React.createElement("img", {src:"img/social_twitter-icon-12.png",alt:"Twitter"})
          ),
          React.createElement("a", {href:"#",className:"profession", target:"_blank"},"")
        ),
        React.createElement("div", {className:"sixths_team"},
          React.createElement("h4", {}, "Facebook",
            React.createElement("br", {}),
            React.createElement("span", {},"@jorgea3004")
          ),
          React.createElement("a", {href:"#", target:"_blank"},
            React.createElement("img", {src:"img/social_fblogo.jpg",alt:"Facebook"})
          ),
          React.createElement("a", {href:"#",className:"profession", target:"_blank"},"")
        ),
        React.createElement("div", {className:"sixths_team"},
          React.createElement("h4", {}, "Instagram",
            React.createElement("br", {}),
            React.createElement("span", {},"@jorgea3004")
          ),
          React.createElement("a", {href:"#", target:"_blank"},
            React.createElement("img", {src:"img/social_instagram_2016_icon.jpg",alt:"Instagram"})
          ),
          React.createElement("a", {href:"#",className:"profession", target:"_blank"},"")
        ),
        React.createElement("div", {className:"sixths_team"},
          React.createElement("h4", {}, "PlayStation",
            React.createElement("br", {}),
            React.createElement("span", {},"jorgea3004")
          ),
          React.createElement("a", {href:"#", target:"_blank"},
            React.createElement("img", {src:"img/social_ui_icons_mobile.jpg",alt:"PlayStation"})
          ),
          React.createElement("a", {href:"#",className:"profession", target:"_blank"},"")
        ),
        React.createElement("div", {className:"sixths_team"},
          React.createElement("h4", {}, "LinkedIn",
            React.createElement("br", {}),
            React.createElement("span", {},"jorgea3004")
          ),
          React.createElement("a", {href:"#", target:"_blank"},
            React.createElement("img", {src:"img/social_linkedin-icon.png",alt:"linkedin"})
          ),
          React.createElement("a", {href:"#",className:"profession", target:"_blank"},"")
        )
      )
    )
  }
}

ReactDOM.render(<Biog />, document.getElementById("content_inner"));