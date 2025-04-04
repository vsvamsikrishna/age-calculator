function calculateAge() {
    let dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        document.getElementById("result").textContent = "Please enter a valid date of birth.";
        return;
    }

    let dob = new Date(dobInput);
    let today = new Date();
    
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").textContent = 
        `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
