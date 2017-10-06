import React, { Component } from 'react'

class Missione extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
  
      
    }
 
      render() {
        
        return (
            <div className="u-layout-wide u-layoutCenter">


                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Missione</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                        <div className="Grid Grid--withGutter">
                            <div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">

                                <article className="Prose">
                                    <h3 className="u-text-h3">Il Progetto - Missione</h3>
                                    
                                    <p>
                                    Il primo progetto nazionale di pubblicazione di dati delle Pubbliche Amministrazioni è stato lanciato nel 2011 con il portale dati.gov.it,  divenuto nel tempo il riferimento nazionale per i dati aperti della Pubblica Amministrazione Italiana. Dati.gov.it nasceva con l’obiettivo di fornire, in un unico punto di accesso, le principali informazioni sui dati aperti esposti dalle Pubbliche Amministrazioni locali e centrali, facilitando così la ricerca dei dati e pertanto il loro potenziale riutilizzo.
                                    </p>
                                    
                                    <p>Il nuovo progetto Dataportal ha lo scopo di andare oltre la mera pubblicazione di un catalogo di dati aperti. Esso mira a rendere i dati delle pubbliche amministrazioni:</p>

                                    <ol>
                                        <li>facilmente scopribili: esso rappresenta ancora un unico punto di accesso ai dati pubblici delle Pubbliche Amministrazioni;</li>
                                        
                                        <li>rilevanti per lo sviluppo di servizi innovativi, grazie anche a una maggiore standardizzazione dei dati e dei relativi metadati;</li>
                                        
                                        <li>facilmente analizzabili e comprensibili per via della disponibilità nel Dataportal di una serie di strumenti che consentono agli utenti di effettuare visualizzazioni dei <a href="/partecipa">dati</a> e di descrivere <a href="/crea">storie</a> attorno ai dati. fornendo così un’idea anche dell’impatto del loro riutilizzo sulla collettività.</li>
                                        </ol>
                                    
                                    <p>Il Dataportal è caratterizzato da una parte pubblica dove chiunque può navigare le data story, i grafici associati ai dati  i dati presenti nel catalogo nazionale e da una sezione privata alla quale si accede previo login, dove gli utenti possono sfruttare le funzionalità di analisi/interrogazione sui dati e condivisione di informazioni tra utenti. </p>
                                </article>
                            </div>
                            <div className="Grid-cell u-sizeFull u-md-size4of12 u-lg-size4of12">
                                <article className="u-padding-all-l u-background-grey-10 u-lineHeight-l u-text-r-s u-textSecondary u-margin-bottom-l Prose-blockquote">
                                    <p>Il patrimonio informativo pubblico è vasto e articolato, costituito da diverse tipologie di dato. Il DAF e la sua componente Dataportal ti offrono l’opportunità di rendere disponibili i tuoi dati alle community, di esplorare e scoprire i dati di cui hai bisogno, di comprendere i dati più facilmente attraverso dashboard e strumenti di analisi e monitoraggio.
                                    Scopri come fare! Inizia a <a href="/dataset/search">esplorare</a> la ricchezza che i dati possono offrire!</p>
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

export default Missione