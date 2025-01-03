import React from 'react';
import BlogSetupPage from './Blogsetuppage';
import App2 from './App2';
import KnowledgeBase from './KnowledgeBase'
import RomanticSection from './Romantic';
import WritingSpace from './WritingSpac'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './Contactus';
import RegistrationForm from './RegistrationForm';
import PoemExplorer from './PoemsData';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Add BlogSetupPage as a route */}
          <Route path="/" element={<BlogSetupPage />} />
          <Route path="/app2" element={<App2 />} />
          <Route path="/knowledgebase" element={<KnowledgeBase />} />
          <Route path="/romanticpoems" element={<RomanticSection />} />
          <Route path="/writingspace" element={<WritingSpace />} />
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/registrationform' element={<RegistrationForm/>}/>
          <Route path='/poemexplore' element={<PoemExplorer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
