import React, { Component } from 'react'

class Team extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
  
      
    }
 
      render() {
        
				return (
					<div>
						<div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
							<h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Team</h2>
						</div>
						<div className="u-padding-top-xxl u-background-50"></div>
						<hr className="Separator Separator--up u-background-white" />
						<div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
							<div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
								<div className="Grid Grid--withGutter">
									<div className="Grid-cell u-md-size8of12 u-lg-size8of12 u-padding-right-xl">
										<div className="Grid Grid--withGutter u-margin-bottom-l u-padding-all-xs u-background-grey-10">
											<div className="Grid-cell u-md-size2of12 u-lg-size2of12 u-padding-right-xs">
												<img src="/img/team/user_male2-512.png" className="u-inlineBlock u-margin-all-s" alt="" />
											</div>
											<div className="Grid-cell u-md-size10of12 u-lg-size10of12 u-padding-left-l u-padding-top-xxl">
												<p>
													<a href="/teamDett" className="u-block u-text-xxl u-color-50 u-linkClean u-margin-xxs">Mario Rossi</a>
													<strong className="u-block u-text-l">Sviluppatore</strong>
												</p>
											</div>
										</div>
										<div className="Grid Grid--withGutter u-margin-bottom-l u-padding-all-xs u-background-grey-10">
											<div className="Grid-cell u-md-size2of12 u-lg-size2of12 u-padding-right-xs">
												<img src="/img/team/user_female2-512.png" className="u-inlineBlock u-margin-all-s" alt="" />
											</div>
											<div className="Grid-cell u-md-size10of12 u-lg-size10of12 u-padding-left-l u-padding-top-xxl">
												<p>
													<a href="/teamDett" className="u-block u-text-xxl u-color-50 u-linkClean u-margin-xxs">Claudia Rossi</a>
													<strong className="u-block u-text-l">Sviluppatrice</strong>
												</p>
											</div>
										</div>
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

export default Team