import React from 'react'

const FeatureArea = (props) => {
    return (
        <section className={`feature_area p_120 ${props.white ? 'white_feature' : null}`}>
        	<div className="container">
        		<div className="main_title">
        			<h2>offerings to my clients</h2>
        			<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
        		</div>
        		<div className="feature_inner row">
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<i className="flaticon-city"></i>
        					<h4>Architecture</h4>
        					<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<i className="flaticon-skyline"></i>
        					<h4>Interior Design</h4>
        					<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
        				</div>
        			</div>
        			<div className="col-lg-4 col-md-6">
        				<div className="feature_item">
        					<i className="flaticon-sketch"></i>
        					<h4>Concept Design</h4>
        					<p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </section>
    )
}

export default FeatureArea
