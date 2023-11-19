"use client";
import React, { useState } from "react";
import axios from "axios";

const Quote = () => {
  const [motivationalQuote, setMotivationalQuote] = useState(null);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setMotivationalQuote(response?.data);
      console.log(response.data);
    } catch (error) {
      setError("Error fetching quote");
    }
  };

  const handleTwitterShare = () => {
    if (motivationalQuote) {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${motivationalQuote.content}" - ${motivationalQuote.author} `
      )}`;
      window.open(twitterUrl, "_blank");
    }
  };

  //   const handleFacebookShare = () => {
  //     if (motivationalQuote) {
  //       const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  //         "YourWebsiteURL"
  //       )}&quote=${encodeURIComponent(
  //         `"${motivationalQuote.content}" - ${motivationalQuote.author}`
  //       )}`;
  //       window.open(facebookUrl, "_blank");
  //     }
  //   };

  const handleFacebookShare = () => {
    if (motivationalQuote) {
      const facebookUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(
        `"${motivationalQuote.content}" - ${motivationalQuote.author}`
      )}`;
      window.open(facebookUrl, "_blank");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Motivational Quote</h1>

      {motivationalQuote && (
        <div className="mb-4">
          <p className="text-lg font-semibold">{motivationalQuote.author}</p>
          <p className="text-gray-700">{motivationalQuote.content}</p>
          {/* <p className="text-gray-700">{motivationalQuote.dateAdded}</p> */}
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={fetchQuote}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 mb-4"
      >
        Get Quote
      </button>

      <button
        onClick={handleTwitterShare}
        className="bg-blue-400 text-white px-4 py-2 rounded-md mr-2 mb-4"
      >
        Share on Twitter
      </button>

      <button
        onClick={handleFacebookShare}
        className="bg-blue-800 text-white px-4 py-2 rounded-md"
      >
        Share on Facebook
      </button>
    </div>
  );
};

export default Quote;
