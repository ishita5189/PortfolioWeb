import React from 'react'

function About() {
  return (
   <>
   <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    > 
     <div>
        <h1 className="text-3xl font-bold mb-2 text-blue-700  dark:text-blue-500 hover:underline">ABOUT</h1>
        <p>
          Hello, I am Ishita Sharma, a highly motivated and detail-oriented engineering student, eager to contribute my skills and
          knowledge to a related role of website development using MERN STACK or just front-end development. I work towards problem solving approach.
        </p>
        <br />
        <h1 className=" text-blue-700  dark:text-blue-500 underline font-semibold text-xl">
          Education
        </h1>
        <span>
        <b>Institute Of Engineering and Technology-DAVV-Indore </b> 
        <p>November, 2021 - July, 2025 (Expected)</p>
       <p>Information Technology Branch, Fourth Year (7th SEMESTER)</p> 
       <br/>
       <b>Mount Carmel School (ISC Board)-Bhopal</b> 
        <p>2019 - 2021</p>
       <p>Class 12th - 93.4% (Physics, Chemistry, Mathematics, Computer Science (Java))  </p>
       <b>Mount Carmel School (ICSE Board)-Bhopal</b> 
        <p>2017 - 2018</p> 
       <p>Class 10th - 93%</p> 
        </span>
        <br />
        <br />
        <h1 className=" text-blue-700 dark:text-blue-500 underline font-semibold text-xl">
          Skills
        </h1>
        <span>
        <b>Technical Skills</b> 
        <ul className="list-disc">
        <li >Programming Languages: C++, Java and JavaScript </li>
        <li>Database Management: MySQL, DBMS, MongoDB </li>
        <li>Web Development: HTML, CSS, React, Node.js, Express.js  </li>
        <li>Data Analysis and Visualization: PowerBi        </li>
        </ul>
        </span>
        <br/>
        <span>
        <b>Soft Skills</b> 
        <ul className="list-disc">
        <li>Teamwork </li>
        <li>Effective Communication </li>
        <li>Management  </li>
        </ul>
        </span>
        <br />
        <br />
        <h1 className=" text-blue-700 dark:text-blue-500 underline font-semibold text-xl">
          Achievements
        </h1>
        <span>
        <ul className="list-disc">
        <li>Interned in Content Research & Development at ATZA.</li>
        <li>Participated in SmartIndia Hackathon.</li>
        <li>Served as part of organizing team for college events under clubssuch as NSS and the Entrepreneurial Cell.</li>
        <li>Consistently solving problems based on Data Structure and Algorithm. Profile - Leetcode</li>
      </ul>
        </span>
        <br />
        <br />
        <h1 className=" text-blue-700 dark:text-blue-500 underline font-semibold text-xl">
        Interest and Hobbies
        </h1>
      <ul className="list-disc">
        <li>Photography: Wildlife, Nature, Travel and Abstract.</li>
        <li>Reading: Engaged in self-growth and fiction literature.</li>
        <li>Artwork and Editing: Proficient in creating and editing artwork.</li>
      </ul>
      <br />
      <h1 className=" text-blue-700 dark:text-blue-500 underline font-semibold text-xl">Languages</h1>
      <ul className="list-disc">
        <li>English</li>
        <li>Hindi</li> </ul>
      </div>
    </div>
   </>
  )
}

export default About;