import NavBar from "./components/layout/navbar/Navbar";
import FetchingData from "./components/pages/fetchingData/FetchingData";
import FetchingDb from "./components/pages/fetchingDb/FetchingDb";
// import ItemListContainer from "./components/pages/itemList/itemListContainer";

function App() {

  return (

    <div>
      <NavBar />
      {/* <ItemListContainer /> */}
      {/* <FetchingData /> */}
      <FetchingDb />
    </div>

  );

}


export default App;
