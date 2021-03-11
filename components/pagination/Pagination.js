import React, {useState, useEffect} from "react";


const Pagination = ({list}) => {

  const [activeId, setActive] = useState(0);

  useEffect(() => {
    const html = document.documentElement;
    const all = document.querySelectorAll("section");

    function lamdaMiddle(i) {
      return Math.abs(html.clientHeight / 2 - (all[i].getBoundingClientRect().y + all[i].getBoundingClientRect().height / 2));
    }

    let min = lamdaMiddle(0);
    let minI = 0;
    for (var i = 0; i < all.length; i++) {
      if (min > lamdaMiddle(i)) {
        min = lamdaMiddle(i);
        minI = i;
      }
    }

    setActive(minI);
  });

  const listItems = list.map(({href},index) => (
    <li className={`pagination__item ${activeId === index?"pagination__item_active":""}`} key={index}>
      <a href={href}/>
    </li>
  ))
  return (
    <nav className={"pagination"}>
      <ul className="pagination__list">
        {listItems}
      </ul>
    </nav>
  )
};

export default Pagination;

