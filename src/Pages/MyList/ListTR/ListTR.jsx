import { Link } from "react-router-dom";

const ListTR = ({ spot, handleDelete }) => {
  const { touristsSpotName, image, countryName, cost, _id } = spot;
  return (
    <>
      <tr className="hover:bg-[#ebebeb] transition-all delay-100 ease-in-out">
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="text-white border-none btn-sm btn btn-square bg-primary hover:bg-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="size-16 md:size-24 mask">
                <img src={image} alt={touristsSpotName} />
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold text-title">
                {touristsSpotName}
              </h5>
            </div>
          </div>
        </td>
        <td className="lg:text-xl lg:font-bold text-natural">{countryName}</td>
        <td className="font-bold md:text-xl text-title">${cost}</td>
        <th>
          <Link
            to={`/update_spot/${_id}`}
            className="px-2 py-1 md:px-4 md:py-2.5 font-medium md:font-bold text-sm md:text-base text-white bg-title"
          >
            Update
          </Link>
        </th>
      </tr>
    </>
  );
};

export default ListTR;
