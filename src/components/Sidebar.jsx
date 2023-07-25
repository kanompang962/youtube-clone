import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";
import { Home } from "@mui/icons-material";

const Sidebar = ({ selectCategory, setSelectCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item, index) => (
        <button
          key={index}
          className="category-btn"
          onClick={() => setSelectCategory(item.name)}
          style={{
            background: item.name === selectCategory && "#FC1503",
            color: "white",
            gap: "6px",
          }}
        >
          {item.icon && (
            <item.icon
              style={{ opacity: item.name === selectCategory ? "1" : "0.8" }}
            />
          )}
          <span
            style={{
              opacity: item.name === selectCategory ? "1" : "0.8",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
