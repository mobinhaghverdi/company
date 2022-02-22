import React, { useState } from 'react';



const NavItem = ({ id, name, angle, url }) => {

    const [list, setList] = useState(false)

    let { dropdown } = require("../../../data/data.json");

    let dropFiles = dropdown.filter((item) => item.itemfor === id);

    const changeNavStyle = () => {
        if (window.innerWidth > 1200) {
            setList(!list);
        } else {
            return null;
        }
    }

    return (
        <li className='nav-li' onClick={() => setList(!list)} onMouseEnter={() => changeNavStyle()}  onMouseLeave={() => changeNavStyle()} >
            <a href={url}>
                <span>{name}</span>
                {angle ? <i className={ list ? 'fa-solid fa-angle-down active' : 'fa-solid fa-angle-down ' } ></i> : null}
            </a>
            <ul className='dropdown'>
                {list ? dropFiles.map(it => (
                    <li key={Math.random() * it.itemfor}><a href='#'>{it.name}</a></li>
                )) :
                    null
                }
            </ul>
        </li>
    );
}

export default NavItem;