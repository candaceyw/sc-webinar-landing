import React from 'react';
import Dave from '../assests/DaveDeFazio.png';

function About() {
  return (
    <div>
      <img src={Dave} alt='Headshot of Dave DeFazio' className='headshot' />
      <p>
        StrategyCorps partner Dave DeFazio graduated from Ohio Wesleyan
        University with a B.A. in Economics and Mathematics. Over the years, he
        has found great success and satisfaction in exploring the intersection
        of data, marketing, and technology. Dave’s extensive ﬁnancial services
        experience and continuous research in the ﬁeld help him ensure that each
        product and service meets the needs of today’s ﬁnancial institutions. At
        StrategyCorps, he leads and manages the company’s direct sales eﬀorts
        while working directly with ﬁnancial institutions to design, build, and
        implement a variety of checking solutions.
      </p>
    </div>
  );
}

export default About;
