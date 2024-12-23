import { Plus, Search, Trash } from "lucide-react";
import React, { useState, useEffect } from "react";

import { backendUrl } from "../../devconfig.ts";

type EditableTableProps = {
  tableName: string; // Name of the table to fetch data from
};

export const EditableTable: React.FC<EditableTableProps> = ({ tableName }) => {
  const [data, setData] = useState<any[]>([]);
  const [dataKeys, setDataKeys] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Record<string, string | number>>({});
  const [pagination, setPagination] = useState({ page: 1, limit: 10 });
  const [sort] = useState({ column: "id", ascending: 1 });
  const [newRow, setNewRow] = useState<Record<string, any>>({}); // State for the new record

  // Fetch data from the endpoint
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/${tableName}`);
      const jsonData = await response.json();
      setData(jsonData);
      setDataKeys(jsonData[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Update data on server
  const updateData = async (id: string, updatedRow: Record<string, any>) => {
    try {
      const response = await fetch(`${backendUrl}/${tableName}/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRow),
      });
      searchData();
      if (!response.ok) {
        console.error("Error updating data:", response.statusText);
        alert("Failed to update data");
        return;
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const insertData = async () => {
    try {
      const response = await fetch(`${backendUrl}/${tableName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRow),
      });

      if (!response.ok) {
        console.error("Error inserting data:", response.statusText);
        alert("Failed to insert data");
        return;
      }

      // Refresh the data after insertion
      setNewRow({}); // Clear the new row
      fetchData();
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  const searchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/${tableName}/filter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters,
          pagination,
          sort,
        }),
      });

      if (!response.ok) {
        console.error("Error fetching filtered data:", response.statusText);
        return;
      }
      const jsonData = await response.json();

      // Remove the 'distance' key from each object in the data
      const processedData = jsonData.data.map((item: any) => {
        const { distance, ...rest } = item; // Destructure and exclude `distance`
        return rest; // Return the object without the `distance` key
      });

      setData(processedData);
    } catch (error) {
      console.error("Error searching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableName]); // Re-fetch data if tableName changes

  const deleteData = async (id: string) => {
    try {
      const response = await fetch(`${backendUrl}/${tableName}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        console.error("Error deleting data:", response.statusText);
        alert("Failed to delete data");
        return;
      }

      // Refresh the data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleFilterChange = (column: string, value: string | number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
  };

  // Handle search action (triggered by a button or automatically)
  const handleSearch = () => {
    searchData();
  };

  // Handle textarea change and submit on Enter
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    rowIndex: number,
    colKey: string
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent new line in textarea
      const updatedRow = { ...data[rowIndex], [colKey]: e.currentTarget.value };
      const id = data[rowIndex]?.id; // Assume the `id` is in the first column

      if (id) {
        updateData(id, updatedRow);
      }
    }
  };

  // Handle direct input changes to update local state
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    rowIndex: number,
    colKey: string
  ) => {
    const newData = [...data];
    newData[rowIndex][colKey] = e.target.value;
    setData(newData);
  };

  // Handle changes to the new row's inputs
  const handleNewRowChange = (column: string, value: string | number) => {
    setNewRow((prevRow) => ({
      ...prevRow,
      [column]: value,
    }));
  };
  return (
    <div className="!animation-none">
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto border-2 border-neutral-300 border-dashed rounded min-w-full border-collapse border h-16 border-gray-100 text-xs">
            <thead>
              <tr>
                {dataKeys &&
                  Object.keys(dataKeys).map((key) => (
                    <th
                      key={key}
                      className="border h-8 border-gray-100 text-center font-semibold"
                    >
                      <input
                        type="text"
                        placeholder={`${key}`}
                        className="p-2 backdrop-blur-sm focus:outline-none w-full h-full"
                        onChange={(e) =>
                          handleFilterChange(key, e.target.value)
                        }
                        value={filters[key] || ""}
                      />
                    </th>
                  ))}{" "}
                <th className="border h-8 border-gray-100 text-center font-semibold">
                  <button
                    className="px-2 py-1 flex justify-center items-center !text-black bg-neutral-200 text-white rounded h-full w-full"
                    onClick={handleSearch}
                  >
                    <Search className="w-4" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-200 transition !ease-in-out"
                >
                  {Object.entries(row).map(([key, value], colIndex) => (
                    <td key={colIndex} className="border h-16 border-gray-100">
                      <textarea
                        value={String(value)}
                        className="h-full w-full p-2 overflow-auto resize-none backdrop-blur-sm bg-transparent border-none resize-none"
                        onChange={(e) => handleInputChange(e, rowIndex, key)}
                        onKeyDown={(e) => handleKeyPress(e, rowIndex, key)}
                      />
                    </td>
                  ))}
                  <td className="border h-16 border-gray-100 text-center">
                    <button
                      className="px-2 py-1 flex justify-center items-center !text-black bg-neutral-200 text-white rounded h-full w-full"
                      onClick={() => {
                        const id = row?.id; // Assume the `id` is a property in the row
                        if (id) deleteData(id);
                      }}
                    >
                      <Trash className="w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                {dataKeys &&
                  Object.keys(dataKeys).map((key) => (
                    <td key={key} className="border h-16 border-gray-100">
                      <textarea
                        placeholder={`Enter ${key}`}
                        value={newRow[key] || ""}
                        className="h-full w-full p-2 overflow-auto resize-none backdrop-blur-sm bg-transparent border-none resize-none"
                        onChange={(e) =>
                          handleNewRowChange(key, e.target.value)
                        }
                      />
                    </td>
                  ))}
                <td className="border h-16 border-gray-100 text-center">
                  <button
                    className="px-2 py-1 flex justify-center items-center !text-black bg-neutral-200 text-white rounded h-full w-full"
                    onClick={insertData}
                  >
                    <Plus className="w-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex text-xs justify-between items-center">
            <div></div>
            <div>
              <label>
                Page:{" "}
                <input
                  type="number"
                  value={pagination.page}
                  onChange={(e) =>
                    setPagination({
                      ...pagination,
                      page: Number(e.target.value),
                    })
                  }
                  className="w-12 p-2 backdrop-blur-sm border h-8 border-gray-100 rounded"
                />
              </label>
              <label className="ml-4">
                Limit:{" "}
                <input
                  type="number"
                  value={pagination.limit}
                  onChange={(e) =>
                    setPagination({
                      ...pagination,
                      limit: Number(e.target.value),
                    })
                  }
                  className="w-12 p-2 backdrop-blur-sm border h-8 border-gray-100 rounded"
                />
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
