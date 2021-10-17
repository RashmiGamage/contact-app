import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";


const ContactCard = (props) => {
    const { id, email, name}  = props.contact;
    return (
        <div className="item">
          <i 
            className="trash alternate outline icon" 
                style={{ color: "red", marginTop: "7px", float: "right"} }
            onClick={ () => props.clickHander(id)}
            ></i>

          <img className="ui avatar image" src={user} alt="user"/>
          <div className="content">
            <Link to= {{pathname: `/contact/${id}`, state:{contact: props.contact}}}>
              <div className="header">{name}</div>
              <div>{props.contact.email}</div>
            </Link>
          </div>
        </div> 

);

};

export default ContactCard;