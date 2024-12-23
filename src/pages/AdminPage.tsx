import React, { useState } from "react";
import { EditableTable } from "@/components/customElements/EditableTable";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";

const AdminPage: React.FC = () => {
  const tables = [
    "addresses",
    "admins",
    "delivery_persons",
    "menu_items",
    "notifications",
    "orders",
    "payments",
    "restaurants",
    "reviews",
    "users",
  ];

  const [currentTab, setCurrentTab] = useState<string>(tables[0]);

  return (
    <div className="pt-40 grid grid-rows-[auto_auto_1fr_auto] h-screen w-screen text-foreground antialiased bg-[radial-gradient(#00000020_1px,_transparent_1px)] bg-[length:1rem_1rem]">
      <div className="flex p-5 justify-center w-screen h-full">
        <div className="w-[15vw] flex flex-col">
          {tables.map((tableName) => (
            <Button
              key={tableName}
              className={`w-full justify-start !text-neutral-700 !ease-in-out rounded-none backdrop-blur-sm bg-opacity-[0.001] ${
                currentTab === tableName
                  ? "bg-neutral-200 bg-opacity-20 border border-2 border-neutral-100 border-dashed"
                  : " border border-2 border-white border-dashed"
              }`}
              variant={"ghost"}
              size={"sm"}
              onClick={() => setCurrentTab(tableName)}
            >
              <Box className="w-4" /> {tableName}
            </Button>
          ))}
        </div>
        <div className="w-[80vw] h-full">
          <EditableTable tableName={currentTab} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
