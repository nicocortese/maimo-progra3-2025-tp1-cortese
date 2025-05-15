import Image from "next/image"


const Navbar = (props) => {
//100% js acá

const title = props.title

  return (
    <div className="nav_container">
        <h2>Cocinando con</h2> {/*{props.title}*/}
        <div className="logo_container">
          <Image src="/assets/logo_umai.png" 
          width={100}
          height={50}
          alt="Logo UMAI"
          />
        </div>
        <div className="content_search">
          <form>
            <input type="text" placeholder="Buscar"/>
            <button type="submit">🔍</button>
          </form>
          </div>
      <nav>
        <ul>
            <li><a href ="#">Home</a></li>
            <li><a href ="#">Categorías</a></li>
            <li><a href="#">Tips</a></li>
            <li><a href ="#">About us</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar
