import React from 'react'

const Custom: React.FC = (): React.ReactNode => {
    return (
        <>
            <h1 className='head_text'>
                Summarize Articles with <br></br>
                <span className='orange_gradient'>OpenAI GPT-4</span>
            </h1>
            <h3 className='desc'>
                Simplify your reading with Summize, an open-source article
                summarizer that transforms lengthy articles into clear and
                concise summaries
            </h3>
        </>
    )
}

export default Custom
