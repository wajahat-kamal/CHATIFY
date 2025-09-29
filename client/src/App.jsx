import { useSelector } from "react-redux";
import ChatifyCard from "./components/ChatifyCard";
import Login from "./components/Login";

export default function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    user ? <ChatifyCard /> : <Login />
  );
}
