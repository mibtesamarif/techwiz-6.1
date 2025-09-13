import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CareerBank from "./pages/CareerBank";
import Quiz from "./pages/Quiz";
import Multimedia from "./pages/Multimedia";
import SuccessStories from "./pages/SuccessStories";
import Resources from "./pages/Resources";
import Feedback from "./pages/Feedback";
import AdmissionAndCoaching from "./pages/Coaching";
import Bookmarks from "./pages/Bookmarks";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";

function App() {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("userType")) {
      setHasVisited(true);
    }
  }, []);

  const handleContinue = () => {
    setHasVisited(true);
  };

  if (!hasVisited) {
    return <LandingPage onContinue={handleContinue} />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careerbank" element={<CareerBank />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/multimedia" element={<Multimedia />} />
            <Route path="/successstories" element={<SuccessStories />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/admission&coaching" element={<AdmissionAndCoaching />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;