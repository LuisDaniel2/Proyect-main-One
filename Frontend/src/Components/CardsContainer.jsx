import TecCards from "./TecCards";
import img1 from '../assets/assets/images/image-retro-pcs.jpg'
import img2 from '../assets/assets/images/image-top-laptops.jpg'
import img3 from '../assets/assets/images/image-gaming-growth.jpg'

const CardsContainer = () => {
  return (
    <section className="mt-6 sm:flex space-y-2 space-x-5 pb-4">    
      <TecCards 
      img={img1}
      name='Carlos Manuel'
      main='Especialidad: Computadores'
      text='Hago domicilio, Arreglo todo tipo de equipos, Windows, Mac, cualquier version y sistema operativo.'
      />
      <TecCards 
      img={img2}
      name='Jose carlos'
      main='Especialidad: Impresoras'
      text='Hago domicilio, Arreglo todo tipo de impresoras de tinta o laser, HP - cannon, version y sistema operativo.'
      />
      <TecCards 
      img={img3}
      name='Mario vit'
      main='Especialidad: Instalación de camaras'
      text='Se instalan camaras de todo tipo. El servicio incluye la compra de materiales e intalación de estos, wifi, visualizacion desde el movil y mas.'
      />

    </section>
    
  );
}

export default CardsContainer;
