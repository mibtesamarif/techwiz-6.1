// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import CareerBank from "./pages/CareerBank";
import Quiz from "./pages/Quiz";
import Multimedia from "./pages/Multimedia";
import SuccessStories from "./pages/SuccessStories";
import Resources from "./pages/Resources";
import Feedback from "./pages/Feedback";
import Admission from "./pages/Admission";
import Coaching from "./pages/Coaching";
import Bookmarks from "./pages/Bookmarks";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar on top */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career-bank" element={<CareerBank />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/multimedia" element={<Multimedia />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        {/* Footer on bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
