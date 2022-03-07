import React from 'react'

const OneFAQ = ({ question, answer, key }) => {
    return (
        <details key={key} class="mb-5">
            <summary class="cursor-pointer font-semibold  bg-green-100 rounded-md py-2 px-4 my-2">
                {question}
            </summary>

            <span className='pt-2 '>
                <div className='bg-green-50 rounded-md px-4 py-2'>
                    {answer}
                </div>
            </span>
        </details>
    )
}

export default OneFAQ