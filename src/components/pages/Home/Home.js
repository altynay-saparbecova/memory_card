import React from "react";
import "./Home.css";
// import { Button } from "antd";
// import Button from '@material-ui/core/Button';
import { routes } from "../../../routes.js";
import { Link } from "react-router-dom";
import Img2 from "../../../image/logo.png"
// import Button from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="memory">

        </div>
        <img className='logoimg' src={Img2} />
        <div >
          <Link className="lgn" to={routes.home}>
            <button type="button" class="btn btn-danger">Home</button>
          </Link>
          <Link className="lgn" to={routes.login}>
            {/* <Button type="primary">Log in</Button> */}
            <button type="button" class="btn btn-warning">Log in</button>
          </Link>
          <Link className="lgn" to={routes.about}>
            <button type="button" class="btn btn-success">About</button>
          </Link>
        </div>
      </div>


      <div className="container">
        <h3>Educational games!!! </h3>
        <div className='title'>
          To go to the game, you first need to register
          <Link className="lgnn" to={routes.sign_up}>
            Sign Up
          </Link>



        </div>

        <div className="bg_home">
          <div>
            {/* <img
              className="homeImg"
              src={Img3}
            /> */}
            <div />
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
