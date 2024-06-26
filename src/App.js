import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BezierProvider, LightFoundation } from "@channel.io/bezier-react";
import SettingPage from "./pages/settingPage.jsx";
import AnimalTestPage from "./pages/AnimalTestPage";
import GuidePage from "./pages/GuidePage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SettingPage />} />
                <Route path="/guide" element={<GuidePage />} />
                <Route
                    path="/test"
                    element={
                        <BezierProvider foundation={LightFoundation}>
                            <AnimalTestPage />
                        </BezierProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
