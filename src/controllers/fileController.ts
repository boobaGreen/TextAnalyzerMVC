// Importing necessary modules and classes
import FileService from "../services/fileService";
import { FileData } from "../models/fileModel";

// Controller class for processing files
class FileController {
  // Method for processing a file
  public async processFile(path: string): Promise<FileData> {
    // Checking if the path starts with "http" (indicating a web URL)
    if (path.startsWith("http")) {
      // If it's a web URL, read file content from URL using FileService and analyze it
      const content = await FileService.readFileFromUrl(path);
      return FileService.analyzeFile(content);
    } else {
      // If it's a local path, read file content locally using this.readFile method and analyze it
      const content = await this.readFile(path);
      return FileService.analyzeFile(content);
    }
  }

  // Method for reading a file locally
  private async readFile(path: string): Promise<string> {
    try {
      // Attempting to read the file using FileService
      return await FileService.readFile(path);
    } catch (error) {
      // Handling any errors that occur during file reading
      throw new Error(`Unable to read file: ${(error as Error).message}`);
    }
  }
}

// Exporting an instance of FileController
export default new FileController();
