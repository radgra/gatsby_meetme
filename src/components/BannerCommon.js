import React from 'react'

const BannerCommon = (props) => {
    return (
        <section class="banner_area">
            <div class="box_1620">
				<div class="banner_inner d-flex align-items-center">
					<div class="container">
						<div class="banner_content text-center">
							<h2>{props.title}</h2>
							<div class="page_link">
								<a href="index.html">Home</a>
								<a href="about-us.html">{props.title}</a>
							</div>
						</div>
					</div>
				</div>
            </div>
        </section>
    )
}

export default BannerCommon
