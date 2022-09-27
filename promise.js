function randomImagePromise(tag) {
    const apiKey = '0UTRbFtkMxAplrohufYco5IY74U8hOes';
    const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
    return fetch(endpoint)
      .then(rs => rs.json())
      .then(json => json.data.images.original.url);
  }


  //Promise Sequential

//   $('#request').click(() => {
//     console.time('getAnimalPromiseSequential')

//     randomImagePromise('cat').then(catImgUrl => {
//         $('#cat').attr('src', catImgUrl);
//         return randomImagePromise('dog');
//     })
//     .then(dogImgUrl => {
//         $('#dog').attr('src', dogImgUrl);
//         return randomImagePromise('fish');
//     })
//     .then(fishImgUrl => {
//         $('#fish').attr('src', fishImgUrl);
//     })

//     console.timeEnd('getAnimalPromiseSequential')
 // });

  //Promise Parallels

  $('#request').click(() => {
    console.time('getAnimalPromiseParallels')

    Promise.all([
        randomImagePromise('cat'),
        randomImagePromise('dog'),
        randomImagePromise('fish')
    ]).then(results => {
      $('#cat').attr('src', results[0]);
      $('#dog').attr('src',results[1]);
      $('#fish').attr('src', results[2]);
    });

    console.timeEnd('getAnimalPromiseParallels')
  });

  
  