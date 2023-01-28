

export const getGifs = async (category) => {
    const API_KEY = 'XKUo4z5544pS4HGe2kEbWSxwenJEPLxs';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`
    const resp = await fetch(url)

    const { data } = await resp.json();

    const response = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    )
    );
    return response;
}
