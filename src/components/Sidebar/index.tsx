import { Link } from 'react-router-dom';
import logo from '../../assets/covid-19.svg';


const SideBarRow = ({ text, path }: { text: string, path: string }) => (
  <Link to={path} className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
    <span className="ml-2 text-sm font-medium">{text}</span>
  </Link>
)
function SideBar() {
  return (
    <div className="flex flex-col items-center w-52 h-screen overflow-hidden text-gray-700 bg-gray-100 rounded">
      <span className="flex items-center w-full px-3 mt-3" >
        <img className="w-8 h-8 fill-current" src={logo} alt="logo" />
        <span className="ml-2 text-sm font-bold">Corona Virus APP</span>
      </span>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
          {/* <SideBarRow text="Dashboard" /> */}
          <SideBarRow text="Overview" path="/" />
          <SideBarRow text="Countries" path="/countries" />
          <SideBarRow text="General" path="/about" />
        </div>
      </div>

    </div>
  )
}

export default SideBar;
