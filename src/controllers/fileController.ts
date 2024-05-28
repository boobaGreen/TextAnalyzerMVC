import FileService from "../services/fileService";
import { FileData } from "../models/fileModel";

class FileController {
  public async processFile(path: string): Promise<FileData> {
    if (path.startsWith("http")) {
      const content = await FileService.readFileFromUrl(path);
      return FileService.analyzeFile(content);
    } else {
      const content = await this.readFile(path);
      return FileService.analyzeFile(content);
    }
  }

  // Metodo per leggere il file localmente
  private async readFile(path: string): Promise<string> {
    try {
      return await FileService.readFile(path);
    } catch (error) {
      throw new Error(`Unable to read file: ${(error as Error).message}`);
    }
  }
}

export default new FileController();
