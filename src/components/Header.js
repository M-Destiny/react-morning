import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="usermark">mark comp</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="product">Products</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="filter-product">Filter</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="add">Add</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/crud-select">Crud-Select</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/crud-add">Crud-Add</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/comp1">Comp1</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/comp2">Comp2</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/comp3">Comp3</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Task">Task</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/cycle">cycle</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/parent">Parent</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/classa">Class A</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/maina">Main</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/redux-store">Redux store</Link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><Link class="dropdown-item" to="about">About</Link></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;