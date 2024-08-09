import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PushPinIcon from "@mui/icons-material/PushPin";
import HomeIcon from "@mui/icons-material/Home";
import { Library, Search } from "lucide-react";
import PlaylistItem from "./playlist-item";

function Sidebar() {
  return (
    <aside className="w-80 p-3">
      <nav className="space-y-6 bg-white/5 p-5 rounded-lg mt-2">
        <a
          href="#"
          className="flex items-center gap-3 text-base font-semibold text-zinc-200"
        >
          <HomeIcon style={{ fontSize: "24px" }} /> Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-base font-semibold text-zinc-200"
        >
          <Search /> Search
        </a>
      </nav>

      <nav className="mt-3 bg-white/5 p-3 flex flex-col gap-3 rounded-lg">
        <div className="flex gap-16 w-full justify-between p-2">
          <a
            href="#"
            className="flex items-center gap-3 text-base font-semibold text-zinc-200"
          >
            <Library /> Your Library
          </a>

          <div className="flex items-center gap-3">
            <AddIcon />
            <ArrowForwardIcon />
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <a
            href=""
            className="bg-zinc-800 py-2 px-4 rounded-full hover:bg-zinc-700"
          >
            Playlists
          </a>
          <a
            href=""
            className="bg-zinc-800 py-2 px-4 rounded-full hover:bg-zinc-700"
          >
            Podcasts
          </a>
          <a
            href=""
            className="bg-zinc-800 py-2 px-4 rounded-full hover:bg-zinc-700"
          >
            Artists
          </a>
        </div>
        {/* Liked Songs and Playlists */}
        <PlaylistItem
          src="/liked.jpg"
          title="Liked Songs"
          description="Playlist - 10 songs"
          icon={<PushPinIcon />}
        />
        <PlaylistItem
          src="/oasis.jpg"
          title="This is Oasis"
          description="Playlist - pedroaguiarbs"
          icon={undefined}
        />
        <PlaylistItem
          src="/morada.jpg"
          title="This is Morada"
          description="Playlist - pedroaguiarbs"
          icon={undefined}
        />
        <PlaylistItem
          src="/game.jpeg"
          title="Gaming Chill"
          description="Playlist - pedroaguiarbs"
          icon={undefined}
        />
        <PlaylistItem
          src="/gym.jpeg"
          title="Beast Mode"
          description="Playlist - pedroaguiarbs"
          icon={undefined}
        />
      </nav>
    </aside>
  );
}

export default Sidebar;
