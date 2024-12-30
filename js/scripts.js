// Example: Simulate user data and interactions
document.addEventListener('DOMContentLoaded', () => {
    const usernameSpan = document.getElementById('username');
    const profileImage = document.getElementById('profile-image');
    const friendsList = document.getElementById('friends-list');
    const chatBox = document.getElementById('chat-box');

    // Simulated user data
    const userData = {
        username: "JohnDoe",
        email: "johndoe@example.com",
        profileImage: "images/default-profile.jpg",
        friends: ["Alice", "Bob", "Charlie"],
    };

    // Populate user info
    usernameSpan.textContent = userData.username;
    profileImage.src = userData.profileImage;

    // Populate friends list
    userData.friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendsList.appendChild(li);
    });

    // Simulated chat messages
    const messages = [
        { sender: "Alice", text: "Hello!" },
        { sender: "JohnDoe", text: "Hi Alice!" },
    ];

    // Display chat messages
    messages.forEach(message => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${message.sender}:</strong> ${message.text}`;
        chatBox.appendChild(p);
    });

    // Handle chat message submission
    const chatForm = document.getElementById('chat-form');
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const chatMessage = document.getElementById('chat-message').value;
        const p = document.createElement('p');
        p.innerHTML = `<strong>JohnDoe:</strong> ${chatMessage}`;
        chatBox.appendChild(p);
        chatForm.reset();
    });
});
