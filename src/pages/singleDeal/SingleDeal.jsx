import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDealDetails } from "../../services/dealsService";
import { useParams } from "react-router-dom";
import DealContainer from "../../components/deals/dealContainer/DealContainer";
import DealImage from "../../components/deals/dealImage/DealImage";
import DealMessagesContainer from "../../components/deals/dealMessagesContainer/DealMessagesContainer";
import DealMessage from "../../components/deals/dealMessage/DealMessage";
import Chat from "../../components/chat/Chat";

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
  // console.log(userInfo);
  // console.log(dealInfo);
  return (
    <>
      {isAllowed && (
        <DealContainer title={dealInfo?.productData?.name}>
          <DealImage dealInfo={dealInfo} />
        </DealContainer>
      )}
      {isAllowed && (
        <DealMessagesContainer>
          <Chat
            dealInfo={dealInfo}
            userInfo={userInfo}
            setDealInfo={setDealInfo}
          />
          {/* {dealInfo?.messages?.map((message) => {
            return (
              <DealMessage
                key={message.id}
                message={message}
                dealInfo={dealInfo}
              />
            );
          })} */}
        </DealMessagesContainer>
      )}
    </>
  );
}
export default SingleDeal;
