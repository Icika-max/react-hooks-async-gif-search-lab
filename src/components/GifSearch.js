

// const API_KEY = YbDTiWrz7xscirKqeMRYdNncZbcJXOZy

// const other = `https://api.giphy.com/v1/gifs/search?api_key=YbDTiWrz7xscirKqeMRYdNncZbcJXOZy&q=${searchnamehere}&limit=25&offset=0&rating=g&lang=en`

/**https://api.giphy.com/v1/gifs/search?api_key=YbDTiWrz7xscirKqeMRYdNncZbcJXOZy&q=&limit=30&offset=0&rating=g&lang=en */

import React from "react";
function GifSearch({ typeTextFunc, findGif }) {
  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={typeTextFunc} />
      <button onClick={findGif}>Find GIFs</button>
    </div>
  );
}

export default GifSearch;