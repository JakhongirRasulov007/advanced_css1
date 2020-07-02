import React from 'react';
import Header from "./components/header.component";
import "./sass/main.scss";
import AboutSection from "./components/about.section.components"
import Features from "./components/features.section"
import Tours from "./components/section.tours.component"
import Stories from "./components/stories.component"
import Book from "./components/book.component"
import Footer from "./components/footer.component"
import Navigation from './components/navigation.component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header/>
      <AboutSection />
      <Features />
      <Tours />
      <Stories />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
