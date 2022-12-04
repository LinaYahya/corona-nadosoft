import logo from '../../assets/covid-19.svg';


const SideBarRow = ({ text }: { text: string }) => (
  <span className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
    <span className="ml-2 text-sm font-medium">{text}</span>
  </span>
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
          <SideBarRow text="General" />
          <SideBarRow text="Dashboard" />
          <SideBarRow text="Overview" />
          <SideBarRow text="Countries" />
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-gray-300">

          <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300" >
            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span className="ml-2 text-sm font-medium">Settings</span>
          </a>

        </div>
      </div>
      <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-300" >
        <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-2 text-sm font-medium">About</span>
      </a>
    </div>
  )
}

export default SideBar;
