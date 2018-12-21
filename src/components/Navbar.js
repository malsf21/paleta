import React, { Component } from 'react';
import logo from '../logo.png';

class Navbar extends Component {
  render() {
    return (
			<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			  <div className="navbar-brand">
			    <a className="navbar-item" href="#">
						<img src={logo} alt="Paleta logo" /> Paleta
			    </a>

			    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			      <span aria-hidden="true"></span>
			    </a>
			  </div>
				<div className="navbar-menu">
					<div className="navbar-start">
						<a className="navbar-item" href="#">
							Home
						</a>
						<a className="navbar-item" href="#">
							Colours
						</a>
					</div>

					<div className="navbar-end">
						<a className="navbar-item" href="#">
							Made With Paleta
						</a>
					</div>
			  </div>
			</nav>
    );
  }
}

export default Navbar;
