const carMakers = ['ford', 'toyota', 'chevy']

const dates = [new Date(), new Date()]

const carsByMake = [['f1050'], ['corolla'], ['camaro']]

// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// prevent incompatible values
carMakers.push() //.push(100)

// help with map
carMakers.map((car: string): string => {
  return car
})
