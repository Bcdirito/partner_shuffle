window.addEventListener("DOMContentLoaded", function(){
    const students = ["Brian DiRito", "Nic Casaula", "Marty Glyer", "Kate Turner", "Mike Walsh", "Alex Kidder", "Alex Domini", "Matt Dain", "Raye Lederman", "Danny Wilfred", "Jon Friestedt"]

    const setDateHeader = () => {
        const today = new Date()
        document.getElementsByClassName("today")[0].innerHTML = `Partners for ${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`
    }

    const shuffleStudents = (stdns) => {
        let shuffledStudents = []

        while (shuffledStudents.length < stdns.length){
            let randomStud = stdns[Math.floor(Math.random() * stdns.length)]
            if (!shuffledStudents.includes(randomStud)) shuffledStudents.push(randomStud)
        }

        displayPairings(shuffledStudents)
    }

    const displayPairings = (shuffStudents) => {
        let pairingDiv = document.getElementsByClassName("pairings")[0]
        for (let i = 0; i < shuffStudents.length - 1; i += 2){
            if (shuffStudents.length - i === 3) pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]} and ${shuffStudents[i + 2]}</p>`
            else pairingDiv.innerHTML += `<p>${shuffStudents[i]} is paired with ${shuffStudents[i + 1]}</p>`
        }
    }

    setDateHeader()
    shuffleStudents(students)
})