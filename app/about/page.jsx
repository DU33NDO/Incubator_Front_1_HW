// app/about/page.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-gray-800 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-light mb-6 text-center">About Us</h1>
        <p className="text-lg leading-7 mb-4">
          Welcome to our fashion blog, where we share the latest trends, style
          tips, and fashion news. Our team is passionate about helping you look
          your best and feel confident in your own skin. Whether you're looking
          for inspiration for your next outfit or want to stay updated on the
          latest fashion trends, we've got you covered.
        </p>
        <h2 className="text-2xl font-light mb-4">Our Mission</h2>
        <p className="text-lg leading-7 mb-4">
          Our mission is to inspire and empower our readers to embrace their
          unique style and express themselves through fashion. We believe that
          fashion is more than just clothing; it's a form of self-expression and
          a way to communicate who you are to the world.
        </p>
        <h2 className="text-2xl font-light mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg leading-7 space-y-2">
          <li>Creativity</li>
          <li>Inclusivity</li>
          <li>Authenticity</li>
          <li>Empowerment</li>
          <li>Continuous Learning</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
