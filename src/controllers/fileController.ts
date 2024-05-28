import FileService from "../services/fileService";
import { FileData } from "../models/fileModel";

class FileController {
  public async processFile(path: string): Promise<FileData> {
    const content = await FileService.readFile(path);
    return FileService.analyzeFile(content);
  }
}

export default new FileController();
