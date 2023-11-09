import React from "react";

function AdminSidebarItem({ menu, isActive }) {
  return isActive === true ? (
    <div className="sidebar-item active">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="sidebar-item ">
      <p>{menu.name}</p>
    </div>
  );
}

export default AdminSidebarItem;
