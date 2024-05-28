import { FileData } from "../models/fileModel";
import * as fs from "fs";

class FileService {
  public async readFile(path: string): Promise<string> {
    return await fs.promises.readFile(path, "utf-8");
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
      };
    }

    // Conteggio parole
    const words = content.trim().split(/\s+/);
    // Filtrare le parole contenenti solo caratteri speciali
    const filteredWords = words.filter((word) => !/^[^a-zA-Z]+$/.test(word));
    const totalWords = filteredWords.length;

    // Conteggio lettere
    const totalLetters = content.replace(/[^a-zA-Z]/g, "").length;

    // Conteggio spazi
    const totalSpaces = (content.match(/ +/g) || []).reduce(
      (acc, match) => acc + match.length,
      0
    );

    // Conteggio parole frequenti (>10 ripetizioni)
    // Conteggio parole frequenti (>10 ripetizioni)
    const wordCount: { [key: string]: number } = {};
    words.forEach((word) => {
      const normalizedWord = word.toLowerCase();
      if (normalizedWord !== "") {
        wordCount[normalizedWord] = (wordCount[normalizedWord] || 0) + 1;
      }
    });
    console.log(wordCount, "wordCount");
    const frequentWords: { [key: string]: number } = {};
    for (const word in wordCount) {
      if (wordCount[word] > 10) {
        frequentWords[word] = wordCount[word];
      }
    }
    console.log(frequentWords, "frequentWords");
    return {
      totalWords,
      totalLetters,
      totalSpaces,
      frequentWords,
    };
  }
}

export default new FileService();
