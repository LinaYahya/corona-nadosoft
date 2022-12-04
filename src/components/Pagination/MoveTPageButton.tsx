import { IPage } from "../../interfaces";

const MoveToPageButton = ({ text, isActive = false, page = 1, moveToPage }: IPage) => (
  <button
    onClick={() => moveToPage(page)}
    className={`px-3 py-2 leading-tight text-${isActive ? 'blue' : 'grey'}-500 
      bg-white ${isActive ? 'border border-blue-300' : ''} 
      rounded-full hover:bg-gray-100 hover:text-gray-700`}
  >
    {text}
  </button>);
  
export default MoveToPageButton;
