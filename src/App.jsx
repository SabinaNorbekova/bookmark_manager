import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Navbar from "./components/navbar"
import FirstSection from "./components/sectionOne"
import Features from "./components/features";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <FirstSection />
              <Features/>
            </>
            
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
