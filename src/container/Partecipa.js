import React, { Component } from 'react'
import Customredirect from '../components/HeaderFooter/CustomRedirect'

class Partecipa extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
  
      
    }
 
      render() {
        
				return (
					<div className="u-layout-wide u-layoutCenter">
						<div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
							<h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Partecipa</h2>
						</div>
						<div className="u-padding-top-xxl u-background-50"></div>
						<hr className="Separator Separator--up u-background-white" />

						<div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">


							<div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
								<div className="Grid Grid--withGutter">
									<div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">

										<article className="Prose">										

											<p>Sei un appassionato di dati e analytics e vuoi utilizzare attivamente il Data & Analytics Framework (DAF), dando il tuo contributo al paese? Registrandoti al Dataportal! otrai accedere alle funzionalità di analisi e condivisione di informazioni disponibili nella sezione privata. Avrai a disposizione un cruscotto da cui accedere a tool di analytics e data visualization e potrai scrivere DataStory per condividere con la community le tue analisi. Inoltre, sul Forum dedicato al DAF potrai discutere con la community di nuove analisi e possibilità di sviluppo della piattaforma, unisciti a noi!</p>

											<h3 className="u-text-h3">DataStory</h3>
											{/* <img src="img/partecipa/metabase.png" className="u-inlineBlock u-margin-bottom-s u-border-all-xxs u-color-grey-30" alt="" /> */}
											<p>Le DataStory sono dei blog post in cui descrivere un'analisi fatta sui dati del DAF. È possibile integrare dashboard e grafici creati con gli strumenti messi a disposizione (Superset e Metabase) e condividere i risultati con la community. Le storie create verranno pubblicate nella relativa sezione pubblica del Dataportal.
											<br></br>
											<Customredirect history={this.props.history} to='/userStoriesList' label='Data Stories' />
											</p>


											<h3 className="u-text-h3">Analytics e Data Visualization con Superset</h3>											
											<img src="img/partecipa/superset.png" className="u-inlineBlock u-margin-bottom-s u-border-all-xxs u-color-grey-30" alt="" />
											<p>Superset è un tool open-souce di Business Intelligence sviluppato da AirBnB con cui è possibile creare grafici (‘slices’ nel gergo di Superset), dashboard ed eseguire query SQL. Abbiamo integrato Superset con il DAF e il Dataportal per offrire agli utenti la possibilità di creare le proprie analisi e condividerle con la community in modalità self service. L’integrazione con il Dataportal permette di creare DataStory e dashboard che integrano le analisi salvate in Superset.											<br></br>
											<a href="https://daf-docs.readthedocs.io/en/latest/manutente/datascience/superset.html" target="_blank">Documentazione </a>											
											</p>


											<h3 className="u-text-h3">Data Visualization con Metabase</h3>
											<img src="img/partecipa/metabase.png" className="u-inlineBlock u-margin-bottom-s u-border-all-xxs u-color-grey-30" alt="" />
											<p>Metabase è uno strumento di semplice utilizzo per creare visualizzazioni grafiche a partire dai dati presenti nel DAF. I risultati delle vostre analisi possono essere integrati nelle vostre DataStory.
											<br></br>
											<a href="https://daf-docs.readthedocs.io/en/latest/manutente/datascience/metabase.html" target="_blank">Documentazione </a>											
											</p>



											<h3 className="u-text-h3">Data Science con Jupyter & Spark</h3>
											<img src="img/partecipa/spark.png" className="u-inlineBlock u-margin-bottom-s u-border-all-xxs u-color-grey-30" alt="" />
											<p>Jupyter Notebook è un tool open-source che permette di eseguire codice in maniera interattiva. É diventato uno standard de facto per data science perché offre la possibilità di sviluppare analisi dati, generare grafici, costruire modelli di machine learning e molto altro, con i tuoi linguaggi di programmazione preferiti.
											<br></br>
											<a href="https://daf-docs.readthedocs.io/en/latest/manutente/datascience/jupyter.html" target="_blank">Documentazione </a>										
											</p>


											<h3 className="u-text-h3">Real-time Data Visualization con Grafana (in sviluppo)</h3>
											<img src="img/partecipa/grafana.jpg" className="u-inlineBlock u-margin-bottom-s u-border-all-xxs u-color-grey-30" alt="" />
											<p>Graphana (open-source) permette di fare query e generare grafici che puntano sui dati real-time gestiti dal DAF. Con Grafana potrai creare dashboard interattive per tenere sotto controllo i fenomeni di tuo interesse.
											L'integrazione con Grafana sarà disponibile nelle prossime settimane.
											</p>										

										</article>

									</div>
						{/* 			<div className="Grid-cell u-sizeFull u-md-size4of12 u-lg-size4of12">

										<article className="u-padding-all-l u-background-grey-10 u-lineHeight-l u-text-r-s u-textSecondary u-margin-bottom-l Prose-blockquote">
											<p>Magnam aut deserunt sed commodi. Et delectus praesentium consectetur quasi incidunt. Similique enim quibusdam aut consequatur quia.</p>
											<p>
												<a href="#" className="u-block u-text-l u-color-50 u-linkClean u-padding-all-xxs"><span className="Icon-download"></span><span className="u-padding-left-s">Scarica Metabase</span></a>
												<a href="#" className="u-block u-text-l u-color-50 u-linkClean u-padding-all-xxs"><span className="Icon-download"></span><span className="u-padding-left-s">Scarica Superset</span></a>
											</p>

										</article>


										<a href="#" title="torna all'inizio del contenuto" className="u-hiddenVisually">torna all'inizio del contenuto</a>
									</div> */}
								</div>
							</div>


						</div>
					</div>
				)
    }
}

export default Partecipa