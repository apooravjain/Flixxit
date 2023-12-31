import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <div className="w-full max-w-screen-xl mx-auto p-8 py-32">
        {/* <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-700 to-black opacity-75 text-center"> */}
        <div className="flex items-center justify-center">
          <h1 className="font-extrabold text-transparent text-4xl p-5 text-center bg-clip-text bg-gradient-to-r from-red-950 via-red-600 to-red-950">
            Flixxit
          </h1>
        </div>
        <p className=" mb-4">
          Flixxit is an OTT platform for watching movies and TV shows. It
          provides a wide range of content for users to browse, search, and
          enjoy their favorite movies and TV series.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-red-600">Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>A home page with a carousel of featured movies and TV shows</li>
          <li>A search bar for finding content</li>
          <li>A grid of genres for browsing content</li>
          <li>Detail pages for individual movies and TV shows</li>
          <li>The ability to watch trailers</li>
          <li>
            The ability to add movies and TV shows to reviews and favorites
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-2 text-red-600">Contributing</h2>
        <p className="mb-4">
          The Flixxit project is open to contributions. If you would like to
          contribute, please fork the project on GitHub and submit a pull
          request.
        </p>

        <h2 className="text-2xl font-bold mb-2 text-red-600">
          Thank you for visiting!
        </h2>
        <p className="">
          We hope you enjoy using Flixxit for your movie and TV show
          entertainment. If you have any questions or suggestions, please feel
          free to contact us.
        </p>
      </div>
    </div>
  );
};

export default About;
