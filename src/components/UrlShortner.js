import React from "react";

const UrlShortner = () => {

    const [longUrl,setLongUrl]=React.useState("");

    const [customUrl,setCustomUrl]=React.useState("");

    const handleLongUrl=(e)=>{
        setLongUrl(e.target.value);
    }

    const handleCustomUrl=(e)=>{
        setCustomUrl(e.target.value);
    }

const handleSubmit=(e)=>{
    e.preventDefault();

    


}



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
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Shorten It
        </button>
      </form>
    </div>
  );
};

export default UrlShortner;
