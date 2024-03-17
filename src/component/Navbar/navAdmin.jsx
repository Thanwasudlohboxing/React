import "./Navadmin.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar text-neutral-content">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl" id="head">
            Food Online Delivery
          </Link>
          <center>
            <h2 id="admin">
              ระบบแอดมิน <i className="fa-solid fa-user-tie"></i>
            </h2>
          </center>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button className="btn btn-block">
                <Link to="Restaurant">
                  <p>จัดการร้านอาหาร</p>
                </Link>
              </button>
            </li>
            <div className="c">cc</div>
            <li>
              <button className="btn btn-block">
                <Link to="Managemember">
                  <p>จัดการผู้ใช้</p>
                </Link>
              </button>
            </li>
            <div className="c">cc</div>
            <li>
              <button className="btn btn-block">
                <Link to="Allowmember">
                  <p>อนุมัติผู้ใช้</p>
                </Link>
              </button>
            </li>
            <div className="c">cc</div>
            <li>
              <button className="btn btn-block">
                <Link to="Managecategory">
                  <p>จัดการประเภทร้านอาหาร</p>
                </Link>
              </button>
            </li>
            <div className="c">cc</div>
            <a href="">
              <button className="btn btn-md btn-error">
                <Link to="Logout">
                <i className="fa-solid fa-right-from-bracket"></i>
                </Link>
              </button>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
