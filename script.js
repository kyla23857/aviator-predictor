// Account Creation and Sign In
document.getElementById('create-account').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('account-error-msg');

    if (username && password) {
        // Logic for creating an account (store credentials)
        // For now, simply hide the account page and show the activation page
        document.getElementById('account-page').style.display = 'none';
        document.getElementById('activation-page').style.display = 'block';
    } else {
        errorMsg.textContent = 'Please enter a username and password.';
    }
});

document.getElementById('sign-in').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('account-error-msg');

    if (username && password) {
        // Logic for signing in (check credentials)
        // For now, simply hide the account page and show the activation page
        document.getElementById('account-page').style.display = 'none';
        document.getElementById('activation-page').style.display = 'block';
    } else {
        errorMsg.textContent = 'Please enter your credentials.';
    }
});

// Activation Page Logic
document.getElementById('submit-code').addEventListener('click', function() {
    const activationCode = document.getElementById('activation-code').value;
    const correctCode = '200322';
    const errorMsg = document.getElementById('error-msg');

    if (activationCode === correctCode) {
        // Hide the activation page and show the prediction page
        document.getElementById('activation-page').style.display = 'none';
        document.getElementById('prediction-page').style.display = 'block';
    } else {
        errorMsg.textContent = 'Invalid Code. Please try again.';
    }
});

// Prediction Page Logic
document.getElementById('get-prediction').addEventListener('click', function() {
    // Hide the prediction result and show the spinner
    document.getElementById('prediction-result').style.display = 'none';
    document.getElementById('loading-spinner').style.display = 'block';

    // Simulate a loading delay before showing the result
    setTimeout(function() {
        // Hide the spinner and show the prediction result
        document.getElementById('loading-spinner').style.display = 'none';

        // Generate a random multiplier between 1.00x and 10.00x
        const randomMultiplier = (Math.random() * (10 - 1) + 1).toFixed(2);
        document.getElementById('prediction-result').textContent = randomMultiplier + 'x';

        // Show the prediction result with an animation
        document.getElementById('prediction-result').style.display = 'block';
        document.getElementById('prediction-result').style.animation = 'fadeIn 0.5s ease-out';
    }, 500); // Adjust this delay as desired
});
