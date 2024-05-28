# TextAnalyzerMVC

## Requisiti dell'Applicazione

### Richieste

**A**: L'applicazione deve essere in grado di leggere un file da un percorso inserito in input dall’utente, che può essere un percorso locale o un indirizzo web.
**B**: L'applicazione deve determinare il numero totale di parole nel file.
**C**: L'applicazione deve calcolare il numero totale di lettere nel file.
**D**: L'applicazione deve identificare e contare il numero totale di spazi nel file, inclusi spazi consecutivi.
**E**: L'applicazione deve individuare le parole che si ripetono più di 10 volte nel testo (ma non esattamente 10 volte) e indicare il numero di volte in cui si ripetono.

### Decisioni e Spiegazioni

Durante lo sviluppo dell'applicazione, abbiamo dovuto prendere diverse decisioni per garantire il corretto funzionamento e l'adempimento dei requisiti. Ecco alcune delle scelte chiave fatte:

- Inclusione dei Caratteri Speciali e degli Emoji : Abbiamo deciso di includere i caratteri speciali, come emoji e simboli, nel conteggio delle parole. Questa scelta riflette l'uso moderno dei testi e garantisce una rappresentazione accurata del testo.
- Metodo di Conteggio delle Parole : Abbiamo implementato un algoritmo per contare le parole nel testo, inclusi gli spazi consecutivi. Questo approccio offre una misurazione precisa del numero di parole e degli spazi totali.

- Conteggio delle Parole Ripetute : Abbiamo sviluppato un algoritmo per individuare e contare le parole che si ripetono più di 10 volte (ma non esattamente 10 volte) nel testo. Questo ci consente di identificare le parole più comuni e significative nel testo.

-Considerazione delle Parole in Maiuscolo e Minuscolo come Uguali : Abbiamo deciso di considerare le parole in maiuscolo e minuscolo come equivalenti nel conteggio delle parole ripetute. Questo assicura una corretta identificazione delle parole ripetute indipendentemente dalla loro formattazione.

## Esempi

- Testo Standard**: "Hello world! How are you?" viene suddiviso in 5 parole: "Hello", "world!", "How", "are", "you?".
- Testo con Caratteri Speciali**: "I ❤️ coding!" viene considerato come 3 parole: "I", "❤️", "coding!".
- Testo con Sequenze di Caratteri Speciali**: "👋🏼Hello!👋🏼" viene considerato come 3 parole: "👋🏼Hello!👋🏼".
- Testo con Parole in Maiuscolo e Minuscolo: "Hello hello World world WORlD" viene considerato come 2 parole uniche: "hello" (ripetuta 2 volte) e "world" (ripetuta 2 volte).
- Testo con Sequenze di Caratteri Speciali e Maiuscolo: "HELLO! hello hello" viene considerato come 1 parola unica: "hello" (ripetuta 3 volte).
- Testo con Parole Completamente in Maiuscolo e Minuscolo: "HELLO hello hello" viene considerato come 1 parola unica: "hello" (ripetuta 3 volte).
- Testo con Caratteri Speciali e Maiuscolo: "HeLLo! WOrld! hello" viene considerato come 2 parole uniche: "hello" (ripetuta 2 volte) e "world" (ripetuta 1 volta).
