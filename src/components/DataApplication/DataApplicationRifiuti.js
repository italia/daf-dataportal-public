import React from 'react';

class DataApplicationRifiuti extends React.Component {

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
							<h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Rifiuti nei Comuni in Regioni a Statuto Ordinario</h2>
						</div>
						<div className="u-padding-top-xxl u-background-50"></div>
						<hr className="Separator Separator--up u-background-white" />
						<div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
							<div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
								<div className="Grid Grid--withGutter">
                <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">  
                      <article className="Prose">										
                        <p>Il grafico riporta sull'asse orizzontale una misura dell'efficienza del comune nella gestione della spesa. Tale valore è stato ottenuto 
                        confrontando per tutti i comuni la spesa storica e il fabbisogno standard, più precisamente considerando la distribuzione del rapporto tra:</p>
                        <ul>
                        <li>la differenza tra la spesa storica e il fabbisogno standard</li>
                        <li>il fabbisogno standard </li>
                        </ul>
                        <p>
                        per tutti i comuni ed 
                        assegnando a ciascun comune un punteggio da 1 a 10 a seconda del valore di tale rapporto. Ad esempio ai comuni con una spesa inferiore 
                        al fabbisogno standard viene assegnato un punteggio più alto.
                        Sull’asse verticale il grafico riporta il posizionamento del comune rispetto al pvello dei servizi erogati, che viene calcolato come il rapporto fra</p>
                        <ul>
                        <li>la differenza tra il pvello storico e il pvello standard dei servizi</li> <li>il pvello standard.</li>
                        </ul>
                        <p>
                        Entrambi i posizionamenti sono espressi su una scala da 1 (comuni meno virtuosi) a 10 (comuni più virtuosi).
                        Nel grafico i comuni più virtuosi sono quelli in alto a destra (in verde), quelli meno virtuosi 
                        in basso a sinistra (in rosso).
                        Note: i dati originari sono relativi agli anni 2010 e 2013 e sono stati interpolati in maniera lineare per 2011 e 2012;
                        per semplificare la visualizzazione, nei grafici relativi alle regioni sono riportati solo i comuni con più di 30000 abitanti 
                        mentre nei grafici relativi alle province sono riportati solo i comuni con più di 5000 abitanti.
                        </p>
                      </article>
                  </div>
                  <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">
                  <iframe
                    ref="iframe"
                    frameBorder={'0'}
                    style={iframeStyle}
                    src='https://dataportal.daf.teamdigitale.it/rifiuti.html'
                  />
									</div>
								</div>
							</div>
						</div>
					</div>
    );
  }
}

export default DataApplicationRifiuti;
