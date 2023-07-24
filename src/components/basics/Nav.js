import React from 'react';

const Nav = ({filterItem,menuList}) => {
    return (
        <>
            <nav className="navbar1">
                <div className="btn-group">
                {menuList.map((curElem)=>{
                    return(
                        <button className="btn-group__item " onClick={() => filterItem(curElem)}> {curElem}</button>
                    )
                })}
                </div>
            </nav>
        </>
    )
}
export default Nav;