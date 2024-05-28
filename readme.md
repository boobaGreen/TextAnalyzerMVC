# TextAnalyzerMVC

## Requisiti dell'Applicazione

### Richieste

- A: L'applicazione deve essere in grado di leggere un file da un percorso inserito in input dall’utente, che può essere un percorso locale o un indirizzo web.
- B: L'applicazione deve determinare il numero totale di parole nel file.
- C: L'applicazione deve calcolare il numero totale di lettere nel file.
- D: L'applicazione deve identificare e contare il numero totale di spazi nel file, inclusi spazi consecutivi.
- E: L'applicazione deve individuare le parole che si ripetono più di 10 volte nel testo (ma non esattamente 10 volte) e indicare il numero di volte in cui si ripetono.

### Decisioni e Spiegazioni

Durante lo sviluppo dell'applicazione, abbiamo dovuto prendere diverse decisioni per garantire il corretto funzionamento e l'adempimento dei requisiti. Ecco alcune delle scelte chiave fatte:

- Inclusione dei Caratteri Speciali e degli Emoji : Abbiamo deciso di includere i caratteri speciali, come emoji e simboli, nel conteggio delle parole. Questa scelta riflette l'uso moderno dei testi e garantisce una rappresentazione accurata del testo.
- Metodo di Conteggio delle Parole : Abbiamo implementato un algoritmo per contare le parole nel testo, inclusi gli spazi consecutivi. Questo approccio offre una misurazione precisa del numero di parole e degli spazi totali.

- Conteggio delle Parole Ripetute : Abbiamo sviluppato un algoritmo per individuare e contare le parole che si ripetono più di 10 volte (ma non esattamente 10 volte) nel testo. Questo ci consente di identificare le parole più comuni e significative nel testo.

- Considerazione delle Parole in Maiuscolo e Minuscolo come Uguali : Abbiamo deciso di considerare le parole in maiuscolo e minuscolo come equivalenti nel conteggio delle parole ripetute. Questo assicura una corretta identificazione delle parole ripetute indipendentemente dalla loro formattazione.

## Esempi

- Testo Standard: "Hello world! How are you?" viene suddiviso in 5 parole: "Hello", "world!", "How", "are", "you?".
- Testo con Caratteri Speciali: "I ❤️ coding!" viene considerato come 3 parole: "I", "❤️", "coding!".
- Testo con Sequenze di Caratteri Speciali: "👋🏼Hello!👋🏼" viene considerato come 3 parole: "👋🏼Hello!👋🏼".
- Testo con Parole in Maiuscolo e Minuscolo: "Hello hello World world WORlD" viene considerato come 2 parole uniche: "hello" (ripetuta 2 volte) e "world" (ripetuta 2 volte).
- Testo con Sequenze di Caratteri Speciali e Maiuscolo: "HELLO! hello hello" viene considerato come 1 parola unica: "hello" (ripetuta 3 volte).
- Testo con Parole Completamente in Maiuscolo e Minuscolo: "HELLO hello hello" viene considerato come 1 parola unica: "hello" (ripetuta 3 volte).
- Testo con Caratteri Speciali e Maiuscolo: "HeLLo! WOrld! hello" viene considerato come 2 parole uniche: "hello" (ripetuta 2 volte) e "world" (ripetuta 1 volta).

## Utilizzo dei Percorsi per i File

Quando si utilizza l'applicazione per analizzare un file, è possibile specificare il percorso del file in diversi modi, a seconda della sua posizione nella struttura delle cartelle del sistema.

### File nella Stessa Cartella

Se il file che si desidera analizzare si trova nella stessa cartella dell'applicazione, è sufficiente fornire il nome del file. Ad esempio, se il file si chiama `test.txt`, è possibile specificarlo semplicemente come `test.txt`.

### File in una Cartella Diversa

Se il file si trova in una cartella diversa rispetto all'applicazione, è necessario fornire il percorso relativo del file. È possibile farlo utilizzando il prefisso `./` seguito dal nome della cartella e poi dal nome del file. Ad esempio, se il file si trova nella cartella `documents` e si chiama `report.txt`, è possibile specificarlo come `./documents/report.txt`.

### Esempi

- **File nella Stessa Cartella**: Se il file `test.txt` si trova nella stessa cartella dell'applicazione, è possibile specificarlo come `test.txt`.
- **File in una Cartella Diversa**: Se il file `report.txt` si trova nella cartella `documents`, è possibile specificarlo come `./documents/report.txt`.
- **Percorsi Combinati**: Se il file si trova in una sottocartella di `documents`, ad esempio `documents/reports`, è possibile specificarlo come `./documents/reports/report.txt`.

## Utilizzo degli URL per i File

Quando si desidera analizzare un file da un'origine remota, come un sito web o un servizio di archiviazione cloud, è possibile utilizzare un URL per accedervi. L'applicazione è in grado di leggere i file da URL che iniziano con "http".

### Utilizzo di Google Drive

