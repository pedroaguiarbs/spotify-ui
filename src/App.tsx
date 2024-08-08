import {
  ChevronLeft,
  ChevronRight,
  Library,
  ListMusic,
  Maximize2,
  MicVocal,
  MonitorSpeaker,
  Repeat,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";

import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PushPinIcon from "@mui/icons-material/PushPin";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";

function App() {
  return (
    <>
      <div className="h-screen l">
        <div className="flex flex-1">
          <aside className="w-80 p-3">
            <nav className="space-y-6 bg-white/5 p-5 rounded-lg mt-2">
              <a
                href="#"
                className="flex items-center gap-3 text-base font-semibold text-zinc-200"
              >
                <HomeIcon style={{ fontSize: "24px" }} />
                Home
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-base font-semibold text-zinc-200"
              >
                <Search />
                Search
              </a>
            </nav>

            <nav className="mt-3 bg-white/5 p-3 flex flex-col gap-3 rounded-lg">
              <div className="flex gap-16 w-full justify-between p-2">
                <a
                  href="#"
                  className="flex items-center gap-3 text-base font-semibold text-zinc-200"
                >
                  <Library />
                  Your Library
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
                  Posdcasts
                </a>
                <a
                  href=""
                  className="bg-zinc-800 py-2 px-4 rounded-full hover:bg-zinc-700"
                >
                  Artists
                </a>
              </div>
              <div className="flex items-center gap-3 my-1">
                <img
                  src="/liked.jpg"
                  alt="coldplay"
                  className="w-14 h-14 rounded-md"
                />
                <div className="flex flex-col">
                  <strong className="font-normal">Liked Songs</strong>
                  <div className="flex items-center space-x-1">
                    <a className="text-green-500 rotate-45">
                      <PushPinIcon />
                    </a>
                    <span className="text-sm text-zinc-400">
                      Playlist - 10 songs
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 my-1">
                <img
                  src="/oasis.jpg"
                  alt="coldplay"
                  className="w-14 h-14 rounded-md"
                />
                <div className="flex flex-col">
                  <strong className="font-normal">This is Oasis</strong>
                  <span className="text-sm text-zinc-400">
                    Playlist - pedroaguiarbs
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 my-1">
                <img
                  src="/morada.jpg"
                  alt="coldplay"
                  className="w-14 h-14 rounded-md"
                />
                <div className="flex flex-col">
                  <strong className="font-normal">This is Morada</strong>
                  <span className="text-sm text-zinc-400">
                    Playlist - pedroaguiarbs
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 my-1">
                <img
                  src="/game.jpeg"
                  alt="coldplay"
                  className="w-14 h-14 rounded-md"
                />
                <div className="flex flex-col">
                  <strong className="font-normal">Gaming Chill</strong>
                  <span className="text-sm text-zinc-400">
                    Playlist - pedroaguiarbs
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 my-1">
                <img
                  src="/gym.jpeg"
                  alt="coldplay"
                  className="w-14 h-14 rounded-md"
                />
                <div className="flex flex-col">
                  <strong className="font-normal">Beast Mode</strong>
                  <span className="text-sm text-zinc-400">
                    Playlist - pedroaguiarbs
                  </span>
                </div>
              </div>
            </nav>
          </aside>
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
              <a
                href=""
                className="bg-white text-black py-2 px-4 rounded-full "
              >
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
                  {/* <Play fill="bg-black" /> */}
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
                  {/* <Play fill="bg-black" /> */}
                  <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
                </button>
              </a>

              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-24 h-24"
                />
                <strong>Yellow</strong>
                <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
                  {/* <Play fill="bg-black" /> */}
                  <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
                </button>
              </a>
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img src="/notion.jpeg" alt="coldplay" className="w-24 h-24" />
                <strong>Notion</strong>
                <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
                  {/* <Play fill="bg-black" /> */}
                  <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
                </button>
              </a>
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img src="/liked.jpg" alt="coldplay" className="w-24 h-24" />
                <strong>Liked Songs</strong>
                <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
                  {/* <Play fill="bg-black" /> */}
                  <PlayCircleIcon style={{ fontSize: "3.5rem" }} />
                </button>
              </a>
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img src="/fhop.jpg" alt="coldplay" className="w-24 h-24" />
                <strong>This is Fhop Music</strong>
                <button className="flex items-center justify-center text-green-400 ml-auto mr-5 invisible group-hover:visible ">
                  {/* <Play fill="bg-black" /> */}
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
                  Coldplay, Wallows, The Srokes and more
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
                  Coldplay, Wallows, The Srokes and more
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
                  Coldplay, Wallows, The Srokes and more
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
                  Coldplay, Wallows, The Srokes and more
                </span>
              </a>
              <a className=" p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
                <img
                  src="/dev.jpeg"
                  alt="coldplay"
                  className="w-full h-full rounded-md"
                />
                <strong className="font-semibold px-1">
                  Dev Sem Fronteiras
                </strong>
                <span className="text-sm text-zinc-400 px-1">
                  Coldplay, Wallows, The Srokes and more
                </span>
              </a>
            </div>
          </main>
        </div>

        <footer className="bg-black  px-6 py-4 flex items-center justify-between fixed bottom-0 left-0 w-full">
          <div className="flex items-center gap-3">
            <img
              src="/notion.jpeg"
              alt="coldplay"
              className="w-14 h-14 rounded-md"
            />
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
                {/* <Play fill="bg-black" /> */}
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
      </div>
    </>
  );
}

export default App;
