import { FC, ReactElement } from 'react'
import { loader } from '../../assets'
const Loader: FC = (): ReactElement => {
    return (
        <>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <img
                    src={loader}
                    className='opacity-[0.4px] w-[130px] h-[130px]'
                />
            </div>
        </>
    )
}

export { Loader }
