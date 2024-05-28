import { promises as fsPromises } from "fs";
import axios from "axios";
import { FileData } from "../models/fileModel";

class FileService {
  public async readFileFromUrl(url: string): Promise<string> {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch file from URL: ${response.statusText}`
        );
      }
      return response.data;
    } catch (error: any) {
      throw new Error(`Unable to fetch file from URL: ${error.message}`);
    }
  }
  // Metodo per leggere il contenuto di un file localmente
  public async readFile(path: string): Promise<string> {
    try {
      return await fsPromises.readFile(path, "utf-8");
    } catch (error) {
      throw new Error(`Unable to read file: ${(error as Error).message}`);
    }
  }
  public analyzeFile(content: string): FileData {
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

    // Conteggio parole, lettere, spazi e parole frequenti (>10 ripetizioni)
    const words = content.trim().split(/\s+/);
    const filteredWords = words.filter((word) => !/^[^a-zA-Z]+$/.test(word));
    const totalWords = filteredWords.length;
    const totalLetters = content.replace(/[^a-zA-Z]/g, "").length;
    const totalSpaces = (content.match(/ +/g) || []).reduce(
      (acc, match) => acc + match.length,
      0
    );
    const wordCount: { [key: string]: number } = {};
    words.forEach((word) => {
      const normalizedWord = word.toLowerCase();
      if (normalizedWord !== "") {
        wordCount[normalizedWord] = (wordCount[normalizedWord] || 0) + 1;
      }
    });
    const frequentWords: { [key: string]: number } = {};
    for (const word in wordCount) {
      if (wordCount[word] > 10) {
        frequentWords[word] = wordCount[word];
      }
    }

    return {
      totalWords,
      totalLetters,
      totalSpaces,
      frequentWords,
    };
  }
}

export default new FileService();
