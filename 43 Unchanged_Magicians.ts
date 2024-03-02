
function show_magicians(magicians: string[]): void {

    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

const magician: string[] = ["ali", "hamza", "bilal"];
show_magicians(magician)

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {              // i stand for index string
        magicians[i] = magicians[i]   + ' the great'
}
}


const magicians2: string[] = ["Usman", "Haseeb", "Wajahat"];
make_great(magicians2)
show_magicians(magicians2)

function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the Great');
    }
    return greatMagicians;
}

const magicians3: string[] = ["Usman", "Haseeb", "Wajahat"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);