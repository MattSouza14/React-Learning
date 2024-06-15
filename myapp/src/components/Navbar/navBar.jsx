import space from "../../assets/image/space.jpg"
import "./navBar.css"

function Navbar() {
    return(
        <header>
        <nav id="nav-bar">
          <div className="nav-img">
            <img src={space} alt="logo do site" />
            <h1>Space News</h1>
          </div>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Subscribe</a></li>
  
          </ul>
          
        </nav>
        </header>
        );
    }


export default Navbar