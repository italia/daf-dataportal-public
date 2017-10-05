import React, { Component } from 'react'

class LineeGuida extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
  
      
    }
 
      render() {
        
        return (
			<div className="u-layout-wide u-layoutCenter">


                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Linee Guida</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                        <div className="Grid Grid--withGutter">
                            <div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">

                                <article className="Prose">
                                    <h3 className="u-text-h3">Il Progetto - Linee Guida</h3>
                                    
									<h4 id="visione">Documentazione</h4>
                                    <p>
                                    Il progetto risponde a una specifica azione del Piano triennale per l'informatica nella PA (2017-2019) sull’”evoluzione di dati.gov.it”. La documentazione tecnica che descrive le componenti del progetto, e come queste possono essere installate e usate, è disponibile in inglese online. 
In linea generale, il Dataportal segue le raccomandazioni delle Linee guida per la valorizzazione del patrimonio informativo pubblico e richiede, a tutti coloro che vogliano contribuire al progetto, di riferirsi alle specifiche azioni individuate nelle linee guida stesse.
                                    </p>

									<h4 id="visione">Ontologie</h4>
                                    <p>
									Il Dataportal espone, tra gli altri, i dati che confluiranno nel Data & Analytics Framework (DAF). I dati seguiranno precisi standard di modellazione definiti nell’ambito della rete di ontologie per la  PA italiana chiamata OntoPA.
                                    </p>

									<h4 id="visione">Come usare il Dataportal</h4>
                                    <p>
                                    Per cercare i dati si può liberamente accedere alla parte pubblica del Dataportal. Per usufruire delle funzionalità di analisi/interrogazione dei dati, di creazione di storie attorno ai dati e di dashboard specifiche, nonché a quelle di condivisione dei dati tra utenti, è necessario accedere all’area privata del Dataportal. L’accesso all’area privata avviene previo login. Se un utente non possiede ancora un account presso il Dataportal, deve registrarsi e successivamente accedere all’area privata mediante le informazioni scelte in fase di registrazione.	

                                    </p>

									<h4 id="visione">Come federare il proprio catalogo</h4>
                                    <p>
                                    Il catalogo dei dati presente nel Dataportal è alimentato grazie al contributo di tutte le Amministrazioni pubbliche italiane che espongono un catalogo dati. Il catalogo si basa su un noto sistema di catalogazione e gestione dei dati chiamato CKAN. Per mantenere costantemente aggiornato il catalogo si utilizzano le funzioni di raccolta automatica (harvesting) fornite da CKAN.
Qualunque pubblica amministrazione italiana che dispone di un catalogo dati può contribuire ad alimentare il Dataportal in maniera automatica, al momento comunicando l’URL del proprio catalogo, l’amministrazione titolare del catalogo e i riferimenti email e telefonici del titolare. 
Il Dataportal è in grado di effettuare harvesting di cataloghi che espongono:
                                    </p>
									<li> Application Programming Interface (API) standard CKAN versione 3</li>
									<li> metadati conformi al profilo di metadatazione DCAT-AP_IT pubblicati secondo lo standard RDF - Resource Description Framework.</li>
                                    <br></br>
									<p>
                                    L’alimentazione e l'aggiornamento del catalogo nazionale sono processi che prevedono quindi la diretta collaborazione con l'Amministrazione titolare dei dati che ha sempre una responsabilità diretta sui propri dati e metadati di descrizione dei dataset. 
									Per le Amministrazioni titolari dei dati è possibile avvalersi di un'altra Pubblica Amministrazione per le attività di alimentazione e aggiornamento del catalogo nazionale: ad esempio nel caso in cui il catalogo di una Regione raccolga i dati delle amministrazioni locali. A tal proposito il Dataportal implementa la politica di raccolta dati come specificata nelle linee guida per la valorizzazione del patrimonio informativo pubblico. 

                                    </p>

                                    </article>
                            </div>
                            <div className="Grid-cell u-sizeFull u-md-size4of12 u-lg-size4of12">
                                <article className="u-padding-all-l u-background-grey-10 u-lineHeight-l u-text-r-s u-textSecondary u-margin-bottom-l Prose-blockquote">
                                    <p>Magnam aut deserunt sed commodi. Et delectus praesentium consectetur quasi incidunt. Similique enim quibusdam aut consequatur quia.
							In reprehenderit harum et sequi et dolor amet rerum. Autem ad aliquam id ipsum rerum. Corporis omnis aliquam nihil deserunt. Autem voluptatem consectetur magnam quo aperiam autem dolores doloremque nihil. Assumenda non sunt quis deserunt molestiae incidunt quia quasi.
							Soluta minima dolorem eum cupiditate. Officiis perferendis enim voluptatem ea harum vel non. Sapiente rerum vero doloremque omnis. Tempora culpa nostrum rem quas aut quas maxime ullam. Et nobis animi optio et ea dolor ipsam hic.</p>
                                </article>


                                <a href="#" title="torna all'inizio del contenuto" className="u-hiddenVisually">torna all'inizio del contenuto</a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default LineeGuida