export default function ProjectList({title,active,setSelected,id}) {
  
    return (
        <li className={`text-[14px] m-[auto] sm:my-[0] sm:mx-[23px] p-[7px] rounded-[10px] border-[2px] border-[solid] border-[#00e9ff] cursor-pointer overflow-hidden font-[700] ${active ? "text-white bg-[#398485]" : ""}`} id="portfoliolist" onClick={() => setSelected(id)}>
        {title}
      </li>
    )
}