import React from "react";


const Menucard = ({ menuData }) => {

    return (
        <>
            <div className="project container">
                <div className="row d-flex ">
                    
                    {menuData.map((curElem) => {
                        const { heading, para, image, link,title } = curElem;
                        return (
                            <>
                                <div className="maincontainer">
                                    <div className="thecard m-3">
                                        <div className="thefront  ">
                                            <img src={image} alt="img" />
                                        </div>
                                        <div className="theback ">
                                            <h4 className="p-2">{title}</h4>
                                            <p className="pl-2">{para}</p>
                                            <a href={link} target="new"><button>Check Now</button></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Menucard;