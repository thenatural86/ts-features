interface Vehicle {
  name: string
  year: number
  broken: boolean
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
}

const printVehicle = ({ name, year, broken }: Vehicle): void => {
  console.log(`Name:${name}`)
  console.log(`Year:${year}`)
  console.log(`Broken:${broken}`)
}

printVehicle(oldCivic)
