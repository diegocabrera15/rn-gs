const apiKey = "i9mVXLvjCPTetPDwsPb0MgCBjmaT0uCZ";

const request = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
request
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
