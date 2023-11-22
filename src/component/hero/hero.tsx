import { useState, FormEvent } from 'react'
import Navbar from '../navbar/navbar'
import { linkIcon } from '../../assets'
import Custom from './custom'
import Cards from './card'
import { useLazyGetSummaryQuery } from '../../services/articlesAPI'
import { MdSubdirectoryArrowRight } from 'react-icons/md'
const Hero = () => {
    //hooks
    const [copied, setCopied] = useState<string>('')
    const [articles, setArticles] = useState<Articles>({ url: '', summary: '' })
    const [allArticles, setAllArticles] = useState<string[]>([])
    const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery()
    //set copy functions
    const copiedURL = (copy_url: string) => {
        setCopied(copy_url)
        navigator.clipboard.writeText(copy_url)
        //clear copy at a specific time
        setTimeout(() => {
            setCopied('')
        }, 3000)
    }

    ///handle submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setArticles({ ...articles, url: '' })

        const { data } = await getSummary({ url: articles.url })
        if (data?.summary) {
            setArticles({ ...articles, summary: data?.summary })
            const updateAllArticles = [articles.url, ...allArticles]
            setAllArticles(updateAllArticles)
            //stored items into localStorage
            localStorage.setItem(
                'sumzArticles',
                JSON.stringify(updateAllArticles)
            )
        }
    }
    return (
        <>
            <Navbar />
            <div className='mt-[3rem] grid place-items-center md:px-0 px-[2rem]'>
                <Custom />
            </div>
            <div className='flex flex-col items-center justify-center gap-1  w-full md:px-0 px-[3rem]'>
                <form
                    method='get'
                    className='relative flex items-center justify-center mb-[0.7rem] sm:w-[580px] w-full'
                    onSubmit={handleSubmit}
                >
                    <img
                        src={linkIcon}
                        alt='linkicon'
                        className='absolute left-0 top-[50%] translate-y-[30%] w-5 ml-3 '
                    />
                    <input
                        type='url'
                        name='url'
                        placeholder='Paste the article link'
                        className='url_input peer '
                        required
                        value={articles.url}
                        onChange={(e) => {
                            setArticles({ ...articles, url: e.target.value })
                        }}
                    />
                    <button
                        type='submit'
                        className='submit_btn peer-focus:border-gray-500 peer-focus:text-gray-700'
                    >
                        <MdSubdirectoryArrowRight />
                    </button>
                </form>
                <Cards
                    copied={copied}
                    copiedURL={copiedURL}
                    articles={articles}
                    allArticles={allArticles}
                    error={error}
                    isFetching={isFetching}
                    setAllArticles={setAllArticles}
                />
            </div>
        </>
    )
}

export default Hero
