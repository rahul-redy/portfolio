import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an ambitious and passionate student who always thrives to learn new things 
          and keep updated about the new tech in the industry. I have worked on 
          technologies such as Node, React Js, HTML and CSS to build 
          websites and also worked on machine learning projects. Having a habit of coding 
          regularly made me proficient with the data structures and algorithms. 
        </p>

        <br />

        <p className="text-xl">
         
          
        </p>
      </div>
    </div>
  );
};

export default About;
