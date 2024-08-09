import Sidebar from "./components/sidebar";
import MainContent from "./components/main-content";
import Footer from "./components/footer";

function App() {
  return (
    <div className="h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
