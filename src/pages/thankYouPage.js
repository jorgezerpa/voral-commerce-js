import React, { useState } from 'react'
import { useMainContext } from 'Context/mainContext'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from 'react-icons/ai'
import { getOrderFile } from 'services/voralAPI'

const ThankYouPage = () => {
    const { order } = useMainContext()
    const [downloadURL, setDownloadURL] = useState(null)
    
    const handleClick = async() => {
        const linkToDownload = await getOrderFile(order.id)
        setDownloadURL(linkToDownload)
    }

    return (
        <div className='flex justify-center items-center w-full min-h-screen p-5'>
            <div className='flex gap-5 flex-col items-center w-full max-w-[700px] shadow-lg shadow-gray-800 p-5'>
                <div className='w-[150px] h-[150px] bg-blue-800 rounded-[50%]'></div>
                <div className='block'>
                    <h2 className='text-center text-3xl font-bold'>¡Gracias por tu compra!</h2>
                    <p className='text center text-md font-semibold' >alguna frase que haga que el cliente compre otra vez yeahhhhh!</p>
                </div>
                <div className='block mt-9 mb-6'>
                    <button onClick={handleClick} className='bg-pink-400 px-5 py-3 text-white font-semibold rounded-lg' >Obtener Factura</button>
                    <div></div>
                    { downloadURL && <a href={downloadURL} download='ordenVoral.pdf' className='block decoration-pink-400 pt-5 text-center font-semibold'>descargar</a> }
                </div>
                <div className='block pb-3'>
                    <p className='text-center font-bold text-xl mb-1'>¡Recuerda seguirnos!</p>
                    <div className='flex gap-4 flex-wrap'>
                        <div className='flex gap-1'><AiOutlineInstagram color='#f77' size={26} /><p className='font-semibold text-md'>@instagram</p></div>
                        <div className='flex gap-1'><AiOutlineWhatsApp  color='#f77' size={26} /><p className='font-semibold text-md'>+58 777777777</p></div>
                        <div className='flex gap-1'><AiOutlineFacebook  color='#f77' size={26} /><p className='font-semibold text-md'>facebook user</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYouPage
