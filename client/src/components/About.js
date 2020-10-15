import React from 'react';
import Dave from '../assests/DaveDeFazio-crop.png';

function About() {
  return (
    <div className='about-container'>
      <div className='about-flex'>
        <img src={Dave} alt='Headshot of Dave DeFazio' className='headshot' />
        <p className='about-text'>
          <strong>StrategyCorps partner Dave DeFazio</strong> graduated from
          Ohio Wesleyan University with a B.A. in Economics and Mathematics.
          Over the years, he has found great success and satisfaction in
          exploring the intersection of data, marketing, and technology. Dave’s
          extensive ﬁnancial services experience and continuous research in the
          ﬁeld help him ensure that each product and service meets the needs of
          today’s ﬁnancial institutions. At StrategyCorps, he leads and manages
          the company’s direct sales eﬀorts while working directly with ﬁnancial
          institutions to design, build, and implement a variety of checking
          solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
