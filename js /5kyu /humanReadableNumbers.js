// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// YEARS = 3600 * 24 * 365
// DD = days, padded to 2 digits, range: 00 - 99
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    const hours = Math.floor(seconds / 3600); // Calculate hours
    const minutes = Math.floor((seconds % 3600) / 60); // Calculate remaining minutes
    const remainingSeconds = seconds % 60; // Calculate remaining seconds

    // change to two digits return value 
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

//REFACTOR 
function humanReadable (seconds) {
    const paddedHours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const paddedMinutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const paddedSeconds = String(seconds % 60).padStart(2, '0');

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

console.log(humanReadable(0));
