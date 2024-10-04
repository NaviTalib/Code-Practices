// Default login credentials
const defaultUser = {
    username: 'admin',
    password: '1234',
    email: 'admin@example.com'
};

function switchForm(form) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (form === 'signup') {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    } else {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    }
}

// Handle login form submission
document.getElementById('login').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if credentials match
    if (username === defaultUser.username && password === defaultUser.password) {
        // Save username and email in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify({
            username: defaultUser.username,
            email: defaultUser.email
        }));
        alert("Login successful!");
        window.location.href = "homepage.html";  // Redirect to homepage
    } else {
        alert("Invalid username or password.");
    }
});

// Handle signup form submission
document.getElementById('signup').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Simulate saving the signup information
    localStorage.setItem('loggedInUser', JSON.stringify({ username, email }));
    alert("Signup successful!");
    window.location.href = "homepage.html";  // Redirect to homepage after signup
});
