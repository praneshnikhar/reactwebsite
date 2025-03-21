


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
// import Testimonials from "./components/Testimonials";
import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";
import Skills from "./components/skills"; // Import Skills component
import Contact from "./components/Contact"; // Import Contact component

const Home = () => (
  <>
    <Hero />
    <About />
    <Events />
    {/* <Testimonials /> */}
    <BlogPosts />
  </>
);

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-white dark:bg-ieee-dark transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/events"
            element={<div className="pt-20">Events Page</div>}
          />
          <Route
            path="/blog"
            element={<div className="pt-20">Blog Page</div>}
          />
          <Route
            path="/societies"
            element={<div className="pt-20">Societies Page</div>}
          />
          <Route
            path="/team"
            element={<div className="pt-20">Team Page</div>}
          />
          <Route
            path="/contact"
            element={<Contact />} // Use the Contact component
          />
          <Route
            path="/skills"
            element={<Skills />} // Add route for Skills
          />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