Google Drive è uno dei servizi di archiviazione cloud più popolari ed è possibile utilizzarlo per archiviare e condividere file. Tuttavia, l'URL fornito da Google Drive per un file potrebbe non essere direttamente utilizzabile dall'applicazione.

#### URL di Visualizzazione

Quando si condivide un file da Google Drive, l'URL generato di solito è un URL di visualizzazione che mostra il file tramite un'interfaccia utente HTML. Ad esempio:

- URL di Visualizzazione: [https://drive.google.com/file/d/1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO/view?usp=sharing](https://drive.google.com/file/d/1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO/view?usp=sharing)

#### URL per il Download Diretto

Per utilizzare un file da Google Drive con l'applicazione, è necessario ottenere un URL che consenta il download diretto del file. Per fare ciò, è possibile utilizzare servizi di terze parti che convertono l'URL di visualizzazione in un URL per il download diretto. Ad esempio, il servizio [GDocs2Direct](https://sites.google.com/site/gdocs2direct/) può essere utilizzato per ottenere un URL utilizzabile con l'applicazione.

- URL per il Download Diretto: [https://drive.google.com/uc?export=download&id=1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO](https://drive.google.com/uc?export=download&id=1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO)

### Esempi di Utilizzo

- **URL di Visualizzazione**: L'URL [https://drive.google.com/file/d/1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO/view?usp=sharing](https://drive.google.com/file/d/1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO/view?usp=sharing) è un esempio di URL di visualizzazione di un file su Google Drive.
- **URL per il Download Diretto**: L'URL [https://drive.google.com/uc?export=download&id=1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO](https://drive.google.com/uc?export=download&id=1Rt8dCP6b7qnkT48GUu3YnL7pmiR0d8iO) è un esempio di URL per il download diretto di un file su Google Drive, utilizzabile con l'applicazione.

Utilizzando gli URL per il download diretto, è possibile accedere facilmente ai file da Google Drive e da altre fonti remote per l'analisi con l'applicazione.

### Utilizzo di Dropbox

Dropbox è un altro servizio di archiviazione cloud ampiamente utilizzato. Tuttavia, l'URL fornito da Dropbox per un file potrebbe non essere direttamente utilizzabile dall'applicazione.

#### URL di Visualizzazione

Quando si condivide un file da Dropbox, l'URL generato di solito è un URL di visualizzazione che mostra il file tramite un'interfaccia utente HTML. Ad esempio:

- URL di Visualizzazione: [https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=0](https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=0)

#### URL per il Download Diretto

Per utilizzare un file da Dropbox con l'applicazione, è possibile ottenere un URL che consenta il download diretto del file. Per fare ciò, è sufficiente modificare l'ultima parte dell'URL da `dl=0` a `dl=1`.

- URL per il Download Diretto: [https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=1](https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=1)

### Esempi di Utilizzo

- **URL di Visualizzazione**: L'URL [https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=0](https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=0) è un esempio di URL di visualizzazione di un file su Dropbox.
- **URL per il Download Diretto**: L'URL [https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=1](https://www.dropbox.com/scl/fi/w7vsfe8jqc8hqify54g42/sample1online.txt?rlkey=mnyjxpn8rrgye0b6dwvz72g3n&st=7gn8avpx&dl=1) è un esempio di URL per il download diretto di un file su Dropbox, utilizzabile con l'applicazione.

Utilizzando gli URL per il download diretto, è possibile accedere facilmente ai file da Dropbox e da altre fonti remote per l'analisi con l'applicazione.

## Architettura MVC

L'applicazione è strutturata utilizzando il pattern architetturale Model-View-Controller (MVC), che separa le responsabilità delle varie componenti del sistema. Ecco una panoramica di come è organizzata la struttura del progetto:

### Model (Modello)

Il Model rappresenta i dati dell'applicazione e definisce la logica per accedere e manipolare questi dati. Nel contesto di TextAnalyzerMVC, il modello è responsabile di elaborare il file di testo e calcolare le statistiche associate ad esso, come il numero di parole, lettere e spazi.

- **models/**: Questa cartella contiene il Model dell'applicazione.
  - **fileModel.ts**: Il file `fileModel.ts` definisce la struttura dei dati del file e le funzioni per elaborare il testo.

### View (Vista)

La View è responsabile della presentazione dei dati all'utente e della gestione delle interazioni utente. Nel nostro caso, la View visualizza i risultati dell'analisi del testo all'utente tramite l'interfaccia della console.

- **views/**: Questa cartella contiene la View dell'applicazione.
  - **fileView.ts**: Il file `fileView.ts` gestisce la visualizzazione dei risultati dell'analisi del testo sulla console.

### Controller

Il Controller funge da intermediario tra il Model e la View. È responsabile di ricevere gli input dall'utente tramite la View, invocare le operazioni appropriate sul Model e aggiornare la View con i risultati dell'elaborazione.

- **controllers/**: Questa cartella contiene i Controller dell'applicazione.
  - **fileController.ts**: Il file `fileController.ts` gestisce le interazioni utente e coordina le operazioni tra Model e View.

### Altri Componenti

Oltre alla struttura MVC, ci sono altre componenti nel progetto che svolgono ruoli specifici:

- **services/**: Questa cartella contiene i servizi aggiuntivi utilizzati nell'applicazione.

  - **fileService.ts**: Il file `fileService.ts` fornisce funzionalità di supporto per l'elaborazione dei file.

- **tests/**: Questa cartella contiene i test dell'applicazione.
  - **fileService.test.ts**: Il file `fileService.test.ts` contiene i test per il servizio `fileService.ts`, garantendo che le funzionalità siano correttamente implementate e che l'applicazione funzioni come previsto.

La struttura del progetto riflette la separazione delle responsabilità tra Model, View e Controller, consentendo una gestione più efficiente del codice e una maggiore facilità di sviluppo e manutenzione.

## Istruzioni per Avviare l'Applicazione da GitHub

1. **Clonare il Repository**: Aprire il terminale o la riga di comando e eseguire il seguente comando per clonare il repository da GitHub:

`git clone <URL_del_repository>`

Sostituire `<URL_del_repository>` con l'URL effettivo del repository GitHub che contiene il codice dell'applicazione.

2. **Navigare nella Directory del Progetto**: Entrare nella directory del progetto appena clonato eseguendo il comando:

`cd TextAnalyzerMVC`

3. **Installare le Dipendenze**: Assicurarsi di avere Node.js e npm (Node Package Manager) installati sul sistema. Quindi, eseguire il seguente comando per installare le dipendenze del progetto:

`npm install`

Questo installerà tutte le dipendenze necessarie per eseguire l'applicazione.

4. **Avviare l'Applicazione**: Dopo aver installato le dipendenze, avviare l'applicazione eseguendo il comando:

`npm start`

L'applicazione sarà ora avviata e pronta per l'uso.

Ora l'applicazione dovrebbe essere in esecuzione sul computer locale. Assicurarsi di seguire correttamente tutti i passaggi e che l'ambiente sia configurato correttamente per eseguire un'app Node.js. In caso di problemi durante l'installazione o l'avvio dell'applicazione, è possibile chiedere ulteriori assistenza.

<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">TEXTANALYZERMVC</h1>
</p>
<p align="center">
    <em>HTTP error 401 for prompt `slogan`</em>
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

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running TextAnalyzerMVC](#-running-TextAnalyzerMVC)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

## Overview

HTTP error 401 for prompt `overview`

---

## Features

HTTP error 401 for prompt `features`

---

## Repository Structure

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

## Modules

<details closed><summary>.</summary>

| File                                                                                             | Summary                                       |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| [sample.txt](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/sample.txt)               | HTTP error 401 for prompt `sample.txt`        |
| [tsconfig.json](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/tsconfig.json)         | HTTP error 401 for prompt `tsconfig.json`     |
| [package.json](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/package.json)           | HTTP error 401 for prompt `package.json`      |
| [jest.config.js](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/jest.config.js)       | HTTP error 401 for prompt `jest.config.js`    |
| [package-lock.json](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/package-lock.json) | HTTP error 401 for prompt `package-lock.json` |

</details>

<details closed><summary>src</summary>

| File                                                                           | Summary                                |
| ------------------------------------------------------------------------------ | -------------------------------------- |
| [app.ts](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/src/app.ts) | HTTP error 401 for prompt `src/app.ts` |

</details>

<details closed><summary>src.services</summary>

| File                                                                                                    | Summary                                                 |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [fileService.ts](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/src/services/fileService.ts) | HTTP error 401 for prompt `src/services/fileService.ts` |

</details>

<details closed><summary>src.models</summary>

| File                                                                                              | Summary                                             |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [fileModel.ts](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/src/models/fileModel.ts) | HTTP error 401 for prompt `src/models/fileModel.ts` |

</details>

<details closed><summary>src.controllers</summary>

| File                                                                                                             | Summary                                                       |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [fileController.ts](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/src/controllers/fileController.ts) | HTTP error 401 for prompt `src/controllers/fileController.ts` |

</details>

<details closed><summary>src.views</summary>

| File                                                                                           | Summary                                           |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [fileView.ts](https://github.com/boobaGreen/TextAnalyzerMVC/blob/master/src/views/fileView.ts) | HTTP error 401 for prompt `src/views/fileView.ts` |

</details>

---

## Getting Started

**_Requirements_**

Ensure you have the following dependencies installed on your system:

- **TypeScript**: `version x.y.z`

### Installation

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

### Running TextAnalyzerMVC

Use the following command to run TextAnalyzerMVC:

```sh
npm run build && node dist/main.js
```

### Tests

To execute tests, run:

```sh
npm test
```

---

## Project Roadmap

- [x] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/boobaGreen/TextAnalyzerMVC/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/boobaGreen/TextAnalyzerMVC/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/boobaGreen/TextAnalyzerMVC/issues)**: Submit bugs found or log feature requests for Textanalyzermvc.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/boobaGreen/TextAnalyzerMVC
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
