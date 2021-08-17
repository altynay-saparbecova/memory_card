// import React from "react";
// import "./style.css";
// import { Container } from "react-bootstrap";
// import { FaRedo } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div>
//       <h1>Memory Game</h1>
//       <Container>
//         <div className="sub-header">
//           <div className="moves">
//             <span className="bold">Moves:</span>
//           </div>
//           <div className="reshuffle">
//             <button>
//               <FaRedo />
//             </button>
//           </div>
//           <div className="high-score">
//             <span>Best score:</span>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import "./style.css";
import Img2 from "../../../src/image/logo.png"

// import { Button } from "antd";

import { Container } from "react-bootstrap";
import { FaRedo } from "react-icons/fa";

const Header = ({ moves, bestScore, handleRestart }) => {
  return (
    <div className="header">
      <div className="home" >
        <img className='logoimg' src={Img2} />
      </div>

      <Container>
        <div className="sub-header">
          <div className="moves">
            <span className="bold">Moves:</span>
            {moves}
          </div>
          <div className="reshuffle">
            <button onClick={handleRestart}>
              <FaRedo />
            </button>
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span>Best Score:</span>
              {bestScore}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
