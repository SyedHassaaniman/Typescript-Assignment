
type car = {
    Manufacturer: string
    Model: string
    [key: string]: any;
}

function createcar(Manufacturer: string, Model: string, optional: Record<string, any>): car {
    return{
        Manufacturer,
        Model,
        ...optional
    }
}

const mycar: car = createcar("Toyota", "Corolla", {Color: "Silver", Year: "2024"})
console.log(mycar)