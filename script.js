window.onload = function () {
    let name = prompt("Hey There! Welcome to Hayley's website. Please enter your name:");
    let welcomeContainer = document.getElementById('welcome-container');

    if (name) {
        document.getElementById('welcome-message').textContent = `Hey ${name}!`;
        let colors = ["#E66A63", "#6462e6", "#fff4cc", "#63E696"];
        let colorIndex = 0; 

        setInterval(function () {
            welcomeContainer.style.color = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 30000); 
    }
};


function showMore() {
    document.getElementById("more-info").style.display = "block";
}

function greet() {
    let name = document.getElementById('name-input').value.trim();
    let greetingText = name ? `Thank you for visiting my website, ${name}. Have a lovely day <3` : "Thank you for visiting my website, have a lovely day <3";
    document.getElementById('greeting').textContent = greetingText;
}


document.getElementById("me-pic").addEventListener("mouseover", function() {
    this.src = "img/musician.png";
});

document.getElementById("me-pic").addEventListener("mouseout", function() {
    this.src = "img/designer.png";
});
