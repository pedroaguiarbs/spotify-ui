import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Header() {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>
      <div className="flex items-end gap-2">
        <button className="rounded-full bg-black/40 w-8 h-8 p-1">
          <GroupsIcon fontSize="small" />
        </button>
        <button className="rounded-full bg-black/40 w-8 h-8 p-1">
          <NotificationsNoneIcon fontSize="small" />
        </button>
        <img
          src="/profile.png"
          alt="profile"
          className="w-8 h-8 rounded-full bg-black/40 p-1"
        />
      </div>
    </div>
  );
}

export default Header;
