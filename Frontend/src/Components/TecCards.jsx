// import imgArticle from "../assets/assets/images/image-retro-pcs.jpg";

const TecCards = ({img, name, main, text}) => {
  return (
    <article className="flex h-[162px]">
      <div className="w-[100px] flex-none">
        <img src={img} alt="Imagen tecnico 1" />
      </div>
      <div className="pl-6">
        <p className="text-Grayishblue text-2xl mb-[18px] font-bold">{name}</p>
        <h2 className="font-bold mb-[18px] hover:text-Grayishblue cursor-pointer">
          {main}
        </h2>
        <p className="text-Grayishblue text-[16px] ">
          {text}
        </p>
      </div>
    </article>
  );
};

export default TecCards;
