import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 p-6 bg-white/5 rounded-lg my-5">
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
            alt="coldplay"
            className="w-8 h-8 rounded-full bg-black/40 p-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm my-5">
        <a href="" className="bg-white text-black py-2 px-4 rounded-full ">
          All
        </a>
        <a
          href=""
          className="bg-zinc-800 py-2 px-4 rounded-full hover:bg-zinc-700"
        >
          Music
        </a>
        <a
          href=""
          className="bg-zinc-800 py-2 px-4 rounded-full hover:bg-zinc-700"
        >
          Podcasts
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
          <img
            src="/felipe.jpeg"
            alt="Saudade - Felipe Rodrigues"
            className="w-24 h-24"
          />
          <strong>Saudade</strong>
          <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
            <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
          </button>
        </a>
        <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
          <img
            src="/alex.jpeg"
            alt="Red wine super nova - Alex Melton"
            className="w-24 h-24"
          />
          <strong>Red Wine Supernova</strong>
          <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
            <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
          </button>
        </a>

        <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
          <img src="/coldplay.jpeg" alt="coldplay" className="w-24 h-24" />
          <strong>Yellow</strong>
          <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
            <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
          </button>
        </a>
        <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
          <img src="/notion.jpeg" alt="coldplay" className="w-24 h-24" />
          <strong>Notion</strong>
          <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
            <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
          </button>
        </a>
        <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
          <img src="/liked.jpg" alt="coldplay" className="w-24 h-24" />
          <strong>Liked Songs</strong>
          <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
            <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
          </button>
        </a>
        <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
          <img src="/fhop.jpg" alt="coldplay" className="w-24 h-24" />
          <strong>This is Fhop Music</strong>
          <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
            <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Pedro Henrique Aguiar
      </h2>

      <div className="grid grid-cols-5 gap-4 mt-4">
        <a className=" p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
          <img
            src="/daily1.jpeg"
            alt="coldplay"
            className="w-full h-full rounded-md"
          />
          <strong className="font-semibold px-1">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400 px-1">
            Coldplay, Wallows, The Strokes and more
          </span>
        </a>
        <a className=" p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
          <img
            src="/morada.jpg"
            alt="coldplay"
            className="w-full h-full rounded-md"
          />
          <strong className="font-semibold px-1">This is Morada</strong>
          <span className="text-sm text-zinc-400 px-1">
            Coldplay, Wallows, The Strokes and more
          </span>
        </a>
        <a className=" p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
          <img
            src="/thiscoldplay.jpeg"
            alt="coldplay"
            className="w-full h-full rounded-md"
          />
          <strong className="font-semibold px-1">This is Coldplay</strong>
          <span className="text-sm text-zinc-400 px-1">
            Coldplay, Wallows, The Strokes and more
          </span>
        </a>
        <a className=" p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
          <img
            src="/strokes.jpeg"
            alt="coldplay"
            className="w-full h-full rounded-md"
          />
          <strong className="font-semibold px-1">Bad Decisions</strong>
          <span className="text-sm text-zinc-400 px-1">
            Coldplay, Wallows, The Strokes and more
          </span>
        </a>
        <a className=" p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
          <img
            src="/dev.jpeg"
            alt="coldplay"
            className="w-full h-full rounded-md"
          />
          <strong className="font-semibold px-1">Dev Sem Fronteiras</strong>
          <span className="text-sm text-zinc-400 px-1">
            Coldplay, Wallows, The Strokes and more
          </span>
        </a>
      </div>
    </main>
  );
};

export default MainContent;
