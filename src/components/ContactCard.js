import React from "react";
import user from "../images/user.png";


const ContactCard = (props) => {
    //const { id, email, name}  = props.contact;
    return (
        <div className="item">
          <img className="ui avatar image" src={user} alt="user"/>
          <div className="content">
            <div className="header">{props.contact.name}</div>
            <div>{props.contact.email}</div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px"} }></i>
          </div>
        </div> 

);

};

export default ContactCard;