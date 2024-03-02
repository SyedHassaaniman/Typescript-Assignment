
function makeShirt(size: string = 'large', text: string = ' I love typescript'): void {
    console.log(`You have order a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt('medium')

// Diffrent message
makeShirt('small', 'I need a big shirt to wear')