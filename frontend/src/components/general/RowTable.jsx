const RowTable = ({ title, description }) => {
  return (
    <tr className="odd:bg-orange-50 hover:bg-orange-50">
      <td className="w-1/3 font-bold p-2 border-2 text-right">{title}</td>
      <td className="border-2 p-2">{description}</td>
    </tr>
  );
};

export default RowTable;
