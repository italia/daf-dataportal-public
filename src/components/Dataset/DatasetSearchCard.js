import React from 'react';

import TitleSeparator from '../TitleSeparator/titleSeparator.js';
import DatasetBox from './DatasetBox.js';
import { Link } from 'react-router-dom';

import {FormattedDate} from 'react-intl';

export default class DatasetSearchCard extends React.Component {

    constructor(props) {
        super(props)
    }

    removeDuplicate(array){
        let arrayNew = [];
        array.map((res, index) => {
            arrayNew.push(res.format)            
        });
        
        return Array.from(new Set(arrayNew))
    }


    trunc (text, size) {
        if(text){
          if(text.length > size) {
            text = text.substr(0, size);
            text += "...";
          }
        } else {
          text = "---"
        }
    
        return text;
      }

    render() {

        return (
            <div className="u-padding-left-xxl u-padding-top-xxl u-padding-bottom-xxl u-background-grey-10 u-color-grey-50 u-padding-right-xxl u-margin-bottom-l">
                <h3 className="u-padding-r-bottom">
                    <Link className="u-text-h4 u-textClean u-color-black" to={"/dataset/" + this.props.dataset.id}>
                       {this.trunc(this.props.dataset.title, 300)}
                    </Link>
                </h3>
                <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                   {this.trunc(this.props.dataset.notes, 300)}
                </p>
                <p><strong>Pubblicato da: </strong>{this.props.dataset.organization.title}</p>
                <p><strong>Data di ultima modifica: </strong>
                    <FormattedDate
                        value={this.props.dataset.organization.created}
                        day="numeric"
                        month="long"
                        year="numeric" />
                </p>
            {/*     <div><strong>Categorie: </strong>
                    {
                        this.props.dataset.tags.map((tag, index) => {
                        return(
                            <div className="badge mr-10" key={index}>
                                {tag.name}
                            </div>
                        );
                        })
                    }
                </div> */}
                <p className="u-padding-top-xxl">
                <div className="Grid Grid--fit Grid--withGutter ">
                                    <div className="Grid-cell u-md-size2of12 u-lg-size2of12 u-layout-matchHeight">      
                    {
                        this.props.dataset.resources.length == 0 &&
                        <div>
                            <span className="u-textWeight-700 u-text-r-xs u-margin-right-s">Nessuna risorsa presente nel dataset</span>
                        </div>
                    }
                    {
                        
                        this.removeDuplicate(this.props.dataset.resources).map((res, index) => {
                            
                        return(
                            <div key={index}>
                                                                 
                                        <div className="u-background-5 u-color-black u-margin-right-l u-margin-bottom-l u-borderRadius-m u-padding-all-s u-textWeight-500">                                            
                                            {res}
                                        </div>
                                    </div>
                            
                        );
                        })
                    }
                    </div>
                            </div>
                </p>
                
            </div>
        );
    }
}
