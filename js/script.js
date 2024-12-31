function showGreeting() {
    const name = document.getElementById('nameInput').value || "Friend";
    const message = `Welcome to 2025, ${name}! Wishing you a year full of joy, success, and happiness! 🎆`;
    document.getElementById('greetingMessage').textContent = message;
}
