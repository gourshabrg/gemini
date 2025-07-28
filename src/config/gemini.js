// index.js

// Import the GoogleGenerativeAI class from the library
import { GoogleGenerativeAI } from "@google/generative-ai";

// IMPORTANT: Get your API key from environment variables or a secure source
// Do not hardcode it directly in the code for production
const API_KEY = "AIzaSyAZ2ymAHFf9HJgeoN5rtUUmqJ3zqBp2xH0";

// If the API key is not set, throw an error
if (!API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable not set.");
}

// Instantiate the GoogleGenerativeAI class with your API key
const genAI = new GoogleGenerativeAI(API_KEY);

// The main function that runs the generation
async function run(prompt) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // The prompt to send to the model

    console.log("Sending prompt to Gemini...");
    console.log("---------------------------");
    console.log("Prompt:", prompt);
    console.log("---------------------------");

    // Generate content based on the prompt
    const result = await model.generateContent(prompt);

    // Get the response from the result
    const response = result.response;

    // Extract the text from the response
    const text = response.text();
    console.log(text);
    return text;

    console.log("Gemini's Response:");
    console.log("---------------------------");

    console.log("---------------------------");
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// Call the run function
export default run;
