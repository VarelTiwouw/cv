import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "Header/");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

    return (
      <header className="header">
        <h1>Welcome to My App</h1>
      </header>
    );
  };


export default Header;