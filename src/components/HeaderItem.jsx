const HeaderItem = ({ icon, name }) => {
 return (
    <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-4">
      {icon}
      <h2>{name}</h2>
    </div>
 );
};

export default HeaderItem;