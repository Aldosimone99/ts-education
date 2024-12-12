interface IPartecipante{
    nome: string;
    cognome: string;
    nazionalita: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string;
    formazioneDiInteresse: string;
    iscrivitiCorso(corso: ICorso): void;
}


interface ICorso{
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    elencoIscritti: IPartecipante[];
    aggiungiPartecipante(partecipante: IPartecipante): void;
}


interface IAzienda {
    nomeAzienda: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
}


class Partecipante implements IPartecipante{
    nome: string;
    cognome: string;
    nazionalita: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string;
    formazioneDiInteresse: string;

    constructor(nome: string, cognome: string, nazionalita: string, livelloIstruzione: string, competenzeLinguistiche: string, FormazioneDiInteresse: string){
        this.nome = nome;
        this.cognome = cognome;
        this.nazionalita = nazionalita;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.formazioneDiInteresse = FormazioneDiInteresse;
    }

    iscrivitiCorso(corso: ICorso): void {
        corso.aggiungiPartecipante(this);
    }
}


class Corso implements ICorso{
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    elencoIscritti: IPartecipante[] = [];

    constructor(titolo: string, descrizione: string, settoreProfessionale: string, durata: number){
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
    }

    aggiungiPartecipante(partecipante: IPartecipante): void {
        console.log("il partecipante: " + partecipante.nome +" "+ partecipante.cognome +" si è iscritto al corso "+ this.titolo);
        this.elencoIscritti.push(partecipante);
    }

}

class Azienda implements IAzienda{
    nomeAzienda: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];

    constructor(nomeAzienda: string, settoreAttivita: string, descrizione: string){
        this.nomeAzienda = nomeAzienda;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = [];
    }

    offriPosizione(partecipante: IPartecipante, posizione: string): void {
        this.posizioniAperte.push(posizione);
        console.log(this.nomeAzienda+" ha offerto a "+partecipante.nome + " " + partecipante.cognome+" la posizione "+ posizione);  
    }

}


// Esempio di utilizzo

const partecipante1 = new Partecipante("John", "Doe", "Italiano", "Superiori", "Inglese, Spagnolo", "Laurea in Scienze");
const partecipante2 = new Partecipante("Jane", "Smith", "Americano", "Medio", "Francese, Inglese", "Laurea in Ingegneria");

const corso1 = new Corso("Corso di Ingegneria Informatica", "Corso per la formazione dei dipendenti in Ingegneria Informatica", "Informatica", 360);
const corso2 = new Corso("Corso di Medicina", "Corso per la formazione dei dipendenti in Medicina", "Medicina", 320);

const azienda1 = new Azienda("Azienda", "Azienda di Ingegneria Informatica", "Azienda molto bella");
const azienda2 = new Azienda("Azienda 2", "Azienda di Ingegneria Informatica 2", "Azienda molto bella 2");

partecipante1.iscrivitiCorso(corso1);
partecipante2.iscrivitiCorso(corso2);

azienda1.offriPosizione(partecipante1, "Software Engineer");
azienda2.offriPosizione(partecipante2, "Data Scientist");

console.log("elenco iscritti al corso "+corso1.titolo);
console.log(corso1.elencoIscritti);
console.log("elenco iscritti al corso "+corso2.titolo);
console.log(corso2.elencoIscritti);
console.log("elenco posizioni offerte da "+azienda1.nomeAzienda);
console.log(azienda1.posizioniAperte);
console.log("elenco posizioni offerte da "+azienda2.nomeAzienda);
console.log(azienda2.posizioniAperte);