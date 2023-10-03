const RowTable = ({ title, description }) => {
  return (
    <tr className="">
      <td className="w-1/3 font-bold p-2 border-2 text-right">{title}</td>
      <td className="border-2 p-2">{description}</td>
    </tr>
  );
};

export default RowTable;
