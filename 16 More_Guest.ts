

let Guest_List :string[] = ['Ali','Hamza','Imran',];

// for(let i=0; i<Guest_List.length; i++){

// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Ali' ;

let new_Guest :string = 'Kamran Tessori' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
    }

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! we find Big Table so we are inviting 3 more guests.')

Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Hammad');
Guest_List.push('Ayan');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
    
    }