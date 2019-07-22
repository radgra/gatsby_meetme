import React from 'react'
import Img from 'gatsby-image'
import iconImg from '../../img/gallery/icon.png'


const GalleryImage = ({data}) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
        <div className="h_gallery_item">
            <div className="g_img_item">
                {/* <img className="img-fluid" src={project1} alt="" /> */}
                <Img fixed={data.image.src.childImageSharp.fixed} className="img-fluid"></Img>
                <a className="light" href="img/gallery/project-1.jpg"><img src={iconImg} alt="" /></a>
            </div>
            <div className="g_item_text">
                <h4>{data.title}</h4>
                {/* <h4>3D Helmet Design</h4> */}
                {/* <p>Client Project</p> */}
                <p>{data.subtitle}</p>
            </div>
        </div>
    </div>
    )
}

export default GalleryImage
