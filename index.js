function shout(string) {
    return string.toUpperCase();
  }
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    return console.log(string.toUpperCase())
}
function logWhisper(string) {
    return console.log(string.toLowerCase())
}
function introduction(firstname = "User") {
    console.log('Hi, my name is ${firstname}')
}

function sayHiToHeadphonedRoommate (string) {
    if (string.toLowerCase() == string) {
        return "I can't hear you!"
    } else if (string.toUpperCase() == string) {
        return "YES INDEED!"
    } else if (string == "Let's have dinner together!" ) {
        return "I would love to!"
    }
}