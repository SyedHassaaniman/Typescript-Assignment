
function sandwiche(...items: string[]): void {
    console.log("Sandwiche Order:")

    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`)
    }
}

console.log("Enjoy your sandwiche SyedHassaan")

sandwiche('Capsicum', 'Tomato', 'Chicken')
sandwiche('Beef', 'Cheese')
sandwiche('Garlic Chicken', 'Mayo Sause')