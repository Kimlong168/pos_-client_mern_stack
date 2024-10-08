import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import PopupImage from "../../../components/ui/PopupImage";

export const renderRows = (item, index, handleDelete) => {
  return (
    <>
      <tr
        key={item.id}
        className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"
      >
        <td className="px-4 py-3">{index + 1}</td>
        <td className="px-4 py-3 min-w-[250px]">{item.name}</td>
        <td className="px-4 py-3 min-w-[250px]">
          <PopupImage image={item.image} />
        </td>
        <td className="px-4 py-3 min-w-[250px]">$ {item.price}</td>
        <td className="px-4 py-3 min-w-[250px]">
          {item.category ? item.category.name : "No Category"}
        </td>
        <td className="px-4 py-3 min-w-[250px]">
          {item.supplier ? item.supplier.name : "No Supplier"}
        </td>
        <td className="px-4 py-3 min-w-[250px]">{item.barcode}</td>
        {/* <td className="px-4 py-3 min-w-[250px]">{item.sku}</td> */}
        <td className="px-4 py-3 min-w-[250px]">
          {item.stock_quantity} | {item.minimum_stock}
        </td>
        <td className="px-4 py-3 min-w-[250px] line-clamp-2 hover:line-clamp-none">
          {item.description}
        </td>

        <td className="px-4 py-3 text-sm text-center">
          <div className=" flex items-center gap-2">
            <Link
              to={`/updateProduct/${item._id}`}
              state={{
                product: item,
              }}
            >
              <div className="grid place-content-center rounded bg-green-600 text-white w-7 h-7">
                <FaEdit />
              </div>
            </Link>

            <div
              onClick={() => handleDelete(item._id)}
              className="grid place-content-center rounded bg-red-600 text-white w-7 h-7 cursor-pointer"
            >
              <FaTrash />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
