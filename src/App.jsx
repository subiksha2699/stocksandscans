import "./App.css";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./utility/theme";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import FileLoader from './components/FileLoader';

const Stocks = lazy(() => import("./components/Stocks"));
const SubCriteria = lazy(() => import("./components/SubCriteria"));
const Variables =  lazy(() => import("./components/Variables"));



function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ height: "100vh", overflow: "hidden", background: "#FFFAFA" }}>
        <Router>
          <Suspense fallback={<FileLoader />}>
            <Routes>
              <Route path="/stocks" exact element={<Stocks />}></Route>
              <Route path="/subcriteria/:index" element={<SubCriteria />}></Route>
              <Route path="/variable/:index/:param1/:varIndex" element={<Variables />}></Route>
              <Route path="*" element={<Navigate to="/stocks" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
