// Simuleer de bestaande gebruikersdatabase
const users = {
    "michiel@artistack.be": {
        password: "Bacjes1!",
        name: "Michiel",
        dashboardInfo: "This is Michiel's dashboard data."
    },
    "testuser@artistack.be": {
        password: "Test123!",
        name: "Test User",
        dashboardInfo: "This is Test User's dashboard data."
    }
};

// Handle login functie
function handleLogin(event) {
    event.preventDefault(); // Voorkom dat het formulier wordt ingediend

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Zoek de gebruiker in de gesimuleerde database
    const user = users[email];

    if (user && user.password === password) {
        // Sla de gebruikersinformatie op in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirect naar index.html
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

// Koppel de login-functie aan de formuliersubmit-gebeurtenis
document.getElementById('loginForm').addEventListener('submit', handleLogin);
