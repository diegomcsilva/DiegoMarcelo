var React = require('react');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="nav">
        <ul>
          <li><a href="#banner">Eu</a></li>
          <li><a href="#about">Objetivo</a></li>
          <li><a href="#competence">Competnencias</a></li>
          <li><a href="#experiences">Experiências</a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    );
  }
});


module.exports = Nav;
