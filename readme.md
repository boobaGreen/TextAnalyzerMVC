# TextAnalyzerCLI

## Description

TextAnalyzerCLI is a Node.js application designed to analyze text files, providing detailed statistics such as the total number of words, letters, spaces, and words repeated more than 10 times.

### Choice of MVC Architecture

#### Separation of Concerns

The MVC architecture was chosen for its ability to clearly separate responsibilities within the application, ensuring an organized and easily maintainable structure. The main components of MVC are:

- **Model**: Represents the data and logic of the application.
- **View**: Handles the presentation of data to the user.
- **Controller**: Manages user interactions and coordinates actions between Model and View.

#### Advantages of MVC Architecture

- **Modularity**: Breaking the application into three distinct components allows for greater code modularity, facilitating maintenance and testing.
- **Reusability**: MVC components can be reused in other parts of the application or in future projects.
- **Scalability**: The MVC architecture promotes scalability of the application, allowing for more efficient management of growth and change requirements over time.

### Choice of Handling Text Files (.txt)

#### Universality

Text files (.txt) were chosen as the primary format for textual input due to their universality. They can be opened and read by any text editor or word processing program, ensuring greater accessibility for users.

#### Simplicity

Handling text files is simpler compared to other formats like HTML, JSON, or XML. It does not require complex analysis or parsing and can be treated directly as a text string, simplifying the analysis process within the application.

#### Compliance with Requirements

The provided specifications do not mention any need to handle other file types besides text files. Therefore, focusing exclusively on text files allows us to meet the provided requirements without adding unnecessary complexity to the application.

#### Adaptability

If there are future requirements or specifications that necessitate handling other file formats, the application could be extended to support those formats. However, at present, the choice to focus on text files allows us to keep the application simple and efficient, focusing on the core functionalities required.

## Installation

To install the application, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/TextAnalyzerCLI.git

# Navigate to the project directory
cd TextAnalyzerCLI

# Install dependencies
npm install
```
