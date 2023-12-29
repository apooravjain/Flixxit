import React from "react";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <Header />

      <div className=" bg-black text-white ">
        <h1 className="text-4xl font-bold mb-4 text-red-600">Flixxit</h1>
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
