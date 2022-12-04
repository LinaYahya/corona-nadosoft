import { IPagination } from "../../interfaces";
import MoveToPageButton from "./MoveTPageButton";


function Pagination({ currentPage = 1, PagesLength, moveToPage }: IPagination) {

  return (
    <div className="my-5">
      <ul className="flex justify-center">
        <MoveToPageButton moveToPage={moveToPage} text={"<"} page={currentPage - 1} />
        {currentPage - 1 > 0 && <MoveToPageButton moveToPage={moveToPage} text={currentPage - 1} page={currentPage - 1} />
        }

        <MoveToPageButton moveToPage={moveToPage} text={currentPage} isActive page={currentPage} />
        {currentPage < PagesLength && (
          <>
            {currentPage + 1 > PagesLength && <MoveToPageButton moveToPage={moveToPage} text={currentPage + 1} page={currentPage + 1} />}
            <li>
              <span className="px-3 py-2">
                ...
              </span>
            </li>
            <MoveToPageButton moveToPage={moveToPage} page={PagesLength} text={PagesLength} />
          </>
        )}
        <MoveToPageButton moveToPage={moveToPage} page={currentPage + 1} text={">"} />

      </ul>
    </div>
  )
}


export default Pagination;