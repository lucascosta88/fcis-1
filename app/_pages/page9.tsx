import Image from 'next/image'

const Page9 = () => {
    return ( 
        <div 
        style={{
            backgroundImage: "url('/09/BACKGROUND.png')", // Correct path to the image
            height: '900px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center'
        }}
        >
            <div className="flex justify-center py-[150px]">
                <div className="flex rounded-xl"
                style={{
                    backgroundImage: "url('/09/Vector Smart Object.png')", // Correct path to the image
                    height: '591px',
                    width: '1084px', 
                    backgroundSize: 'cover',  
                    backgroundPosition: 'center'
                }}
                >
                    <div className="py-32 px-12">
                        <h1
                        style={{
                            fontFamily: 'sans-serif',
                            fontSize: '34px',
                            fontWeight: 'bold',
                            letterSpacing: '-0.8px',
                            wordSpacing: '4px'
                        }}
                        >
                            O Dia, Horário, Local
                        </h1>
                        
                        <Image src="/09/Rectangle 18.png" className="" width={'250'} alt='Rectangle' />
                        
                        <h2 className="py-4"
                        style={{
                            fontFamily: 'sans-serif',
                            fontSize: '34px',
                            fontWeight: 'bold',
                            letterSpacing: '-0.8px',
                            wordSpacing: '4px'
                        }}
                        >
                            LISBOA
                        </h2>

                        <div className="py-5">
                            <div className="flex">
                                <Image src="/09/Layer 7.png" className="" width={'21'} height={"21"} alt=''></Image>
                                <h1 className="px-2 text-amber-500">24 a 27 de Outubro</h1>
                            </div>

                            <div className="flex  py-5">
                                <Image src="/09/Layer 8.png" className="" width={'21'} height={"21"} alt=''></Image>
                                <h1 className="px-2 text-amber-500">10h</h1>
                            </div>

                            <div className="flex">
                                <Image src="/09/Layer 9.png" className="" width={'21'} height={"21"} alt=''></Image>
                                <h1 className="px-2 text-amber-500">Turma Presencial</h1>
                            </div>
                        </div>

                    </div>

                    <div> 
                        <Image 
                        src="/06.1/PREVIEW.png" 
                        className="py-20 px-52 absolute rounded-xl" 
                        height={'10'}
                        alt=''></Image>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Page9;