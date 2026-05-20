function showMessage() {
    alert("Welcome to Smart Learning Hub!");
}

function validateForm()
 {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    alert("Form submitted!");
    return true;
}