import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import "./Results.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `http://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "od4bd0df154ad3f5258f65d3a3c5bt61";
    let pexelsApiUrl = `http://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`;
    
      axios.get(pexelsApiUrl).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
            defaultValue={props.defaultKeyword}
          />
        </form>
        <div className="hint">e.g cat, sunset, archery . . .</div>
        <div className="results">
          <Results results={results} />
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
// 8 mins left in vid