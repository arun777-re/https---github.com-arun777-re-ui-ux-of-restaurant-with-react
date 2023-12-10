import React from "react";
import images from "../../constants/images";
import data from "../../constants/data";
import { Subheading, Menuitem } from "../../components";
import "./Menu.css";
const Menu = () => {
  return (
<div className="specialmenu  flex__center">
    <div className="app__specialmenu section__padding" id="#menu">
      <div className="app__specialmenu-title">
        <Subheading title={"Menu that fits your pallete"} />
        <h1 className="header__h1">Today's Special</h1>
      </div>
      <div className="app__specialmenu-menu">
        <div className="app__specialmenu-menu_wine flex__center">
          <p className="app__specialmenu_menu_heading">Wine & Beer</p>
          <div className="app__specialmenu-menu_item">
            {data.wines.map((items, index) => {
              return <Menuitem tag={items.tags}  title={items.title} price={items.price} key={items.title + index}/>
            })}
          </div>
        </div>
        <div className="app__specialmenu-img">
          <img src={images.menu} alt="images menu" />
        </div>
        <div className="app__specialmenu-menu_cocktail flex__center">
          <p className="app__specialmenu_menu_heading">Cocktails</p>
          <div className="app__specialmenu-menu_item">
            {data.cocktails.map((items, index) => {
              return <Menuitem tag={items.tags} title={items.title} price={items.price} key={items.title + index}/>
            })}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
    </div>

  );
};

export default Menu;
