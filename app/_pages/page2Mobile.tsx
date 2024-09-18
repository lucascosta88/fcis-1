const Page2Mobile = () => {
    return ( 
        <div style={{
            backgroundImage: "url('./02/BACKGROUND.png')", // Correct path to the image
            height: '300px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center' 
          }}>

          <div className="flex justify-center p-12 py-7">
            <h2 className="py-2 text-black text-center" 
            style={{
                 fontFamily: 'Tusker Grotesk, sans-serif',
                textAlign: 'center',
                fontSize: '22px',
            }}>
            4 DIAS PARA ELIMINAR MEDOS, DÚVIDAS E INCERTEZAS QUE TE PRENDEM DE VIVER A TUA VIDA EXTRAORDINÁRIA
            </h2>
          </div>

        <div>
            <p className="text-black text-xl text-center"  
            style={{
                fontFamily : 'montserrat, sans-serif',
                textAlign: 'center',
                fontSize: '13px',
                lineHeight: '1.5',
            }}>O <strong>Método CIS</strong> mudou a vida de mais de <strong>1,5 milhões</strong>
            <br/>de pessoas nos últimos 26 anos em Portugal, Brasil, 
            <br/>Estados Unidos e África. Agora chegou a tua vez!
            </p>
        </div>
        </div>
     );
}
 
export default Page2Mobile;