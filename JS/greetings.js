function displayGreetings(){
    const greetingText = document.getElementById('greetings');
    const hour = new Date().getHours();
    let greetings = "Hello!";

    if(hour < 12){
        greetings = "Good Morning";
    }

    else if (hour < 18){
        greetings = "Good Afternoon";
    }

    else if (hour < 24){
        greetings = "Good Evening";
    }

    greetingText.textContent = greetings;
}