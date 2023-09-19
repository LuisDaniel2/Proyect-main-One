
const TecArticle = ({tittle, text}) => {
  return (
    <article className="h-[140px] py-10">
      <h2 className="cursor-pointer hover:text-Softorange text-[20px] mb-5 font-bold ">{tittle}</h2>
      <p className="border-b-2 border-Grayishblue p-[10px]">{text}</p>
    </article>
  );
}

export default TecArticle;
