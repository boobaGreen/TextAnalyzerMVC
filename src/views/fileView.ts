import { FileData } from "../models/fileModel";

class FileView {
  public displayResults(data: FileData): void {
    console.log(`Total Words: ${data.totalWords}`);
    console.log(`Total Letters: ${data.totalLetters}`);
    console.log(`Total Spaces: ${data.totalSpaces}`);
    console.log("Frequent Words:");
    for (const word in data.frequentWords) {
      console.log(`${word}: ${data.frequentWords[word]}`);
    }
  }
}

export default new FileView();
