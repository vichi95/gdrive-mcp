import express from "express";
import dotenv from "dotenv";
import { GoogleDriveServer } from "@modelcontextprotocol/server-google-drive";

dotenv.config();

const app = express();

const server = new GoogleDriveServer({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI
});

app.use("/", server.router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("MCP Google Drive server running on port", port);
});
