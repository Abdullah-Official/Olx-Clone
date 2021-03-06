import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./Login.css";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Drop from "./Drop";
function NavbarAfter() {
  const user = useSelector(selectUser);

  const Nxt = (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-22SD7"
        d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
      ></path>
    </svg>
  );
  const prv = (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-22SD7"
        d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"
      ></path>
    </svg>
  );
  const fbIcon = (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-367TP rui-27W37"
        d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"
      ></path>
    </svg>
  );
  const google = (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-367TP rui-27W37"
        d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM515.772 325.594c47.061-2.176 91.221 17.92 127.189 45.995-15.403 17.109-31.275 33.621-48.341 49.024-43.221-29.312-104.747-37.717-147.968-3.797-61.867 41.899-64.768 140.971-5.205 186.155 57.856 51.541 167.296 25.941 183.381-52.864-36.309-0.555-72.661 0-108.885-1.152-0.171-21.291-0.213-42.453-0.171-63.659 60.587-0.213 121.259-0.299 181.973 0.171 3.627 49.92-3.157 102.955-34.347 144.256-47.317 65.28-142.379 84.352-216.576 56.32-74.411-27.691-127.232-104.789-120.917-183.424 1.664-96.128 91.861-180.309 189.867-177.024z"
      ></path>
    </svg>
  );
  const logo = (
    <svg
      width="48px"
      height="48px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-77aaa"
        d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
      ></path>
    </svg>
  );
  const chatIcon = (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-77aaa"
        d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"
      ></path>
    </svg>
  );
  const bellIcon = (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-77aaa"
        d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"
      ></path>
    </svg>
  );
  const downArrow = (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 1024 1024"
      data-aut-id="icon"
      class=""
      fill-rule="evenodd"
    >
      <path
        class="rui-77aaa"
        d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
      ></path>
    </svg>
  );

  const options = ["Mirpur", "Muzaffarabad", "Bhimber", "Kotli"];

  const [drop, setDrop] = useState();
  const dropFunc = () => {
    setDrop(<Drop />);
  };
  const upFunc = () => {
    setDrop(null);
  };
  return (
    <>
      <div className="bg-light ">
        <nav className="navbar mainTopNav nav fixed-top navbar-expand-lg navbar-light bg-light ">
          <NavLink className="navbar-brand ml-5" to="/">
            {logo}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse collapseAfter" id="navbarSupportedContent">
            <div className="navbar__autocomplete mr-1">
              <SearchIcon className="auto_ICON" fontSize="large" />
              <Autocomplete
                id="custom-input-demo"
                className="autoCmplt_search"
                options={options}
                renderInput={(params) => (
                  <div
                    style={{ borderColor: "none" }}
                    ref={params.InputProps.ref}
                  >
                    <input
                      style={{ borderColor: "none", color: "#ccc" }}
                      placeholder="Search city,area or loc..."
                      type="text"
                      {...params.inputProps}
                    />
                  </div>
                )}
              />
              <ExpandMoreIcon className="auto_ICON" fontSize="large" />
            </div>

            <div className="navbar__searchField ml-3 ">
              <div class="input-group navbar__search mb-3 mt-3">
                <input
                  type="text"
                  class="form-control bigSearch"
                  placeholder="Find Cars, Mobile Phones and more.."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span
                    class="input-group-text seachFieldIcon"
                    id="basic-addon2"
                  >
                    <SearchIcon fontSize="large" />
                  </span>
                </div>
              </div>
            </div>
            {/* AFTER LOGIN  */}

            <div className="afterIcons">
              <div className="chatIcon ml-3">{chatIcon}</div>
              <div className="bellIcon ml-3">{bellIcon}</div>
              <div className="AvatarIcon d-flex pl-2">
                <Avatar src={user.photo} />
                <button
                  className="dropBtn"
                  onClick={dropFunc}
                  onDoubleClick={upFunc}
                >
                  {downArrow}
                </button>
              </div>
            </div>

            {/* AFTER LOGIN END */}

            <div className="sellBtn pl-3">
              <NavLink to="/sell-form" class="button nav-link">
                <span className="sell">
                  <AddIcon style={{ fontSize: "25px" }} />
                  Sell
                </span>
              </NavLink>
            </div>
          </div>
        </nav>
        <div>{drop}</div>
      </div>
    </>
  );
}

export default NavbarAfter;
