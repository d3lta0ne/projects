import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";

import "../styles/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar flex flex-col container h-full overflow-hidden ">
      <div className="sidebar__header flex justify-between p-5 border-4 border-solid border-gray-200">
        <Avatar />
        <div className="sidebar__headerRight flex align-center justify-between min-w-1/10 spac">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidvar__searchContainer flex align-center bg-white w-full h-9 rounded-lg">
          <SearchIcon className="p-1" />
          <input
            className="border-none ml-2"
            placeholder="Search or start a new chat"
            type="text"
          />
        </div>
      </div>
      <div className="sidebar__chats flex flex-col space-y-3 flex-1 overflow-scroll bg-gray-600">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
