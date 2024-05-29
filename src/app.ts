// Importing necessary modules and classes
import FileController from "./controllers/fileController";
import FileView from "./views/fileView";
const readline = require("readline");

// Creating an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asking the user to enter the path to the file
rl.question("Enter the path or url to the file: ", async (path: string) => {
  try {
    // Processing the file using FileController and awaiting the result
    const data = await FileController.processFile(path);

    // Displaying the results using FileView
    FileView.displayResults(data);
  } catch (error) {
    // Handling errors
    if (error instanceof Error) {
      // Logging the error message if it's an instance of Error
      console.error("Error processing file:", error.message);
    } else {
      // Logging an unknown error otherwise
      console.error("Unknown error:", error);
    }
  } finally {
    // Closing the readline interface
    rl.close();
  }
});
