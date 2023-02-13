import React, { useState, useEffect } from 'react';

const GiphyLoader = () => {
    const [loader, setLoader] = useState(null);





    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=xz8tDUz4NDXLIH71UeyLQQ76YZ4XTsbB&tag=loading`)
            .then(response => response.json())
            .then(data => {
                setLoader(data.data.image_url);
            });
    }, []);



    return (
        <div>
            {loader ? <img src={loader} alt="loading" /> : 'Loading...'}
        </div>
    );
};

export default GiphyLoader;
