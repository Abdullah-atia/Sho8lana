import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5140/api/chat")
  .configureLogging(signalR.LogLevel.Information)
  .build();

connection.start().catch((err) => console.error(err.toString()));

export default connection;
