import React from "react"
import Layout from "../components/Layout";
import Banner from "../components/index/Banner";
import AboutMyself from "../components/index/AboutMyself";
import TabsArea from "../components/index/TabsArea";
import FeatureArea from "../components/index/FeatureArea";
import HomeGallery from "../components/index/HomeGallery";
import Testimonials from "../components/index/Testimonials";

export default () => {
    return (
        <Layout>
            <Banner></Banner>
            <AboutMyself></AboutMyself>
            <TabsArea></TabsArea>
            <FeatureArea></FeatureArea>
            <HomeGallery></HomeGallery>
            <Testimonials></Testimonials>
        </Layout>
    )
}
