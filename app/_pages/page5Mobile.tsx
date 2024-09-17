const Page5Mobile = () => {
    return ( 
        <div className='py-5' style={{
            backgroundImage: "url('/05/BACKGROUND.png')", // Correct path to the image
            height: 'flex',
            backgroundSize: 'cover',  
            backgroundPosition: 'center'
        }}>
            <div className="flex flex-col items-center">
                <h1 className="text-white text-center p-12"
                style={{
                    fontFamily: 'Tusker Grotesk, sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: '1.0px',
                    lineHeight: '1.2',
                    fontSize: '32px',
                }}>
                    Aprenda diretamente
                    <br/><span className="text-[#F8A312]">com Paulo Vieira</span>
                </h1>
                
                <div>
                    <img src="/05/FOTO.png" className="p-1" width={"350px"} height={"60px"}></img>
                </div>
                <div className="py-5" style={{
                    backgroundColor: 'rgba(0, 0, 200, 0.1)', // Blue color with 50% opacity
                    padding: '25px',
                    paddingTop: '50px',
                    paddingBottom: '50px',               
                    borderRadius: '32px',
                  }}>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '18px',
                        fontFamily: 'Montserrat, sans-serif',
                        lineHeight: '1.2',
                    }}>
                        Tu não serás “cobaia” de algo ainda
                        <br/>não validado. Paulo Vieira é:

                        <br/><br/>Master Coach, PhD em Business 
                        <br/>Administration e Mestre em
                        <br/>Coach pela Florida Christian University

                        <br/><br/>Criador do Método CIS, metodologia
                        <br/> de desenvolvimento
                        <br/>humano que mudou a vida de mais de
                        <br/> 1,5 milhões de
                        <br/>pessoas nos últimos 26 anos.

                        <br/><br/>Fundador da Febracis, a maior escola 
                        <br/>de negócios da
                        <br/>América Latina e da Europa, presente 
                        <br/>em 3 continentes.

                        <br/><br/>Escritor de mais de 30 livros com 10 
                        <br/>milhões de cópias vendidas.
                    </p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Page5Mobile;