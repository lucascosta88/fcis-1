"use client"

import React from 'react';
import Page1 from './_pages/page1';
import Page2 from './_pages/page2';
import Page3 from './_pages/page3';
import Page4 from './_pages/page4';
import Page5 from './_pages/page5';
import Page6 from './_pages/page6';
import Page7 from './_pages/page7';
import Page8 from './_pages/page8';
import Page9 from './_pages/page9';
import Page10 from './_pages/Page10';
import useWindowSize from './_pages/mobileIdentifier';
import Page1Mobile from './_pages/page1Mobile';
import Page2Mobile from './_pages/page2Mobile';
import Page3Mobile from './_pages/page3Mobile';
import Page4Mobile from './_pages/page4Mobile';
import Page5Mobile from './_pages/page5Mobile';


export default function Home() {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  return (
    <>
      {isMobile ? (
        <>
          <Page1Mobile />
          <Page2Mobile />
          <Page3Mobile />
          <Page4Mobile />
          <Page5Mobile />
        </>
      ) : (
        <>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Page8 />
          <Page9 />
          <Page10 />
        </>
      )}
    </>
  );
}