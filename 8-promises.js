// load image function implemented with the callback pattern
let loadImageWithCallback = (url, cb) => {
  let image = new Image()

  image.onload = () => cb(null, image)
  image.onerror = () => {
    let message = 'Could not load image at ' + url
    cb(new Error(message))
  }

  image.src = url
}

// load image function implemented with promises
let loadImageWithPromise = url => {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = () => resolve(image)
    image.onerror = () =>  {
      let message = 'Could not load image at ' + url
      reject(new Error(message))
    }

    image.src = url
  })
}

let addImg = src => {
  let imgElement = document.createElement('img')
  imgElement.src = src
  document.body.appendChild(imgElement)
}

// implementation using callbacks
loadImageWithCallback('image/cat1.jpg', (error, img1) => {
  if (error) throw error
  addImg(img1.src)
  loadImageWithCallback('image/cat2.jpg', (error, img2) => {
    if (error) throw error
    addImg(img2.src)
    loadImageWithCallback('image/cat3.jpg', (error, img3) => {
      if (error) throw error
      addImg(img3.src)
    })
  })
})

// implementation using promises
Promise.all([
  loadImageWithPromise('image/cat1.jpg'),
  loadImageWithPromise('image/cat1.jpg'),
  loadImageWithPromise('image/cat1.jpg')
]).then(images => {
  images.forEach(img => addImg(img.src))
}).catch(error => {
  // handle error here
  console.log(error)
})