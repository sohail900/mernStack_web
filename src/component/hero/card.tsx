/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, ReactElement, useEffect } from 'react'
import { FaCopy } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { copy, tick } from '../../assets'
import { loader } from '../../assets'
const Cards: FC<SumzArticlesType> = ({
    copiedURL,
    copied,
    articles,
    allArticles,
    error,
    isFetching,
    setAllArticles,
}): ReactElement => {
    useEffect(() => {
        const getItems = JSON.parse(
            localStorage.getItem('sumzArticles') || '[]'
        )
        console.log(getItems)
        if (getItems) {
            setAllArticles(getItems)
        }
    }, [articles])

    return (
        <>
            {allArticles.map((elem, index) => {
                return (
                    <div className='link_card' key={index}>
                        <div
                            className='copy_btn'
                            onClick={() => copiedURL(elem)}
                        >
                        
                            {copied === elem ? (<FaCopy/>) : (<MdOutlineDone/>)}
                        </div>
                        <p className='blue_gradient'>{elem}</p>
                    </div>
                )
            })}
            {isFetching ? (
                <div className='grid place-items-center'>
                    <img
                        src={loader}
                        alt='loader'
                        className='opacity-[0.4px] w-[100px] h-[100px]'
                    />
                </div>
            ) : error ? (
                <p className='text-[1.1rem] font-bold font-satoshi mb-3 mt-[1rem] text-black'>
                    Well, that wasn't suppose to happen......
                </p>
            ) : (
                articles.summary && (
                    <div className=' sm:w-[580px] w-fit px-0 mt-[1.5rem]'>
                        <h3 className='text-[1.1rem] font-medium mb-3'>
                            Article{' '}
                            <span className='font-medium bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
                                Summary*
                            </span>
                        </h3>
                        <p className='summary_box'>{articles.summary}</p>
                    </div>
                )
            )}
        </>
    )
}

export default Cards
