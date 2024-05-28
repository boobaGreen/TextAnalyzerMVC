import { FileData } from "../models/fileModel";

// Classe per la visualizzazione dei risultati del file
class FileView {
  // Metodo per visualizzare i risultati
  public displayResults(data: FileData): void {
    console.log(`Parole totali: ${data.totalWords}`);
    console.log(`Lettere totali: ${data.totalLetters}`);
    console.log(`Spazi totali: ${data.totalSpaces}`);
    console.log("Parole frequenti:");
    for (const word in data.frequentWords) {
      console.log(`${word}: ${data.frequentWords[word]}`);
    }
  }
}

// Esporta un'istanza di FileView
export default new FileView();
