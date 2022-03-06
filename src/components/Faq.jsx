import React from 'react'
import { faqQuestions } from '../constants/faqQuestions'
import OneFAQ from './common/OneFAQ'

const Faq = () => {
    return (
        <div>
            <section class="text-gray-700">
                <div class="container px-5 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                            Frequently Asked Question
                        </h1>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            The most common questions about how our business works and what
                            can do for you.
                        </p>
                    </div>
                    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {
                            faqQuestions.map((faqBunch) =>
                                <div class="w-full lg:w-1/2 px-4 py-2">
                                    {
                                        faqBunch.map((faq, index) => 
                                            <OneFAQ question={faq.question} answer={faq.answer} key={index} />
                                        )
                                    }
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq