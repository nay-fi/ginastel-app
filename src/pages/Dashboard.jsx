import { Card } from "react-bootstrap";
import NavBar from "../components/Navbar";
import Makanan from "./Makanan";
import Minuman from "./Minuman";

export default function Dashboard() {


  return (
    <>
      <NavBar />
    <div className="my-5 mx-4">
      {/* Display Makanan */}
      <Card className="mt-2">
        <Makanan />
      </Card>

      {/* Display Minuman */}
      <Card className="mt-5 mb-3">
        <Minuman />
      </Card>

    </div>
    </>
  );
} 