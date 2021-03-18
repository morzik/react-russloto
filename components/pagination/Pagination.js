import React, {useState, useEffect} from "react";
import { Link } from 'react-scroll';


const Pagination = ({list}) => {

  const [activeId, setActive] = useState(0);

  useEffect(() => {

    function scrollListener (){
      const html = document.documentElement;
      const all = document.querySelectorAll("section");

      function lamdaMiddle(i) {
        const {y,height} = all[i].getBoundingClientRect();
        return Math.abs(html.clientHeight / 2 - (y + height / 2));
      }

      let min = lamdaMiddle(0);
      let minI = 0;
      for (let i = 0; i < all.length; i++) {
        if (min > lamdaMiddle(i)) {
          min = lamdaMiddle(i);
          minI = i;
        }
      }
      setActive(minI);
    }

     document.addEventListener("scroll", scrollListener);

     return () => {
       document.removeEventListener("scroll", scrollListener);
     }
  },[]);


  const listItems = list.map(({href}, index) => (
    <li className={`pagination__item ${activeId === index ? "pagination__item_active" : ""}`} key={index}>
      <Link activeClass="active"
            to={href}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}/>
    </li>
  ));
  return (
    <nav className={"pagination"}>
      <ul className="pagination__list">
        {listItems}
      </ul>
    </nav>
  )
};

export default Pagination;

