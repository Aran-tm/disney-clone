const HeaderItem = ({ icon, name }) => {
 return (
    <div className="text-white flex items-center gap-3 text-[18px] font-semibold cursor-pointer">
      {icon}
      <h2>{name}</h2>
    </div>
 );
};

export default HeaderItem;