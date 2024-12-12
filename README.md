# Gestione Partecipanti, Corsi e Aziende in TypeScript

## Descrizione

Questo progetto è un sistema di gestione di partecipanti, corsi e aziende implementato in **TypeScript**. L'applicazione permette di:
- Creare e gestire partecipanti con dati personali e preferenze di formazione.
- Creare corsi con informazioni dettagliate e un elenco di iscritti.
- Gestire aziende che offrono posizioni lavorative ai partecipanti.

## Struttura del Progetto

### **Interfacce**
1. **`IPartecipante`**
   - Descrive le proprietà e i metodi di un partecipante.
   - Proprietà: `nome`, `cognome`, `nazionalita`, `livelloIstruzione`, `competenzeLinguistiche`, `formazioneDiInteresse`.
   - Metodo: `iscrivitiCorso(corso: ICorso)`.

2. **`ICorso`**
   - Descrive le proprietà e i metodi di un corso.
   - Proprietà: `titolo`, `descrizione`, `settoreProfessionale`, `durata`, `elencoIscritti`.
   - Metodo: `aggiungiPartecipante(partecipante: IPartecipante)`.

3. **`IAzienda`**
   - Descrive le proprietà e i metodi di un'azienda.
   - Proprietà: `nomeAzienda`, `settoreAttivita`, `descrizione`, `posizioniAperte`.
   - Metodo: `offriPosizione(partecipante: IPartecipante, posizione: string)`.

### **Classi**
1. **`Partecipante`**
   - Implementa l'interfaccia `IPartecipante`.
   - Permette ai partecipanti di iscriversi ai corsi.

2. **`Corso`**
   - Implementa l'interfaccia `ICorso`.
   - Gestisce l'aggiunta di partecipanti al corso.

3. **`Azienda`**
   - Implementa l'interfaccia `IAzienda`.
   - Permette alle aziende di offrire posizioni lavorative ai partecipanti.

## Esempio di Utilizzo

### Creazione di Oggetti
```typescript
const partecipante1 = new Partecipante("John", "Doe", "Italiano", "Superiori", "Inglese, Spagnolo", "Laurea in Scienze");
const corso1 = new Corso("Corso di Ingegneria Informatica", "Corso per la formazione dei dipendenti in Ingegneria Informatica", "Informatica", 360);
const azienda1 = new Azienda("Azienda", "Azienda di Ingegneria Informatica", "Azienda molto bella");
```

### Conversione in JS
```bash
    tsc Interface.ts
```