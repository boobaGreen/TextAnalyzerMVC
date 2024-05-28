// Interface representing data about a file
export interface FileData {
  totalWords: number; // Total number of words in the file
  totalLetters: number; // Total number of letters in the file
  totalSpaces: number; // Total number of spaces in the file
  frequentWords: { [word: string]: number }; // Object containing frequent words and their frequencies
}
