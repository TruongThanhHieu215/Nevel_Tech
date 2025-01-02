import Header from "./component/Header/Header";
import MainLayout from "./component/Layout/Main/Main.layout";
import MainComponent from "./component/Main/Main.component";
import SideBar from "./component/SideBar/Sidebar";
import "./index.scss";
import HotGames from "./component/HostGame/HostGame";
import { hotGames, hottestCategory } from "./utils/constants";
import HottestCategory from "./component/HostCategory/HostCategories";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <MainLayout>
        <MainComponent
          data={hotGames}
          Component={HotGames}
          title="Hot Game"
        ></MainComponent>
        <MainComponent
          data={hottestCategory}
          Component={HottestCategory}
          title="Hottest Category"
        ></MainComponent>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
