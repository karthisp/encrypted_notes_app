import React from "react";
import { createRoot } from "react-dom/client";

import NotesList from "./features/notes/components/NotesList/NotesList";
import "./styles/globals.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NotesList />
  </React.StrictMode>
);
