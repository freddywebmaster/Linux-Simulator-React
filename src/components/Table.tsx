interface Component<T> {
  columns: {
    title: string;
    acceskey: string;
    hidden: boolean;
    render?: (item: T) => JSX.Element;
    minWidth?: string;
  }[];
  data: T[];
  actions?: (item: T) => JSX.Element;
}

function Table<T>({ columns, data, actions }: Component<T>) {
  return (
    <table className="bg-gray-200 shadow-lg w-full rounded-lg">
      <thead>
        {columns.length !== 0 && (
          <tr className="bg-blue-500 text-white text-xl">
            {columns.map((col, i) => {
              if (col.hidden) return <th className="hidden" key={i}></th>;
              return (
                <th className="p-5 border border-gray-900" key={i}>
                  {col.title}
                </th>
              );
            })}

            {actions && (
              <th className="p-5 border border-gray-900">Acciones</th>
            )}
          </tr>
        )}
      </thead>

      <tbody>
        {data.length !== 0 &&
          data.map((item, i) => {
            return (
              <tr
                className={`${
                  i % 2 === 0 ? "bg-white" : "bg-gray-200"
                } hover:bg-blue-500 hover:text-white`}
                key={i}
              >
                {columns.map((col, j) => {
                  if (col.hidden) return <td className="hidden" key={j}></td>;
                  return col.render ? (
                    <td
                      className={`text-xl px-5 py-2 border border-gray-900 min-w-[200px] max-w-[300px] cursor-pointer`}
                      key={j}
                    >
                      {/* @ts-ignore */}
                      {col.render(item[col.acceskey])}
                    </td>
                  ) : (
                    <td
                      onClick={() => console.log(item)}
                      className={`text-xl px-5 py-2 max border border-gray-900 min-w-[200px] max-w-[300px] cursor-pointer`}
                      key={j}
                    >
                      {/* @ts-ignore */}
                      {item[col.acceskey]}
                    </td>
                  );
                })}

                {actions && (
                  <th
                    className={`text-xl px-5 py-2 max border border-gray-900 min-w-[200px] max-w-[300px] cursor-pointer`}
                  >
                    <button>x</button>
                  </th>
                )}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
