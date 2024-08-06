import {
  ChevronLeft,
  ChevronRight,
  House,
  Library,
  ListMusic,
  Maximize2,
  MicVocal,
  MonitorSpeaker,
  Play,
  Repeat,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";

function App() {
  return (
    <>
      <div className="h-screen l">
        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-950 p-6">
            <nav className="space-y-5">
              <a
                href="#"
                className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
              >
                <House />
                Home
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
              >
                <Search />
                Search
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
              >
                <Library />
                Your Library
              </a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                Morada
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                Catedral
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                Chill Mix
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                Marombar
              </a>
              <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100">
                Marcos Almeida
              </a>
            </nav>
          </aside>
          <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <ChevronRight />
              </button>
            </div>

            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-24 h-24"
                />
                <strong>Yellow</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-24 h-24"
                />
                <strong>Yellow</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>

              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-24 h-24"
                />
                <strong>Yellow</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-24 h-24"
                />
                <strong>Yellow</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-24 h-24"
                />
                <strong>Yellow</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
              <a className="bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-24 h-24"
                />
                <strong>Yellow</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                  <Play fill="bg-black" />
                </button>
              </a>
            </div>

            <h2 className="font-semibold text-2xl mt-10">
              Made for Pedro Henrique Aguiar
            </h2>

            <div className="grid grid-cols-5 gap-4 mt-4">
              <a className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-full h-full "
                />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">
                  Coldplay, Wallows, The Srokes and more
                </span>
              </a>
              <a className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-full h-full "
                />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">
                  Coldplay, Wallows, The Srokes and more
                </span>
              </a>
              <a className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-full h-full "
                />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">
                  Coldplay, Wallows, The Srokes and more
                </span>
              </a>
              <a className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-full h-full "
                />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">
                  Coldplay, Wallows, The Srokes and more
                </span>
              </a>
              <a className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10 transition-colors">
                <img
                  src="/coldplay.jpeg"
                  alt="coldplay"
                  className="w-full h-full "
                />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">
                  Coldplay, Wallows, The Srokes and more
                </span>
              </a>
            </div>
          </main>
        </div>

        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed bottom-0 left-0 w-full">
          <div className="flex items-center gap-3">
            <img src="/coldplay.jpeg" alt="coldplay" className="w-14 h-14" />
            <div className="flex flex-col">
              <strong className="font-normal">Yellow</strong>
              <span className="text-xs text-zinc-400">Coldplay</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-6">
              <Shuffle size={20} className="text-zinc-200" />
              <SkipBack size={20} className="text-zinc-200" />
              <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                <Play fill="bg-zinc-900" />
              </button>
              <SkipForward size={20} className="text-zinc-200" />
              <Repeat size={20} className="text-zinc-200" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400">0:31</span>
              <div className="h-1 rounded-full w-96 bg-zinc-600">
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
