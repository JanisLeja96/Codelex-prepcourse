export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
const protectEmail = (email: string) => {
    let newEmail = email.substring(0, 3).concat('...').concat(email.substring(email.indexOf('@')));
    return newEmail;
}

console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
