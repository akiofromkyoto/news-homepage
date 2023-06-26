import Banner from '../../assets/images/image-web-3-desktop.jpg'
import BannerMobile from '../../assets/images/image-web-3-mobile.jpg'
import Img01 from '../../assets/images/image-retro-pcs.jpg'
import Img02 from '../../assets/images/image-top-laptops.jpg'
import Img03 from '../../assets/images/image-gaming-growth.jpg'

import Navbar from "../../components/Navbar"

export default function Home() {
    return (
        <div className="p-12 m-auto">
            <Navbar />
            <div className='mt-8'>
                <div className='flex flex-row mobile:flex-col'>
                    <div>
                        <div>
                            <img src={Banner} className='select-none mobile:hidden' />
                            <img src={BannerMobile} className='select-none hidden mobile:block' />
                        </div>
                        <div className='flex flex-row mobile:flex-col my-5 mobile:mb-10'>
                            <div className='font-extrabold text-5xl mobile:text-3xl mr-[2.063rem] select-none'>
                                <p>The Bright Future of Web 3.0</p>
                            </div>
                            <div className='flex flex-wrap justify-between'>
                                <div className='mobile:text-sm mobile:my-3'>
                                    <p>
                                        We dive into the next evolution of the web that
                                        claims to put the power of the plattforms back
                                        into the hands of the people. But is it really
                                        fulfilling its promise?
                                    </p>
                                </div>
                                <div className='flex items-end '>
                                    <button
                                        className='mobile:text-sm tracking-[.35em] text-white bg-black px-6 py-2 hover:bg-[#F05D50]'
                                    >
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 bg-black text-white ml-[2.063rem] mobile:m-auto'>
                        <h1 className='font-bold text-5xl mobile:text-3xl mb-4 text-[#FFCE8A] select-none'>New</h1>
                        <button className='my-2'>
                            <h2 className='font-bold text-2xl mobile:text-lg mb-2 text-justify hover:text-[#FFCE8A]'>Hydrogen VS Electric Cars</h2>
                            <p className='text-sm text-justify'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                        </button>
                        <hr className='my-6' />
                        <button className='my-2'>
                            <h2 className='font-bold text-2xl mobile:text-lg mb-2 text-justify hover:text-[#FFCE8A]'>The Downsides of AI Artistry</h2>
                            <p className='text-sm text-justify'>What are the possible adverse effects of on-demand AI image generation?</p>
                        </button>
                        <hr className='my-6' />
                        <button className='my-2'>
                            <h2 className='font-bold text-2xl mobile:text-lg mb-2 hover:text-[#FFCE8A] text-justify'>Is VS Funding Drying Up?</h2>
                            <p className='text-sm text-justify'>Private fonding by VC firms is down 50% YOY. We Take a look at what that meams.</p>
                        </button>
                    </div>
                </div>

                <div className='flex flex-row mt-10 mobile:flex-col'>
                    <button className='flex flex-row text-justify'>
                        <div>
                            <img src={Img01} className='' />
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h1 className='font-bold text-3xl text-gray-500'>01</h1>
                            <h2 className='font-extrabold my-2 hover:text-[#F05D50]'>Reviving Retro PCs</h2>
                            <p className='text-[15px]'>What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </button>
                    <button className='flex flex-row text-justify'>
                        <div>
                            <img src={Img02} className='' />
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h1 className='font-bold text-3xl text-gray-500'>02</h1>
                            <h2 className='font-extrabold my-2 hover:text-[#F05D50]'>Top 10 Laptops of 2022</h2>
                            <p className='text-[15px]'>Our best picks for various needs and budgets.</p>
                        </div>
                    </button>
                    <button className='flex flex-row text-justify'>
                        <div>
                            <img src={Img03} className='' />
                        </div>
                        <div className='flex flex-col ml-5'>
                            <h1 className='font-bold text-3xl text-gray-500'>03</h1>
                            <h2 className='font-extrabold my-2 hover:text-[#F05D50]'>The Growth of Gaming</h2>
                            <p className='text-[15px]'>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}