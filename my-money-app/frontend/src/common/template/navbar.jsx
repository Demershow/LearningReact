import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../auth/authActions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  changeOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { name, email } = this.props.user;
    return (
      <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#">
              <i className="fa fa-bars"></i>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="fa fa-user"></i>
            </a>
            <div
              className={`dropdown-menu dropdown-menu-lg dropdown-menu-right ${
                this.state.open ? "show" : ""
              }`}
            >
              <span className="dropdown-item dropdown-header">{name}</span>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="fa fa-envelope mr-2"></i> {email}
              </a>
              <div className="dropdown-divider"></div>
              <a
                href="#"
                className="dropdown-item dropdown-footer"
                onClick={this.props.logout}
              >
                Sair
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.auth.user });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
