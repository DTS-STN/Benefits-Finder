import PropTypes from "prop-types";
import { SearchBar } from "../atoms/SearchBar";

export function Header(props) {
  return (
    <header>
      <div className="layout-container">
        <a href="#">
          <img src="#" alt="Governement of Canada" />
          <span lang="en">Government of Canada </span>
          <span lang="fr">Gouvernment du Canada</span>
        </a>
      </div>

      <div className="layout-container">
        <a href="#">Français</a>
        <SearchBar placeholder={"Search Canada.ca"} dataCy={"search-bar"} />
      </div>

      <nav className="layout-container">Menu</nav>
    </header>
  );
}

Header.PropTypes = {};
