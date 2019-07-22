import React from 'react'
import personalImage from '../../img/personal.jpg'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'


const query= graphql`
query {
    file(relativePath: {eq: "personal.jpg"}) {
      id
      childImageSharp {
        fluid{
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
  `

const Profile = () => {
	const {file} = useStaticQuery(query)
    // console.log(file.childImageSharp.fixed);
    return (
        <section class="profile_area">
           	<div class="container">
           		<div class="profile_inner p_120">
					<div class="row">
						<div class="col-lg-5">
							<Img fluid={file.childImageSharp.fluid}></Img>
							{/* <img class="img-fluid" src={personalImage} alt=""/> */}
						</div>
						<div class="col-lg-7">
							<div class="personal_text">
								<h6>Hello Everybody, i am</h6>
								<h3>Donald McKinney</h3>
								<h4>Junior UI/UX Developer</h4>
								<p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
								<ul class="list basic_info">
									<li><a href="#"><i class="lnr lnr-calendar-full"></i> 31st December, 1992</a></li>
									<li><a href="#"><i class="lnr lnr-phone-handset"></i> 44 (012) 6954 783</a></li>
									<li><a href="#"><i class="lnr lnr-envelope"></i> businessplan@donald</a></li>
									<li><a href="#"><i class="lnr lnr-home"></i> Santa monica bullevard</a></li>
								</ul>
								<ul class="list personal_social">
									<li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter"></i></a></li>
									<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
           		</div>
            </div>
        </section>
    )
}

export default Profile
