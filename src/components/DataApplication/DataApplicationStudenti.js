import React from 'react';
import App from './DataApplicationStudenti/App'

class DataApplicationStudenti extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = props;
      }


  render() {
    
    const iframeStyle = {
      width: '100%',
      height: '700px',
      border: '0'
    }

    return (


<div className="u-layout-wide u-layoutCenter">
						<div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
							<h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Flusso regionale degli studenti di Ateneo - A.A. 2015/2016</h2>
						</div>
						<div className="u-padding-top-xxl u-background-50"></div>
						<hr className="Separator Separator--up u-background-white" />
						<div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
							<div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
								<div className="Grid Grid--withGutter">
                <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">
                    <App />
                    <br/>
                    <article className="Prose">										
                          <p>L'infografica visualizza i dati raccolti dal MIUR relativi al numero, la residenza ed il sesso
                          degli studenti immatricolati ed iscritti negli Atenei italiani nell'anno accademico 2015/2016.
                          </p>
                          <p>
                          La visualizzazione raggruppa i dati per regione e mostra il flusso regionale degli studenti di Ateneo in Italia in tale anno.
                          In particolare, per ciascuna regione il grafico visualizza quanti studenti provenienti da altre regioni
                          sono iscritti a ciascun indirizzo (in blu, flusso entrante), quanti studenti studiano in atenei presenti
                          nella stessa regione di residenza (in beige), e quanti studenti invece lasciano la regione per studiare altrove
                          (in rosso, flusso uscente).
                          </p>
                          <p>
                          Per ciascuna regione il grafico visualizza anche come gli studenti sono divisi per indirizzo (Agraria, Architettura, etc)
                          e per sesso (colore più o meno intenso).
                          </p>
                          <p>
                          I dati originari sono disponibili a questo <a href="https://dati.ustat.miur.it/dataset/2015-16-iscritti/resource/9bebad94-3c0b-469e-8e50-b474d52aeb27">link</a> e  
                          consistono di una tabella di 117661 righe e 10 colonne contenente il conteggio del numero di studenti
                          iscritti e immatricolati per provincia e regione di residenza e provincia della sede didattica dell'Ateneo,
                          nell'anno accademico 2015/16.
                          </p>
                          <p>
                          Per capire il tipo di informazione che contiene l'infografica, possiamo confrontare regioni come la Lombardia e la Puglia.
                          </p>
                          <p>
                          La Puglia presenta un rilevante flusso di studenti uscente (sulla sinistra - in
                          rosso - l'istogramma del numero di studenti residenti in Puglia ma iscritti o immatricolati in regioni diverse dalla Puglia)
                          di molto maggiore rispetto al flusso di studenti entrante (a destra - in blu l'istogramma del numero di studenti non residenti
                          in Puglia ma iscritti o immatricolati in Atenei pugliesi). Tuttavia in Puglia il flusso uscente di studenti e la somma
                          del flusso di studenti entranti e studenti stazionari (a destra - in beige - l'istogramma degli studenti residenti in Puglia
                          che sono iscritti ad Atenei pugliesi) risulta comparabile. La Lombardia presenta invece un flusso di studenti emigrati dalla
                          Lombardia sicuramente inferiore al flusso di studenti immigrati.
                          Molti studenti, sia in Lombardia che in Puglia si iscrivono ad Atenei della regione in cui risiedono (a destra - in
                          beige - l'istogramma del numero di studenti residenti nella regione e che studiano in Atenei della stessa regione).
                          </p>
                          <p>
                          La visualizzazione permette di individuare dei trend regionali. Ad esempio, dal grafico relativo alla Puglia si evince
                          come 7137 studenti di medicina e 7201 studenti di ingegneria con residenza in Puglia si spostino in Atenei
                          di regioni diverse dalla Puglia. Questi dati potrebbero motivare uno studio mirato ad individuare strategie regionali utili a
                          limitare il numero di studenti residenti nella regione che si spostano per raggiungere un Ateneo
                          al di fuori della regione in una determinata facoltà.
                          </p>
                          <p>
                          L'infografica mostra anche diversità presenti fra studenti di sesso diverso. Infatti per ciascun colore
                          (rosso, blu, beige), l'infografica utilizza due intensità, una più chiara per
                          rappresentare il numero di studenti di sesso maschile, ed una più scura per rappresentare il numero di studentesse. Il grafico
                          mostra come più studentesse risultino iscritte a discipline come l'insegnamento, la medicina, legge o chimica farmaceutica,
                          mentre più studenti di sesso maschili siano iscritti ad ingegneria o ad indirizzi scientifici.
                          </p>
                      </article>
									</div>
								</div>
							</div>
						</div>
					</div>
    );
  }
}

export default DataApplicationStudenti;
