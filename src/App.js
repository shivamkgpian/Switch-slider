import Switchcase from "./components/djs"
import { Route, Routes } from "react-router-dom";
// Hello

function App() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      {/* <Container> */}
      <Routes>
        <Route path="/" element={<Switchcase />} />
        {/* <Route path="/create" element={<Invoice />} />
          <Route path="/create/:id" element={<Invoice />} />
          <Route path="/edit/:id" element={<Invoice />} /> */}
      </Routes>
      {/* </Container> */}
    </div>
  );
}

export default App;
