
const CountNotes = () => {
    let amount = document.getElementById("amount").value
    let notes = [500, 100, 50, 20, 10, 5, 1];
    let noteCounter = Array(7).fill(0);

    if (amount >= 100 && amount <= 100000) {
        document.write("Currency Count " + "<br/>");
        for (let i = 0; i <= notes.length; i++) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = amount - noteCounter[i] * notes[i];


        }

    }
    else {
        alert("enter amount multiple of 100")
    }
    // Print no of notes

    for (let i = 0; i < notes.length; i++) {

        if (noteCounter[i] != 0) {
            document.write(notes[i] + " : "
                + noteCounter[i] + "<br/>");
        }
    }
}

