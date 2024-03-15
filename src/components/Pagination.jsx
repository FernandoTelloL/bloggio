import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

export const Pagination = () => {
  return (
    <>
      <ul className="pagination flex justify-between items-center text-sm text-slate-500">
        <li className="page-item border border-slate-500 rounded-full p-1">
          <a className="page-link " href="#">
            <RiArrowLeftLine />
          </a>
        </li>
        <div className="flex gap-2">
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li>...</li>
          <li className="page-item">
            <a className="page-link" href="#">
              8
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              9
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              10
            </a>
          </li>
        </div>
        <li className="page-item border border-slate-500 rounded-full p-1">
          <a className="page-link" href="#">
            <RiArrowRightLine />
          </a>
        </li>
      </ul>
    </>
  );
};
