import React, { useState } from 'react';
import { animation1, animation4, container } from './ContectAnimation';
import { motion } from 'framer-motion';
import { importConfig } from '../../../assets/Config/importConfig';




const QandA = ({question, answer, state}) => {
    const [open, setOpen] = useState(state)

    return (
        <motion.div className={`px-6 py-7 rounded-3xl ${open && "bg-home-3"} duration-150 mt-3`} variants={animation1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className='text-xl text-home-2 flex justify-between gap-3 cursor-pointer' onClick={() => setOpen(!open)}>
                <p>{question}</p>
                <img src={importConfig.home.plusIcon} className={`w-5 h-5 ${open && "rotate-45"} duration-150`} alt="" />
            </div>
            <p className={`text-lg text-home-1 mt-3 ${open ? "block" : "hidden"} delay-300`}>{answer}</p>
        </motion.div>
    )
}


const boxData = [
    {
        image: importConfig.home.content2img1,
        heading: "Tell us your vision",
        body: "Choose a plan and share your design project details with us: we’re here to listen."
    },
    {
        image: importConfig.home.content2img2,
        heading: "Receive the magic",
        body: "Sit back and relax: our expert designers and developers will turn your vision into reality with daily updates,"
    },
    {
        image: importConfig.home.content2img3,
        heading: "Launch & Feedback",
        body: "After testing it thoroughly, your MVP will be launched and evolve based on user insights."
    }
]

const FAQData = [
    {
        question: "What is the PLG Pioneers approach to MVP development?",
        answer: "Our approach is centered around rapid, agile development with a focus on quality and scalability.",
        state: true
    },
    {
        question: "How do you ensure the MVP matches our vision?",
        answer: "Through collaborative planning, regular updates, and flexible adaptation to your feedback."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "We are proficient in a range of modern technologies suitable for diverse development needs."
    },
    {
        question: "Can you accommodate changes or pivots during the MVP development process?",
        answer: "Absolutely. Our agile methodology allows for flexible adaptation to new insights or requirements at any stage of the development."
    },
    {
        question: "What post-launch support do you offer for the MVPs developed?",
        answer: "We provide comprehensive support post-launch, including bug fixes, feature enhancements, and scalability advice to ensure your MVP continues to evolve with your business needs for a minimal cost (in some cases)"
    }
]


const Content2 = () => {
    return (
        <div className='w-full'>
            <div className='py-[60px] px-5 md:py-24 md:px-12 w-full'>
                <div>
                    <motion.p className='text-lg text-home-3 m-auto' variants={animation1} initial="hidden" whileInView="visible" viewport={{ once: true }}>How it works</motion.p>
                    <motion.p className='text-home-2 text-center text-[30px] w-full md:w-[55%] m-auto md:text-[44px] mt-4 leading-[35px] md:leading-[48px]' variants={animation1} initial="hidden" whileInView="visible" viewport={{ once: true }}>Your Idea, Our Speedy Execution</motion.p>
                </div>

                <motion.div className='mt-[60px] grid grid-cols-1 md:grid-cols-3 md:px-[60px] px-0 gap-8' variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {
                        boxData.map((ele, ind) => (
                            <motion.div key={ind} className='px-8 py-10 bg-home-3 border border-home-1 rounded-3xl' variants={animation4} viewport={{ once: true }}>
                                <img src={ele.image} alt="" className='w-24'/>
                                <p className='text-home-2 mt-14 w-full text-[26px]'>{ele.heading}</p>
                                <p className='text-home-1 w-full text-[18px] mt-2'>{ele.body}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
            
            <div className='py-[60px] px-5 md:py-24 md:px-12 w-full'>
                <motion.div className='pt-0 md:pt-10 px-0 md:px-40 flex flex-col md:flex-row justify-between gap-10 md:gap-8 items-center' variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.div className='flex flex-col items-center justify-center w-full md:w-1/3' variants={animation4} viewport={{ once: true }}>
                        <p className='text-home-2 text-[60px] md:text-[70px]'>48</p>
                        <p className='text-home-1 text-lg w-1/2 text-center'>Hours for Idea Assessment</p>
                    </motion.div>
                    <div className='h-32 w-[2px] bg-gray-500 hidden md:flex'></div>
                    <motion.div className='flex flex-col items-center justify-center w-full md:w-1/3' variants={animation4} viewport={{ once: true }}>
                        <p className='text-home-2 text-[60px] md:text-[70px]'>14</p>
                        <p className='text-home-1 text-lg w-1/2 text-center'>Days MVP Design & Development</p>
                    </motion.div>
                    <div className='h-32 w-[2px] bg-gray-200 hidden md:flex'></div>
                    <motion.div className='flex flex-col items-center justify-center w-full md:w-1/3' variants={animation4} viewport={{ once: true }}>
                        <p className='text-home-2 text-[60px] md:text-[70px]'>100%</p>
                        <p className='text-home-1 text-lg w-1/3 text-center'>Client Satisfaction</p>
                    </motion.div>
                </motion.div>
            </div>

            <div className='py-[60px] px-5 md:py-24 md:px-12 w-full'>
                <motion.div className='px-0 md:px-28'>
                    <motion.p className='text-lg text-home-3 text-center md:text-left w-full' variants={animation1} initial="hidden" whileInView="visible" viewport={{ once: true }}>How it works</motion.p>
                    <p className='text-lg text-home-2 mt-10 md:mt-[60px] text-[32px] md:text-[38px] text-center md:text-left leading-8 md:leading-[42px]'>“Our growth no longer necessitates the recruitment and education of additional developers”</p>
                    <motion.p className='text-lg text-home-1 mt-10 md:mt-[60px] w-full text-center md:text-left cursor-pointer' variants={animation1} initial="hidden" whileInView="visible" viewport={{ once: true }}>Read the story</motion.p>
                </motion.div>
            </div>

            <img src={importConfig.home.stick} alt="" />

            <div className='py-[60px] px-5 md:py-20 md:px-12 w-full'>
                <div>
                    <motion.p className='text-lg text-home-3 m-auto' variants={animation1} initial="hidden" whileInView="visible" viewport={{ once: true }}>FAQs</motion.p>
                    <motion.p className='text-home-2 text-center text-[30px] w-full md:w-[55%] m-auto md:text-[44px] mt-4 leading-[35px] md:leading-[48px]' variants={animation1} initial="hidden" whileInView="visible" viewport={{ once: true }}>We’ve got the answers</motion.p>
                </div>
                <div className='mt-[60px] px-0 md:px-[300px] '>
                    {
                        FAQData.map((faq, ind) => (
                            <QandA
                                question={faq.question}
                                answer={faq.answer}
                                state={!!faq.state ? faq.state : false}
                            />
                        ))
                    }
                </div>
                <div className='mt-[60px]'>
                    <p className='text-home-1 text-lg text-left md:text-center w-full'>Still have more questions? <span className='text-home-2'>Contact us.</span></p>
                </div>
            </div>
        </div>
    );
}

export default Content2;
