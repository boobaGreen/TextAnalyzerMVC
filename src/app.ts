import FileController from "./controllers/fileController";
import FileView from "./views/fileView";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the path to the file: ", async (path: string) => {
  try {
    const data = await FileController.processFile(path);
    FileView.displayResults(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error processing file:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  } finally {
    rl.close();
  }
});
