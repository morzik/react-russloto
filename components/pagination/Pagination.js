import React, {useState} from "react";


const Pagination = ({list}) => {
  // const myRef = useRef(null)
  // const executeScroll = () => myRef.current.scrollIntoView();
  const arr = [];

  const [isActive, setActive] = useState(list[0].id);
  const listItems = list.map(({href,id}) => (
    <li className={"pagination__item"} key={id} ref={(item) => { arr.push(item) }}>
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

