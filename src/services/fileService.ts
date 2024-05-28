// Importing necessary modules and classes
import { promises as fsPromises } from "fs";
import axios from "axios";
import { FileData } from "../models/fileModel";

// Service class for file operations
class FileService {
  // Method for reading file content from a URL
  public async readFileFromUrl(url: string): Promise<string> {
    try {
      // Fetching file content from the URL using axios
      const response = await axios.get(url);

      // Checking if the request was successful
      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch file from URL: ${response.statusText}`
        );
      }

      // Returning the file content
      return response.data;
    } catch (error: any) {
      // Handling errors
      throw new Error(`Unable to fetch file from URL: ${error.message}`);
    }
  }

  // Method for reading file content locally
  public async readFile(path: string): Promise<string> {
    try {
      // Reading file content using fsPromises
      return await fsPromises.readFile(path, "utf-8");
    } catch (error) {
      // Handling errors
      throw new Error(`Unable to read file: ${(error as Error).message}`);
    }
  }

  // Method for analyzing file content and returning file data
  public analyzeFile(content: string): FileData {
    // Handling empty content
    if (content.trim() === "") {
      return {
        totalWords: 0,
        totalLetters: 0,
        totalSpaces: (content.match(/ +/g) || []).reduce(
          (acc, match) => acc + match.length,
          0
        ),
        frequentWords: {},
      } as FileData;
    }

    // Splitting content into words, including all characters as words
    const words = content.trim().split(/\s+/);

    // Counting total words, total letters, and total spaces
    const totalWords = words.length;
    const totalLetters = content.length;
    const totalSpaces = (content.match(/ +/g) || []).reduce(
      (acc, match) => acc + match.length,
      0
    );

    // Counting frequency of each word
    const wordCount: { [key: string]: number } = {};
    words.forEach((word) => {
      const normalizedWord = word.toLowerCase();
      if (normalizedWord !== "") {
        wordCount[normalizedWord] = (wordCount[normalizedWord] || 0) + 1;
      }
    });

    // Identifying frequent words (>10 repetitions)
    const frequentWords: { [key: string]: number } = {};
    for (const word in wordCount) {
      if (wordCount[word] > 10) {
        frequentWords[word] = wordCount[word];
      }
    }

    // Returning file data
    return {
      totalWords,
      totalLetters,
      totalSpaces,
      frequentWords,
    };
  }
}

// Exporting an instance of FileService
export default new FileService();
