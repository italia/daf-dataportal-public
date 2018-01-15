import React from 'react';

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
							<h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Flusso studenti Ateneo - Anno 2015-2016</h2>
						</div>
						<div className="u-padding-top-xxl u-background-50"></div>
						<hr className="Separator Separator--up u-background-white" />
						<div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
							<div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
								<div className="Grid Grid--withGutter">
                  <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">  
                      <article className="Prose">										
                        <p>Visualizza il flusso di studenti per regione. 
                            Inserisci il nome di una regione italiana per visualizzare: 
                            il numero di studenti immatricolati provenienti da una regione diversa (in <span style={{'color':'steelblue'}}>blu</span>, flusso entrante), 
                            il numero di studenti che ha lasciato la regione per immatricolarsi in una regione diversa (in <span style={{'color':'firebrick'}}>rosso</span>, flusso uscente), 
                            ed il numero di studenti provenienti dalla stessa regione in cui sono iscritti (in <span style={{'color':'wheat'}}>marrone</span> chiaro, neutro). </p>
                        <p>
                            Il grafico distingue 
                            i dati relativi agli studenti di sesso maschile 
                            da quelli di sesso femminile 
                            utilizzando per gli studenti di sesso maschile un colore più intenso 
                            (ad esempi, beige chiaro per studentesse che studiano in sede, 
                            beige più scuro per studenti che studiano in sede). 
                        </p>
                      </article>
                  </div>
									<div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">
                    <iframe
                      ref="iframe"
                      frameBorder={'0'}
                      style={iframeStyle}
                      src='https://dataportal.daf.teamdigitale.it/studenti.html'
                    />
									</div>
								</div>
							</div>
						</div>
					</div>
    );
  }
}

export default DataApplicationStudenti;
