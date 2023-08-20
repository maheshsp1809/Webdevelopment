/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Function to prompt the user for a URL
async function getUserInput() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "url",
      message: "Enter the URL:",
    },
  ]);
  return answers.url;
}

// Function to generate a QR code image
function generateQRCode(url) {
  return qr.imageSync(url, { type: "png" });
}

// Function to save user input and QR code image to a text file
function saveToFile(url, qrImage) {
  const dataToSave = `User Entered URL: ${url}\n`;
  fs.writeFileSync("user_data.txt", dataToSave);
  fs.writeFileSync("qr_code.png", qrImage);
  console.log("Data saved to user_data.txt and qr_code.png");
}

// Main function
async function main() {
  try {
    const url = await getUserInput();
    const qrImage = generateQRCode(url);
    saveToFile(url, qrImage);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// Call the main function
main();
