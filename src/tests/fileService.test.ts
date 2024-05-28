import FileService from "../services/fileService";

describe("FileService", () => {
  it("should analyze file content correctly", () => {
    const content = "This is a test content.";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(5);
    expect(result.totalLetters).toBe(18);
    expect(result.totalSpaces).toBe(4);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  it("should handle file with only white spaces correctly", () => {
    const content = "       ";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(0);
    expect(result.totalLetters).toBe(0);
    expect(result.totalSpaces).toBe(7);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  it("should handle file with only special characters correctly", () => {
    const content = "!@#$%^&*()_+=-";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(0);
    expect(result.totalLetters).toBe(0);
    expect(result.totalSpaces).toBe(0);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  it("should handle file with single word correctly", () => {
    const content = "hello";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(1);
    expect(result.totalLetters).toBe(5);
    expect(result.totalSpaces).toBe(0);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  it("should handle file with single word correctly but tricky", () => {
    const content = "?   ??       hello  °°°";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(1);
    expect(result.totalLetters).toBe(5);
    expect(result.totalSpaces).toBe(12);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  it("should handle file with same word 12 times correctly", () => {
    const content =
      "hello hello hello hello hello hello hello hello hello hello hello hello";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(12);
    expect(result.totalLetters).toBe(60);
    expect(result.totalSpaces).toBe(11);
    expect(Object.keys(result.frequentWords).length).toBe(1);
    expect(result.frequentWords).toEqual({ hello: 12 });
  });

  it("should handle file with very long word correctly", () => {
    const content = "supercalifragilistichespiralitoso";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(1);
    expect(result.totalLetters).toBe(33);
    expect(result.totalSpaces).toBe(0);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  it("should handle file with many frequent words correctly 2 word with many occurrences banana -> 13 deve visualizzarlo - ed apple 10 NON deve  visualizzarlo", () => {
    const content =
      "apple banana banana banana banana banana banana banana banana banana banana apple apple banana banana apple apple apple apple apple apple apple banana";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(23);
    expect(result.totalLetters).toBe(128);
    expect(result.totalSpaces).toBe(22);
    expect(Object.keys(result.frequentWords).length).toBe(1);
    expect(result.frequentWords).toEqual({ banana: 13 });
  });

  it("should handle file with many frequent words correctly 2 word with many occurrences (apple 11, banana 13)", () => {
    const content =
      "apple banana banana banana banana banana banana banana banana apple banana banana apple apple banana banana apple apple apple apple apple apple apple banana";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(24);
    expect(result.totalLetters).toBe(133);
    expect(result.totalSpaces).toBe(23);
    expect(Object.keys(result.frequentWords).length).toBe(2);
    expect(result.frequentWords).toEqual({ banana: 13, apple: 11 });
  });
});
