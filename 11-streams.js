const stupidNumberStream = {
  each: (callback) => {
    setTimeout(() => callback(1), 1000)
    setTimeout(() => callback(2), 1000)
    setTimeout(() => callback(3), 1000)
  }
}

stupidNumberStream.each(console.log)