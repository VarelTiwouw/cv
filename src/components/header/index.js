import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <p>
      {header.nama}
    </p>
  )
}



export default Header;