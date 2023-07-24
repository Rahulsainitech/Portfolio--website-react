
import React from "react";
import Card from "./Card";
import Icondata from "./Icondata";



const Procard = () => {

    return (
        <>
                  <h3 className="col-12 col-md-12 text-center skill pt-5">My Skills</h3>
            <div className="procard">
                <div className="content">
                    {Icondata.map((val) => {
                        return (
                            <Card icon={val.icon} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Procard;