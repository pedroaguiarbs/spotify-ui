import {
  ListMusic,
  Maximize2,
  MicVocal,
  MonitorSpeaker,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";

import PlayCircleIcon from "@mui/icons-material/PlayCircle";

function Footer() {
  return (
    <footer className="bg-black px-6 py-4 flex items-center justify-between fixed bottom-0 left-0 w-full">
      <div className="flex items-center gap-3">
        <img src="/notion.jpeg" alt="notion" className="w-14 h-14 rounded-md" />
        <div className="flex flex-col">
          <strong className="font-normal">Notion</strong>
          <span className="text-xs text-zinc-400">The Rare Occasions</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 ml-24">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />
          <button className="flex items-center justify-center text-white ml-auto">
            <PlayCircleIcon style={{ fontSize: "2.5rem" }} />
          </button>
          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-[32rem] bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">2:15</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <MicVocal size={20} />
        <ListMusic size={20} />
        <MonitorSpeaker size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}

export default Footer;
