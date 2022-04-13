import React from "react";

const SidebarOption = ({ Icon, title }) => {
  const getTitleClasses = () =>
    Icon ? "sidebar__option-heading" : "sidebar__option-title";

  return (
    <div className="sidebar__option clickable">
      {Icon && <Icon className="sidebar__option-icon" />}

      <h4 className={getTitleClasses()}>{title}</h4>
    </div>
  );
};

export default SidebarOption;
