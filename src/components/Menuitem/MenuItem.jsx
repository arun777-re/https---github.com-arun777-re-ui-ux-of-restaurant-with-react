import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, tag, price }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem_head">
        <div className="app__menuitem-title">
          <p style={{ color: "#DCAA87" }}>{title}</p>
          <div className="app__menuitem-sub">
            <p style={{ color: "#AAA" }}>{tag}</p>
          </div>
        </div>
        <div className="app__menuitem-dash"></div>

        <div className="app__menuitem-price">
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
