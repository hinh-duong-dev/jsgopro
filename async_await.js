function randomImageAsync(tag) {
    const apiKey = '0UTRbFtkMxAplrohufYco5IY74U8hOes';
    const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;
    return fetch(endpoint)
      .then(rs => rs.json())
      .then(json => json.data.images.original.url);
  }
  
  //async/await
//   $('#request').click(async () => {
//     console.time('getAnimalSequential')

//     const catImgUrl = await randomImageAsync('cat');
//     const dogImgUrl = await randomImageAsync('dog');
//     const fishImgUrl = await randomImageAsync('fish');

//     console.timeEnd('getAnimalSequential')

//     $('#cat').attr('src', catImgUrl);
//     $('#dog').attr('src', dogImgUrl);
//     $('#fish').attr('src', fishImgUrl);
//   });
  
  // parallels
  $('#request').click(async () => {
      console.time('getAnimalParallels')

      const result = await Promise.all([
         randomImageAsync('cat'),
         randomImageAsync('dog'),
         randomImageAsync('fish')
      ]);

      console.timeEnd('getAnimalParallels')
      
      console.table([result[0], result[1], result[2]])

      $('#cat').attr('src', result[0]);
      $('#dog').attr('src',result[1]);
      $('#fish').attr('src', result[2]);
    });
  
  
    // loop
  //   function setTimeoutPromise(time) {
  //     return new Promise((resolve) => {
  //       setTimeout(resolve, time);
  //     });
  //   }
    
  //   $('#request').click( () => {
  //     // Asynchonous + Sequential
  //     console.log('Begin run');
  //     const firstLoop = randomImg('dog');
  //     console.log('Dog run');
  //     const secondLoop = randomImg('cat');
  //     console.log('Cat run');
      
  //     await Promise.all([firstLoop, secondLoop]);
  //     alert('All loop finished.');
  //   });
    
  //   async function randomImg(tag) {
  //     for(let i = 0; i < 5; i++) {
  //       const imgUrl = await randomImageAsync(tag);
  //       $('#' + tag).attr('src', imgUrl);
  //       await setTimeoutPromise(2*1000);
  //     }
  //   }