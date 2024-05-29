<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">TEXTANALYZER-MVC</h1>
</p>

<p align="center">
	<img src="https://img.shields.io/github/license/boobaGreen/TextAnalyzerMVC?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/boobaGreen/TextAnalyzerMVC?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/boobaGreen/TextAnalyzerMVC?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/boobaGreen/TextAnalyzerMVC?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## Quick Links

> - [📍 Overview](#overview)
> - [📦 Features](#features)
> - [📂 Repository Structure](#repository-structure)
> - [🧩 Modules](#modules)
> - [🛠 MVC Architecture](#mvc-architecture)
> - [🚀 Getting Started](#getting-started)
>   - [⚙️ Installation](#installation)
>   - [🤝 Typescript compile](#typescript-compile)
>   - [👏 Running TextAnalyzerMVC](#running-textanalyzermvc)
>   - [🧪 Tests](#tests)
> - [📄License](#license)

---

## 📍 Overview

### Requests

- A: The application must be able to read a file from a path entered by the user, which can be a local path or a web address.
- B: The application must determine the total number of words in the file.
- C: The application must calculate the total number of letters in the file.
- D: The application must identify and count the total number of spaces in the file, including consecutive spaces.
- E: The application must identify words that repeat more than 10 times in the text (but not exactly 10 times) and indicate the number of times they repeat.

### Decisions and Explanations

During the development of the application, several decisions had to be made to ensure proper functionality and compliance with requirements. Here are some of the key choices made:

- Inclusion of Special Characters Numbers and Emojis: We decided to include special characters, such as emojis and symbols, in the word count. This choice reflects the modern use of texts and ensures an accurate representation of the text.
- Word Counting Method: We implemented an algorithm to count words in the text, including consecutive spaces. This approach provides an accurate measurement of the number of words and total spaces.
- Counting Repeated Words: We developed an algorithm to identify and count words that repeat more than 10 times (but not exactly 10 times) in the text. This allows us to identify the most common and meaningful words in the text.
- Consideration of Upper and Lowercase Words as Equal: We decided to consider uppercase and lowercase words as equivalent in the count of repeated words. This ensures proper identification of repeated words regardless of their formatting.

### Examples

- Standard Text: "Hello world! How are you?" is divided into 5 words: "Hello", "world!", "How", "are", "you?".
- Text with Special Characters: "I ❤️ coding!" is considered as 3 words: "I", "❤️", "coding!".
- Text with Special Character Sequences: "👋🏼Hello!👋🏼" is considered as 3 words: "👋🏼Hello!👋🏼".
- Text with Uppercase and Lowercase Words: "Hello hello World world WORlD" is considered as 2 unique words: "hello" (repeated 2 times) and "world" (repeated 2 times).
- Text with Special Character and Uppercase Sequences: "HELLO! hello hello" is considered as 1 unique word: "hello" (repeated 3 times).
- Text with Completely Uppercase and Lowercase Words: "HELLO hello hello" is considered as 1 unique word: "hello" (repeated 3 times).
- Text with Special Characters and Uppercase: "HeLLo! WOrld! hello" is considered as 2 unique words: "hello" (repeated 2 times) and "world" (repeated 1 time).

---

## 📦 Features

## File Path Usage

When using the application to analyze a file, you can specify the file path in various ways, depending on its location in the system's folder structure.

### File in the Same Folder

If the file you want to analyze is in the same folder as the application, simply provide the file name. For example, if the file is named `test.txt`, you can specify it simply as `test.txt`.

### File in a Different Folder

If the file is in a different folder than the application, you need to provide the relative path of the file. You can do this by using the `./` prefix followed by the folder name and then the file name. For example, if the file is in the `documents` folder and named `report.txt`, you can specify it as `./documents/report.txt`.

### Examples

- **File in the Same Folder**: If the file `test.txt` is in the same folder as the application, you can specify it as `test.txt`.
- **File in a Different Folder**: If the file `report.txt` is in the `documents` folder, you can specify it as `./documents/report.txt`.
- **Combined Paths**: If the file is in a subfolder of `documents`, for example `documents/reports`, you can specify it as `./documents/reports/report.txt`.

## URL File Usage

When you want to analyze a file from a remote source, such as a website or a cloud storage service, you can use a URL to access it. The application is capable of reading files from URLs that start with "http".

### Using Google Drive

Google Drive is one of the most popular cloud storage services and you can use it to store and share files. However, the URL provided by Google Drive for a file may not be directly usable by the application.

#### View URL

When sharing a file from Google Drive, the generated URL is usually a view URL that displays the file through an HTML user interface. For example:

- View URL: [https://drive.google.com/file/d/1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO/view?usp=sharing](https://drive.google.com/file/d/1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO/view?usp=sharing)

#### Direct Download URL

To use a file from Google Drive with the application, you need to obtain a URL that allows direct download of the file. To do this, you can use third-party services that convert the view URL into a direct download URL. For example, the [GDocs2Direct](https://sites.google.com/site/gdocs2direct/) service can be used to obtain a URL usable with the application.

- Direct Download URL: [https://drive.google.com/uc?export=download&id=1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO](https://drive.google.com/uc?export=download&id=1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO)

### Usage Examples

'node dist/app.js'

Enter the path to the file: https://drive.google.com/uc?export=download&id=1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO

```

Parole totali: 52
Lettere totali: 372
Spazi totali: 59
Parole frequenti:
apple: 11
banana: 13
online: 12
googledrive: 14

```

### Using Dropbox

Dropbox is another widely used cloud storage service. However, the URL provided by Dropbox for a file may not be directly usable by the application.

#### View URL

When sharing a file from Dropbox, the generated URL is usually a view URL that displays the file through an HTML user interface. For example:

- View URL: [https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=0](https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=0)

#### Direct Download URL

To use a file from Dropbox with the application, you can obtain a URL that allows direct download of the file. To do this, simply modify the last part of the URL from `dl=0` to `dl=1`.

- Direct Download URL: [https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=1](https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=1)

### Usage Examples

'node dist/app.js'

Enter the path to the file: https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=1

```
Parole totali: 38
Lettere totali: 218
Spazi totali: 37
Parole frequenti:
apple: 11
banana: 13
online: 12

```

---

## 📂 Repository Structure

```sh
└── TextAnalyzerMVC/
    ├── Prova tecnica - Backend.pdf
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── readme.md
    ├── readmeOld.md
    ├── sample.txt
    ├── src
    │   ├── app.ts
    │   ├── controllers
    │   │   └── fileController.ts
    │   ├── models
    │   │   └── fileModel.ts
    │   ├── services
    │   │   └── fileService.ts
    │   ├── tests
    │   │   └── fileService.test.ts
    │   └── views
    │       └── fileView.ts
    └── tsconfig.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                | Summary                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `sample.txt`        | Example input text file used for testing the application.             |
| `tsconfig.json`     | Configuration file for TypeScript compiler options.                   |
| `package.json`      | Project metadata and dependencies management file for Node.js.        |
| `jest.config.js`    | Configuration file for Jest testing framework.                        |
| `package-lock.json` | Automatically generated file that locks the versions of dependencies. |

</details>

<details closed><summary>src</summary>

| File         | Summary                                                         |
| ------------ | --------------------------------------------------------------- |
| `src/app.ts` | Entry point of the application, initializes and starts the app. |

</details>

<details closed><summary>src/services</summary>

| File                          | Summary                                                    |
| ----------------------------- | ---------------------------------------------------------- |
| `src/services/fileService.ts` | Service responsible for file reading and processing logic. |

</details>

<details closed><summary>src/models</summary>

| File                      | Summary                                                           |
| ------------------------- | ----------------------------------------------------------------- |
| `src/models/fileModel.ts` | Defines the data structure and model for the file being analyzed. |

</details>

<details closed><summary>src/controllers</summary>

| File                                | Summary                                                                  |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `src/controllers/fileController.ts` | Handles the business logic and communication between the view and model. |

</details>

<details closed><summary>src/views</summary>

| File                    | Summary                                                                        |
| ----------------------- | ------------------------------------------------------------------------------ |
| `src/views/fileView.ts` | Manages the presentation logic and user interaction for file analysis results. |

</details>

---

## 🛠 MVC Architecture

The application is structured using the Model-View-Controller (MVC) architectural pattern, which separates the responsibilities of the various system components. Here is an overview of how the project structure is organized:

### Model

The Model represents the application data and defines the logic to access and manipulate this data. In the context of TextAnalyzerMVC, the model is responsible for processing the text file and calculating the associated statistics, such as the number of words, letters, and spaces.

- **models/**: This folder contains the Model of the application.
  - **fileModel.ts**: The `fileModel.ts` file defines the data structure of the file and the functions to process the text.

### View

The View is responsible for presenting the data to the user and handling user interactions. In our case, the View displays the results of the text analysis to the user through the console interface.

- **views/**: This folder contains the View of the application.
  - **fileView.ts**: The `fileView.ts` file handles the display of text analysis results on the console.

### Controller

The Controller acts as an intermediary between the Model and the View. It is responsible for receiving input from the user through the View, invoking the appropriate operations on the Model, and updating the View with the processing results.

- **controllers/**: This folder contains the Controllers of the application.
  - **fileController.ts**: The `fileController.ts` file handles user interactions and coordinates operations between Model and View.

### Other Components

In addition to the MVC structure, there are other components in the project that perform specific roles:

- **services/**: This folder contains additional services used in the application.
  - **fileService.ts**: The `fileService.ts` file provides support functionality for file processing.
- **tests/**: This folder contains the application's tests.
  - **fileService.test.ts**: The `fileService.test.ts` file contains tests for the `fileService.ts` service, ensuring that the functionalities are correctly implemented and the application works as expected.

The project structure reflects the separation of responsibilities between Model, View, and Controller, allowing for more efficient code management and easier development and maintenance.

---

## 🚀 Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **Node.js**
- **npm (Node Package Manager)**
- **TypeScript**

### ⚙️ Installation

1. Clone the TextAnalyzerMVC repository:

```sh
git clone https://github.com/boobaGreen/TextAnalyzerMVC
```

2. Change to the project directory:

```sh
cd TextAnalyzerMVC
```

3. Install the dependencies:

```sh
npm install
```

### 🤝 Typescript compile

Use the following command to compile:

```sh
tsc
```

### 👏 Running TextAnalyzerMVC

Use the following command to run:

```sh
node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm run test
```

This format provides a clear and structured guide to getting started with the application, ensuring all necessary steps and dependencies are covered.

---

## 📄 License

This project is protected under the [MIT License](https://opensource.org/licenses/MIT). For more details, refer to the [LICENSE](https://opensource.org/licenses/MIT) file.

---

[**Return**](#quick-links)

---
