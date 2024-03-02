
let users : string [] = ["Admin", "Hassaan", "Haseeb", "Ali", "Fatima"]

for(let user of users) {
    if (user === "Admin") {
        console.log("Hello admin, would you like to see a status report?")
    } else {
        console.log(` Hello ${user}, thank you for logging in again `)
    }
}