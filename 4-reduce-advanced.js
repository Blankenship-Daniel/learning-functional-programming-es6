import fs from 'fs'

// get the correct format for a .txt file
let output = fs.readFileSync('data.txt', 'utf8')

  // trim any extra whitespace such as a new line at the end of the file
  .trim()

  // split on newline so that an array with each line of the file is returned
  .split('\n')

  // each line of the file is now split up into pieces of customer data
  .map(line => line.split('\t'))

  // creates an object where the customer name is the key and contains a list
  //  of product data
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('output', JSON.stringify(output, null, 2))
