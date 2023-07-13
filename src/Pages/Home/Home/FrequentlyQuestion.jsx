import React from 'react';
import SectionTitle from '../../../components/SectionTitle';

const FrequentlyQuestion = () => {
    return (
       <div>

<SectionTitle heading={'Frequently Asked Questions'}></SectionTitle>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-2xl font-bold text-red-400">
  What is the best online class for makeup artist?
  </div>
  <div className="collapse-content"> 
    <p>The best online class for makeup artists depends on your skill level and the type of makeup artistry you want to learn. If you’re a beginner, consider taking an introductory course that covers basic techniques such as blending, contouring, brow-shaping and color theory. For more advanced makeup artists, there are courses available on more specialized techniques such as airbrush makeup and special effects makeup.

The most important thing is to find a course that meets your needs. Look for courses taught by experienced professionals who can provide detailed instruction and helpful feedback. Also, be sure to check out reviews to make sure the class is worth your time and money.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-2xl font-bold text-red-400">
  Can I learn makeup online?
  </div>
  <div className="collapse-content"> 
    <p>Yes, learning makeup online is a great way to learn how to apply makeup correctly and confidently. There are multiple courses available online that provide step-by-step tutorials, tips and advice on everything from foundation matching to contouring techniques. Additionally, many of these courses offer video demonstrations which can be helpful for visual learners. Finally, many of these courses are very reasonably priced and most offer money-back guarantees. So, learning makeup online is an affordable and convenient way to improve your skill set.</p>
  </div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-2xl font-bold text-red-400">
  Which course is best in makeup?
  </div>
  <div className="collapse-content"> 
    <p>The best course for makeup depends on your individual needs and goals. However, some of the most popular online courses include: Makeup Artistry Fundamentals by the Breakthrough Academy, Mastering the Basics of Makeup by Modern Glamour, and Airbrush Makeup Mastery by Ultimate Airbrush Makeup Academy.</p>
  </div>
</div>

<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-2xl font-bold text-red-400">
  Where can I learn makeup online for free?
  </div>
  <div className="collapse-content"> 
    <p>The best way to learn makeup online for free is through YouTube tutorials. There are many experienced makeup artists who post helpful videos on how to apply and create different looks. Additionally, there are bloggers and magazines that offer beauty tips and tricks as well. However, since these tutorials are typically not as comprehensive as paid courses, it’s important to do your research and read reviews before trying any new techniques.

Overall, there are many online courses available for makeup artists of all skill levels. Be sure to find a course that is right for you and provides detailed instruction and helpful feedback. Additionally, you can supplement your learning with free YouTube tutorials and beauty tips from bloggers and magazines.</p>
  </div>
</div>
       </div>
    );
};

export default FrequentlyQuestion;