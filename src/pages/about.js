import React from "react"
import Layout from "../components/Layout";
import AboutMyself from "../components/index/AboutMyself";
import Testimonials from "../components/index/Testimonials";
import BannerCommon from "../components/BannerCommon";
import Profile from "../components/about/Profile";


export default () => {
    return (
        <Layout>
            <BannerCommon title="About Us"></BannerCommon>
            <Profile></Profile>
            <AboutMyself></AboutMyself>
            <Testimonials></Testimonials>
        </Layout>
    )
}