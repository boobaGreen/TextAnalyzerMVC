import FileService from "../services/fileService";

describe("FileService", () => {
  // Test to handle empty file correctly
  it("should handle empty file correctly", () => {
    const content = "";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(0);
    expect(result.totalLetters).toBe(0);
    expect(result.totalSpaces).toBe(0);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  // Test to handle file with a word repeated exactly 10 times correctly
  it("should handle file with word repeated exactly 10 times correctly", () => {
    const content =
      "apple apple apple apple apple apple apple apple apple apple";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(10);
    expect(result.totalLetters).toBe(50);
    expect(result.totalSpaces).toBe(9);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  // Test to handle file with words containing numbers correctly
  it("should handle file with words containing numbers correctly", () => {
    const content = "apple123 456banana 789apple banana123";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(4);
    expect(result.totalLetters).toBe(34);
    expect(result.totalSpaces).toBe(3);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  // Test to handle file with mixed case words correctly
  it("should handle file with mixed case words correctly", () => {
    const content = "apple Apple aPpLe BaNana BANANA";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(5);
    expect(result.totalLetters).toBe(27);
    expect(result.totalSpaces).toBe(4);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });

  // Test to handle file with a word repeated more than 10 times correctly
  it("should handle file with word repeated more than 10 times correctly", () => {
    const content =
      "apple apple apple apple apple apple apple apple apple apple apple apple";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(12);
    expect(result.totalLetters).toBe(60);
    expect(result.totalSpaces).toBe(11);
    expect(Object.keys(result.frequentWords).length).toBe(1);
    expect(result.frequentWords).toEqual({ apple: 12 });
  });

  // Test to handle file with words containing multiple spaces correctly
  it("should handle file with words containing multiple spaces correctly", () => {
    const content = " apple     banana  orange ";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(3);
    expect(result.totalLetters).toBe(17);
    expect(result.totalSpaces).toBe(9);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });
  // Test to handle file with words repeated more than 10 times correctly
  it("should handle file with words repeated more than 10 times correctly", () => {
    const content =
      "apple apple apple apple apple apple apple apple apple apple apple banana banana orange orange orange orange orange";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(18);
    expect(result.totalLetters).toBe(97);
    expect(result.totalSpaces).toBe(17);
    expect(Object.keys(result.frequentWords).length).toBe(1);
    expect(result.frequentWords).toEqual({ apple: 11 });
  });

  // Test to handle file with words repeated exactly 10 times correctly
  it("should handle file with words repeated exactly 10 times correctly", () => {
    const content =
      "apple apple apple apple apple apple apple apple apple apple apple banana banana orange orange orange orange";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(17);
    expect(result.totalLetters).toBe(91);
    expect(result.totalSpaces).toBe(16);
    expect(Object.keys(result.frequentWords).length).toBe(1);
    expect(result.frequentWords).toEqual({ apple: 11 });
  });

  // Test to handle file with words repeated less than 10 times correctly
  it("should handle file with words repeated less than 10 times correctly", () => {
    const content =
      "apple apple apple banana banana banana orange orange orange orange";
    const result = FileService.analyzeFile(content);

    expect(result.totalWords).toBe(10);
    expect(result.totalLetters).toBe(57);
    expect(result.totalSpaces).toBe(9);
    expect(Object.keys(result.frequentWords).length).toBe(0);
    expect(result.frequentWords).toEqual({});
  });
});
