import React from "react";
import "./MagicWallItem.scss";

const MagicWallItem = ({ src, alt }) => {
  return (
    <div className="magic_wall_item lazyload">
      <img src={src} alt="images" />
      <div className="hover-content"></div>
      <a href="#" className="colorbox"></a>
    </div>
  );
};

export default MagicWallItem;
