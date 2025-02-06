window.onload = function () {
    // Prompt user to enter their name and store it in variable name
    let name = prompt("Hey There! Welcome to Hayley's website. Please enter your name:");
    let welcomeContainer = document.getElementById('welcome-container');

    // If the user enters their name, the welcome message will be updated to greet the user by their name and the color change will begin
    if (name) {
        document.getElementById('welcome-message').textContent = `Hey ${name}!`;
        
        // The array of colors to cycle through
        let colors = ["#E66A63", "#6462e6", "#fff4cc", "#63E696"];
        let colorIndex = 0; 

        // Changes the text color every 30 second interval
        setInterval(function () {
            welcomeContainer.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 30000); 
    }
};

// Shows more information when the learn more button is clicked
function showMore() {
    document.getElementById("more-info").style.display = "block";
}

function greet() {
    let name = document.getElementById('name-input').value.trim();
    // If the user entered a name, a personalized thank you note will be displayed
    let greetingText = name ? `Thank you for visiting my website, ${name}. Have a lovely day <3` : "Thank you for visiting my website, have a lovely day <3";
    document.getElementById('greeting').textContent = greetingText;
}

// Changes the profile picture when hovered over
document.getElementById("me-pic").addEventListener("mouseover", function() {
    this.src = "img/musician.png";
});

// The image resets when the user moves away from the pictuere
document.getElementById("me-pic").addEventListener("mouseout", function() {
    this.src = "img/designer.png";
});
