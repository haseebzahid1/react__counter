import React from "react";

const Navbar = ({totalCounters}) => {
    return (
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand " href="#/">
         Navbar   <span className="bg-danger p-2 text-white">{totalCounters}</span>
        </a>
      </nav>
    )
}
// class Navbar extends Component {
//   state = {};
//   render() {
//     return (
    
//     );
//   }
// }

export default Navbar;
