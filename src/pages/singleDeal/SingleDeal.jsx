import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDealDetails } from "../../services/dealsService";
import { useParams } from "react-router-dom";

SingleDeal.propTypes = {
  userInfo: PropTypes.object,
};

function SingleDeal({ userInfo }) {
  const [dealInfo, setDealInfo] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);
  const { idDeal } = useParams();
  useEffect(() => {
    const getInfo = async (idDeal) => {
      try {
        const response = await getDealDetails(idDeal);
        response.status === "ok" && setIsAllowed(true);
        setDealInfo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getInfo(idDeal);
  }, [idDeal]);

  console.log(dealInfo);
  console.log(userInfo);
  return <>{isAllowed && <h1>hola</h1>}</>;
}

export default SingleDeal;
