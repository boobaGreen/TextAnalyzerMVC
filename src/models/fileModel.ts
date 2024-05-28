export interface FileData {
  totalWords: number;
  totalLetters: number;
  totalSpaces: number;
  frequentWords: { [word: string]: number };
}
