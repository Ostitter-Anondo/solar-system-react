import { GiSolarSystem } from "react-icons/gi";
import solarSystem from "../../assets/solar-system.png";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  const notify = () => {
    toast('kam hoise!',
      {
        icon: <GiSolarSystem />,
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  };
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiSolarSystem className="size-8" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={solarSystem} alt="solarSystem" className="size-8" />
          Solaris
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline" onClick={notify}>Button</button>
      </div>
    </div>
  );
};

export default Navbar;
