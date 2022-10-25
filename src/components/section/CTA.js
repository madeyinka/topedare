import React from 'react'
import ShowLove from "../../assets/about/love-shapes.svg"
import Button from '../form/Button'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'
// import SectionTitle from './SectionTitle'
// import SectionSubTitle from './SectionSubTitle';
import useSWR from 'swr'
import parse from 'html-react-parser';
const _config = require("../../config.json")


const CTA = ({ ctaSectionHeading, title, subTitle, qoute, qouteAuthor, volunteerHeading, volunteerTitle }) => {

    const { data, error } = useSWR(`${_config.REACT_APP_BASE_URL}public/content/components?user=${_config.REACT_APP_USER_lOGIN_ID}`)

    if (error) return console.log(error)

    if (!data) {
        return <h1>Loading...</h1>
    }
    const renderIntro = data?.data?.components?.find(({ slug }) => {
        return slug === "cta-intro"
    })
    const renderQoute = data?.data?.components?.find(({ slug }) => {
        return slug === "cta-qoute"
    })
    const renderVolunteer = data?.data?.components?.find(({ slug }) => {
        return slug === "cta-be-a-volunteer"
    })

    return (
        <div className="py-5 mb-10 rounded-md  ">
            {renderIntro &&
                <div className="px-5 lg:px-6 lg:pl-8 xl:pl-20 xl:pr-8">
                    <div className="relative">
                        <Fade top>
                            {parse(renderIntro?.description)}
                        </Fade>
                    </div>
                </div>}
            <section className="cta-area relative block overflow-hidden">
                <div className="cta-area_bg bg-cta-bg2 absolute left-0 bottom-0 right-0 bg-scroll bg-no-repeat bg-cover" />
                <div className="w-full">
                    <div className="">
                        <div className="">
                            <div className="px-3 lg:px-20 relative block  pb-20">
                                {renderQoute && <div className="cta-content_top pl-4 lg:px-[100px] pt-[4.5rem] pb-[4.8125rem] bg-cta-bg relative block bg-scroll bg-no-repeat bg-cover " >
                                    <div className="max-w-[19.5625rem] lg:max-w-[21.25rem]">
                                        <Fade bottom>
                                            {parse(renderQoute?.description)}
                                        </Fade>
                                    </div>
                                </div>}

                                {renderVolunteer &&
                                    <div className="relative flex flex-row items-center justify-between flex-wrap mt-10 lg:mt-20">
                                        <div className="relative flex mb-10 lg:mb-0 items-center ">
                                            <Fade left>
                                                <div className="relative block">
                                                    <img src={ShowLove} alt="icon" className="w-16 h-16 lg:w-20 lg:h-20" />
                                                </div>
                                            </Fade>
                                            <Fade bottom>
                                                {parse(renderVolunteer?.description)}
                                                {/* <div className="relative block pl-5">
                                                    <p className="text-gray-600 text-lg lg:text-2xl leading-6 font-medium mb-2">Make a Difference Today!</p>
                                                    <h2 className="text-2xl lg:text-5xl font-extrabold text-tdf-blue-50/80 ">Become a Volunteer</h2>
                                                </div> */}
                                            </Fade>
                                        </div>
                                        <div className="relative mx-auto lg:mx-0 block">
                                            <Fade right>
                                                <Link to="/contact">
                                                    <Button>
                                                        Register
                                                        Now
                                                    </Button>
                                                </Link>
                                            </Fade>

                                        </div>
                                    </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default CTA