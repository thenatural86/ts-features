class Vehicle {
  drive(): void {
    console.log(`chugga chugga`)
  }

  honk(): void {
    console.log('toot toot')
  }
}

const vehicle = new Vehicle()
vehicle.drive()
vehicle.honk()
