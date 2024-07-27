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
          Hello! I am Ishita Sharma, a highly motivated and detail-oriented engineering student, eager to contribute my skills and
          knowledge to a related role of website development using MERN STACK or just front-end development. I work towards problem solving approach.
        </p>
        <br />
        <h1 className=" text-blue-700  dark:text-blue-500 underline font-semibold text-xl">
          Education
        </h1>
        <span>
        <p> <b>Institute Of Engineering and Technology-DAVV-Indore</b> <span>November, 2021 - July, 2025 (Expected) </span><span> Information Technology Branch, Fourth Year (7th SEMESTER)</span> </p> 
       <p> <b>Mount Carmel School (ISC Board)-Bhopal</b>  <span>2019 - 2021 </span><span> Class 12th - 93.6% (Physics, Chemistry, Mathematics, Computer Science (Java))  </span></p>
       
       <p><b>Mount Carmel School (ICSE Board)-Bhopal</b>   <span>2017 - 2018 </span> <span> Class 10th - 93%</span></p> 
        </span>
        <br />
        <h1 className=" text-blue-700 dark:text-blue-500 underline font-semibold text-xl">
          Skills
        </h1>
        <span>
        <ul className="list-disc">
        <li >Programming Languages: C++, Java and JavaScript </li>
        <li>Database Management: MySQL, DBMS, MongoDB </li>
        <li>Web Development: HTML, CSS, React, Node.js, Express.js  </li>
        <li>Data Analysis and Visualization: PowerBi </li>
        <li>Soft Skills: Content Writing , Effective Communication , Managemen</li>
        </ul>
        </span>
        <br />
        <h1 className=" text-blue-700 dark:text-blue-500 underline font-semibold text-xl">
          Achievements
        </h1>
        <span>
        <ul className="list-disc">
        <li>Interned in Content Research & Development at ATZA.</li>
        <li>Participated in Smart India Hackathon and inter-college competitions.</li>
        <li>Served as part of organizing team for college events under clubssuch as NSS and the Entrepreneurial Cell.</li>
        <li>Completed online courses in emerging technologies such as Postman, SQL, Next JS to enhance continuous learning on
        platform such as Hackerrank.</li>
      </ul>
        </span>
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