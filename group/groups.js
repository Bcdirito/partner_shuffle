window.addEventListener("DOMContentLoaded", function(){
    const students = ['Sheleeza Haniff', 'Angelika Puran', 'Sandra Shefter', 'Marwa Elassa', 'Loren Ocampo', 'Indira Rivera', 'Hareem Chaudhry', 'Amandine Soho', 'Bridget Williams', 'Nzingha Mutakabbir', 'Jada Johnson', 'Rishika Bandamede', 'Kayla Blue', 'Caroline Tew', 'Natalya Gonzalez', 'Krishna Chauhan', 'Hajar Murray', 'Caroline Vivanco', 'Gabriela Ors', 'Abigale Chase', 'Kristin Salvacion']

    const setDateHeader = () => {
        const today = new Date()
        document.getElementsByClassName("today")[0].innerHTML = `Groups for ${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    }

    // const shuffleStudents = (stdns) => {
    //     let shuffledStudents = []
    //
    //     while (shuffledStudents.length < stdns.length){
    //         let randomStud = stdns[Math.floor(Math.random() * stdns.length)]
    //         if (!shuffledStudents.includes(randomStud)) shuffledStudents.push(randomStud)
    //     }
    //
    //     displayPairings(shuffledStudents)
    // }

    const displayTrios = (shuffStudents) => {
        let pairingDiv = document.getElementsByClassName("pairings")[0]
        for (let i = 0; i < shuffStudents.length - 1; i += 3){
            if (shuffStudents.length === i + 2) pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]}</p>`
            else if (shuffStudents.length - i % 3) pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]} and ${shuffStudents[i + 2]}</p>`
        }
    }

    const displayFours = (shuffStudents) => {
      console.log(shuffStudents.length)
        let pairingDiv = document.getElementsByClassName("pairings")[0]
        for (let i = 0; i < shuffStudents.length - 1; i += 4){
            if (shuffStudents.length - i === 5) pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]}, ${shuffStudents[i + 2]}, ${shuffStudents[i + 3]} and ${shuffStudents[i + 4]}</p>`
            else if (shuffStudents.length - i % 4) pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]}, ${shuffStudents[i + 2]}, and ${shuffStudents[i + 3]}</p>`
        }
    }

    const displayFives = (shuffStudents) => {
      console.log(shuffStudents.length)
        let pairingDiv = document.getElementsByClassName("pairings")[0]
        for (let i = 0; i < shuffStudents.length - 1; i += 5){
            if (shuffStudents.length - i === 6) pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]}, ${shuffStudents[i + 2]}, ${shuffStudents[i + 3]}, ${shuffStudents[i + 4]}, and ${shuffStudents[i + 5]}</p>`
            else if (shuffStudents.length - i % 4) pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]}, ${shuffStudents[i + 2]}, ${shuffStudents[i + 3]} and ${shuffStudents[i + 4]}</p>`
        }
    }

    setDateHeader()
    displayTrios(students)
    // displayFours(students)
    // displayFives(students)
})
