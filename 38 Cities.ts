
function describe_cities(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}`)
}

describe_cities('Karachi') // Default sentence
describe_cities('France', 'Europe')
describe_cities('Lahore', 'punjab')