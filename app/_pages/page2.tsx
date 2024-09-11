const Page2 = () => {
    return ( 
        <div style={{
            backgroundImage: "url('/02/BACKGROUND.png')", // Correct path to the image
            height: '500px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}>

          <div className="flex justify-center p-12">
            <h2 className="text-5xl text-black" 
            style={{
                fontFamily: 'Tusker Grotesk, sans-serif',
                textAlign: 'center',
                fontWeight: 'bold',
            }}>
            4 DIAS PARA ELIMINAR MEDOS, DÚVIDAS E <br/>INCERTEZAS QUE TE PRENDEM DE VIVER A TUA VIDA<br/> EXTRAORDINÁRIA
            </h2>
          </div>

        <div>
            <p className="text-black text-xl" 
            style={{
                fontFamily : 'montserrat',
                textAlign: 'center',
                fontSize: '31px',
                lineHeight: '1.5',
            }}>O <strong>Método CIS</strong> mudou a vida de mais de <strong>1,5 milhões</strong> de pessoas nos últimos 26 anos em 
            <br/>Portugal, Brasil, Estados Unidos e África. Agora chegou a tua vez!
            </p>
        </div>
        </div>
     );
}
 
export default Page2;