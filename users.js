// users.js

let userMapping = {};

function loadUsers(usersJson) {
    const lines = usersJson.split('\n');
    lines.forEach(line => {
        if (line.trim() !== '') {
            try {
                const data = JSON.parse(line);
                const userId = data.user._id;
                const username = data.user.username;
                userMapping[userId] = username; // Map author ID to username
            } catch (err) {
                console.error('Error parsing user data:', err);
            }
        }
    });
}

function getUsernameFromCode(authorCode) {
    return userMapping[authorCode] || 'Unknown Author'; // Fallback to 'Unknown Author' if not found
}

// Export the necessary functions for use in the main script
export { loadUsers, getUsernameFromCode };
