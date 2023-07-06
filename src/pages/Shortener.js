import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isValidURL } from "../utils/helper";

const Shortener = () => {
  const [message, setMessage] = useState("Sedang mengalihkan ke URL tujuan...");
  const params = useParams();
  const navigate = useNavigate();
  const redirectToHomepage = () => {
    setTimeout(() => navigate("/"), 2000);
  };

  const getUrlDestination = async () => {
    try {
      const {
        data: { destination },
      } = await axios.get(
        `https://sibilink.cloudapp.web.id/api/links/${params.slug}`
      );
      if (isValidURL(destination)) {
        window.open(destination, "_self");
      } else {
        setMessage("URL yang anda tuju tidak valid");
        redirectToHomepage();
      }
    } catch (error) {
      setMessage("URL yang anda tuju tidak terdaftar");
      redirectToHomepage();
    }
  };

  useEffect(() => {
    getUrlDestination();
  }, []);

  return <div className="p-2">{message}</div>;
};

export default Shortener;
