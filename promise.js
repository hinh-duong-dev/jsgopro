function randomImagePromise(tag) {
    const apiKey = '0UTRbFtkMxAplrohufYco5IY74U8hOes';
    const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
    return fetch(endpoint)
      .then(rs => rs.json())
      .then(json => json.data.images.original.url);
  }

  $('#request').click(async () => {
    console.time('getAnimalPromiseSequential')

    randomImagePromise('cat').then(catImgUrl => {
        $('#cat').attr('src', catImgUrl);
        return randomImagePromise('dog');
    })
    .then(dogImgUrl => {
        $('#dog').attr('src', dogImgUrl);
        return randomImagePromise('fish');
    })
    .then(fishImgUrl => {
        $('#fish').attr('src', fishImgUrl);
    })

    console.timeEnd('getAnimalPromiseSequential')
  });
  
  