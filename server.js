import express from "express";
import { startServer } from "mcp-gdrive";
import dotenv from "dotenv";

dotenv.config();

const app = express();

startServer({
  app,
  credentials: {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("MCP Google Drive server running on port", port);
});
