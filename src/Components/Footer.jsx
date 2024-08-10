import react from 'react'
export default function Footer(){
    return (<>
        <footer >
            
            <div className='bg-slate-800' >
            <div className="container mx-auto text-center justify-around space-x-9   text-white  py-10 flex flex-row ">
                <div className="me-5 bg-transparent flex flex-col">
                    <h3 className='pt-4 text-2xl'>Location</h3>
                    <p className='pt-4 text-xsl '>2215 John Daniel Drive</p>
                    <p className='mt-0 mb-1 text-xs'>Clark, MO 65243</p>

                </div>
                <div className="me-5 bg-transparent">
                    <h3 className='pt-4 text-4xl pb-4'>AROUND THE WEB</h3>
                    <div className="flex flex-row justify-center space-x-3 ">
                    <i class="fa-brands fa-facebook text-white text-2xl border rounded-full border-solid py-1 px-2"></i>
                    <i class="fa-brands fa-twitter  text-white text-2xl border rounded-full border-solid py-1 px-2"></i>
                    <i class="fa-brands fa-linkedin  text-white text-2xl border rounded-full border-solid py-1 px-2"></i>
                    <i class="fa-solid fa-globe  text-white text-2xl border rounded-full border-solid py-1 px-2"></i>
                    </div>

                </div>
                <div className="me-5 bg-transparent">
                    <h3 className='pt-4 text-2xl'>ABOUT FREELANCER</h3>
                    <p className='pt-4 text-xsl '>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div></div>
            </div>
            <div className="bg-[#1a252f] ">
                <div className="container mx-auto text-center pt-8 pb-3">
                    <p className='text-white'>Copyright © Your Website 2021
                    </p>
                </div>
            </div>
        </footer>


        
    </>

    )
}