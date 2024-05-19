import { Div } from '@milibrary/mi-style';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import PageLoading from 'components/PageLoading';
import Home from 'pages/home/Home';
import Design from 'pages/design/Design';
import Example1 from 'pages/examples/Example1';
import Example2 from 'pages/examples/Example2';
import Example3 from 'pages/examples/Example3';
import Example4 from 'pages/examples/Example4';
import MiLibrary from 'pages/mi-library/MiLibrary';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
export default React.memo(() => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Div background="primary" overflow="hidden" width="100%" position="relative" height={isLoading && '100vh'}>
        <Navbar />
        {isLoading && <PageLoading />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/milibrary" element={<MiLibrary />} />
          <Route path="/design" element={<Design />} />
          <Route path="/example1" element={<Example1 />} />
          <Route path="/example2" element={<Example2 />} />
          <Route path="/example3" element={<Example3 />} />
          <Route path="/example4" element={<Example4 />} />
          <Route path="*" element={<Navigate to="/"></Navigate>} />
        </Routes>
        <Footer />
      </Div>
    </BrowserRouter>
  );
});

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}