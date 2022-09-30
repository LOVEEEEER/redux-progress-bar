import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    items: [
      {
        name: "Sold",
        color: "#BD1FBE",
        value: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      },
      {
        name: "Got free",
        color: "#FC64FF",
        value: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      },
      {
        name: "Burned",
        color: "green",
        value: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      },
      {
        name: "Free float",
        color: "grey",
        value: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      },
    ],
  },
});

export default toolkitSlice.reducer;
