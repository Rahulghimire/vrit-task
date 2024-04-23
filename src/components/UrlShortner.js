import React from "react";
import axios from "axios";

const UrlShortner = () => {
  const [longUrl, setLongUrl] = React.useState("");

  const apiKey = "aOMZquUWHTONbKvmbeJdwrz58JC5FVKMhoseuMSDpvFkPlQe9v0ozFalrvhN";

//   var headers = {
//     apikey: apiKey,
//     // workspace: "YOUR_WORKSPACE_ID"
//   }

// const url = 'https://tinyurl.com/app/dev/authenticate'




  const [customUrl, setCustomUrl] = React.useState("");

  const handleLongUrl = (e) => {
    setLongUrl(e.target.value);
  };

  const handleCustomUrl = (e) => {
    setCustomUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    // var payload={
    //     destination:customUrl||setCustomUrl,
    //     domain: { fullName: "rebrand.ly" }
    // }

    // var params = {
    //     headers: headers,
    //     contentType: "application/json",
    //     method: 'post',
    //     payload: JSON.stringify(payload),
    //     muteHttpExceptions: true
    //   }

    //   axios.post("https://api.rebrandly.com/v1/links",params);

    const url = 'https://api.tinyurl.com/create'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({url:customUrl})
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Authentication failed');
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
    

  };

  return (
    <div className=" flex flex-col gap-y-3">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="xxx"
            value={longUrl}
            onChange={handleLongUrl}
            placeholder="Enter long url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <input
            type="text"
            name="xxx"
            value={customUrl}
            onChange={handleCustomUrl}
            placeholder="Enter custom url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Shorten It
        </button>
      </form>
    </div>
  );
};

export default UrlShortner;
