import React from "react"
import Layout from "../components/Layout";
import AboutMyself from "../components/index/AboutMyself";
import Testimonials from "../components/index/Testimonials";
import BannerCommon from "../components/BannerCommon";
import Profile from "../components/about/Profile";
import FeatureArea from "../components/index/FeatureArea";


export default () => {
    return (
        <Layout>
            <BannerCommon title="Services"></BannerCommon>
            <FeatureArea white></FeatureArea>
            <Testimonials></Testimonials>
        </Layout>
    )
}