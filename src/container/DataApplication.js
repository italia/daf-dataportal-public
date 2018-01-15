import React, { Component } from 'react'
import Customredirect from '../components/HeaderFooter/CustomRedirect'

class DataApplication extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="u-layout-wide u-layoutCenter">
                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Data Application</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                        <div className="Grid Grid--withGutter">
                            <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">
                            </div>
                        </div>
                    </div>
                    <div className="u-padding-left-xxl u-padding-top-xxl u-padding-bottom-xxl u-background-grey-10 u-color-grey-50 u-padding-right-xxl u-margin-bottom-l">
                        <h3 className="u-padding-r-bottom">
                            <Customredirect history={this.props.history} to='/dataapplicationstudenti' label='Flusso studenti Ateneo - Anno 2015-2016' linkStyle={'u-text-h4 u-textClean u-color-black'} />
                        </h3>
                        <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                            Visualizza il flusso di studenti per regione. Il numero di studenti immatricolati provenienti da una regione diversa (in blu, flusso entrante), 
                            il numero di studenti che ha lasciato la regione per immatricolarsi in una regione diversa (in rosso, flusso uscente),ed il numero di studenti provenienti dalla stessa regione in cui sono iscritti (in marrone chiaro, neutro). 
                            Il grafico distingue i dati relativi agli studenti di sesso maschile da quelli di sesso femminile. 
                        </p>
                        <p><strong>Pubblicato da: </strong></p>
                        <p><strong>Data di ultima modifica: </strong><span>15 gennaio 2018</span></p>
                    </div>
                    <div className="u-padding-left-xxl u-padding-top-xxl u-padding-bottom-xxl u-background-grey-10 u-color-grey-50 u-padding-right-xxl u-margin-bottom-l">
                        <h3 className="u-padding-r-bottom">
                            <Customredirect history={this.props.history} to='/dataapplicationrifiuti' label='Rifiuti nei comuni in regioni a statuto ordinario' linkStyle={'u-text-h4 u-textClean u-color-black'} />
                        </h3>
                        <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                            Visualizzazione di un grafico interattivo dei dati elaborati da SOSE. Il grafico rappresenta i comuni italiani di regioni a statuto ordinario attraverso un grafico "Efficienza nella gestione della spesa" vs "Livello dei servizi erogati" utilizzando dati relativi alla gestione dei rifiuti.
                            L'utente può scegliere quali regioni o quali province visualizzare.
                        </p>
                        <p><strong>Pubblicato da: </strong>SOSE</p>
                        <p><strong>Data di ultima modifica: </strong><span>15 gennaio 2018</span></p>
                    </div>
                    <div>
                        <p className="u-padding-top-xxl"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataApplication