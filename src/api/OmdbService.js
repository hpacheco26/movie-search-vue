const url = "http://www.omdbapi.com/?apikey=aa0db442&"


export async function fetchMovie(arg) {
    const res = await fetch(`${url}&s=${arg}`);
    const data = await res.json();
    return data;
}

export async function fetchMovieDetail(imdbId) {
    const res = await fetch(`${url}&i=${imdbId}`);
    const data = await res.json();
    return data;
}