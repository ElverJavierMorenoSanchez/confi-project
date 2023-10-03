const CardInfo = ({ title, count, icon }) => {
  return (
    <article className="w-52 h-52 flex flex-col items-center content-between bg-slate-400">
      <div className="">
        <i className="text-orange-600 scale-50">{icon}</i>
      </div>
      <div className="tile-name all-tittles">{title}</div>
      <div className="tile-num full-reset">{count}</div>
    </article>
  );
};

export default CardInfo;
