import TecArticle from "./TecArticle";

const TecContainer = () => {
  return (
    <aside className="bg-Brown text-Offwhite py-[20px] px-[20px] h-[500px] w-auto sm:w-[800px] sm:h-[600px]">
      <h1 className="text-Grayishblue text-4xl font-bold">Técnico</h1>

      <div className="space-y-8 sm:space-y-14 mb-[130px] ">
        <TecArticle
          tittle="¿Eres técnico en sistemas?  Unete a nosotros y empieza a recibir clientes en busca de alguien como tu!"
          text="Recibe peticiones de servicios en toda tu localidad,  organiza tu perfil publico y maneja tus propios horarios."
        />
      </div>
      <div className="space-y-8 sm:space-y-14">
        <TecArticle
          tittle="Registrate ahora!"
          text=" Click aqui para ver terminos y condiciones."
        />
      </div>

    </aside>
  );
};

export default TecContainer;
