import { Card } from "react-bootstrap";
import NavBar from "../components/Navbar";
import Makanan from "./Makanan";
import Minuman from "./Minuman";

export default function Dashboard() {


  return (
    <div className="text-center my-2 mx-4">
      <NavBar />
      {/* Display Makanan */}
      <Card className="mt-2">
        <Makanan />
      </Card>

      {/* Display Minuman */}
      <Card className="mt-5">
        <Minuman />
      </Card>

    </div>
  );
} 