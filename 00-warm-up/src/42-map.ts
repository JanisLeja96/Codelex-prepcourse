export { };

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str) {
  let capitalised = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalised;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map(name => {
  return capitalise(tidyUpString(name));
}); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
