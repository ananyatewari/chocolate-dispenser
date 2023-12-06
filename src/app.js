var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

// let z = Math.floor(Math.random() * 100) 
// let colours = [ green, red, purple, blue, crimson, silver, pink ]

//Progression 1: Add z chocolates of x color



let addChocolatesData = (chocolates, colour, count) => {
  for (let i = 0; i < count; i++) {
    chocolates.unshift(colour)
  }
}

function addChocolates (chocolates, colour, count) {
  return count < 1 ? "Number cannot be zero/negative" : addChocolatesData(chocolates, colour, count)
}

//Progression 2: Remove z chocolates from the top the dispenser

let removeChocolatesData = (chocolates, number) => {
  var removedChocolates = []
  while (number > 0) {
    removedChocolates.push(chocolates.shift())
    number--
  }
  return removedChocolates
}
 
function removeChocolates (chocolates, number) {
  return number <= 0 ? "Number cannot be zero/negative" : chocolates.length < number ? 
  "Insufficient chocolates in the dispenser" : removeChocolatesData(chocolates, number)
}

//Progression 3: Dispense z chocolates


let dispenseChocolateData = (chocolates, number) => {
  var dispensedChocolates = []
  while (number > 0) {
    dispensedChocolates.push(chocolates.pop())
    number--
  }
  return dispensedChocolates
}
 
function dispenseChocolates (chocolates, number) {
  return number <= 0 ? "Number cannot be zero/negative" : chocolates.length < number ? 
  "Insufficient chocolates in the dispenser" : dispenseChocolateData(chocolates, number)
}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates, number) {
  return dispenseChocolates(chocolates, number)
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

let noofchocdata = function (chocolates) {
  const given = ["green", "silver", "blue", "crimson", "purple", "red", "pink"]
  const ourarray = []

  given.forEach ((givenchoc) => {
    let counter = 0
    chocolates.forEach ((chocs) => {
      if (givenchoc == chocs){
        counter++
      }
    })
    counter > 0 ? ourarray.push(counter) : null
  })
  return ourarray
}

function noOfChocolates(chocolates) {
  return noofchocdata(chocolates);
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors

let sortchocdata = function (chocolates) {
  let sortedarray = []
  let sortedobj = {}

  chocolates.sort()

  for (let i = 0; i < chocolates.length; i++) {
    let count = 0
    for (let j = 0; j < chocolates.length; j++) {
      if (chocolates[i] == chocolates[j])
      count++
    }
    sortedobj[chocolates[i]] = count
  }
  let sorted = Object.fromEntries(
    Object.entries(sortedobj).sort(([,a], [,b]) => b - a)
  )
  Object.keys(sorted).forEach((key) => {
    for (let i = 0; i < sorted[key]; i++){
      sortedarray.push(key)
    }
  })
  return sortedarray
}

function sortChocolateBasedOnCount(chocolate) {
  let finalsortation = sortchocdata(chocolate)
  return finalsortation
}

//Progression 7: Change z chocolates of x color to y color

let changecolour = function(chocolates, counting, colour, finalcolour) {
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == colour) {
      chocolates[i] = finalcolour
    }
  }
  return chocolates
}

function changeChocolateColor (chocolates, counting, colour, finalcolour) {
  return counting <= 0 ? "Number cannot be zero/negative" : colour == finalcolour ? "Can't replace the same chocolates" : changecolour(chocolates, counting, colour, finalcolour)
}


//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, colour, finalcolour) {
  let changed = changecolour(chocolates, chocolates.length, colour, finalcolour)

  let counted = 0
  changed.forEach((chocolate) => {
    chocolate == finalcolour ? counted++ : counted += 0
  })

  return colour == finalcolour ? "Can't replace the same chocolates" : [counted, changed]
}

//Challenge 1: Remove one chocolate of x color from the top

function remove(chocolates, colour){
  for (let i = 0; i < chocolates.length; i++){
    if (chocolates[i] == colour) {
      here = i 
      break
    }
  }
  chocolates.splice(here, 1)
  return chocolates
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function giverainbow(chocolates){
  let bag = {}

  chocolates.forEach((choc) => {
    if (choc in bag ) bag[choc]++
    else bag[choc] = 1
  })


countforrainbow = Object.values(bag)
totalnoofrainbow = 0
countforrainbow.forEach((count) => {
  if (count == 3)
  totalnoofrainbow += count / 3

  return
})
return totalnoofrainbow

}