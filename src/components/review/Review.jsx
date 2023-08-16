import { Rating, TextField } from "@mui/material"
import { useContext, useState } from "react"
import { postDealReview } from "../../services"
import PropTypes from "prop-types"
import "./style.css"
import { useNavigate } from "react-router-dom"
import { useError } from "../../context/ErrorContext"
import { PopUpContext } from "../../context/popUpContext"

const Review = ({ dealInfo }) => {
  const { setShowPopUp, setErrorActive } = useContext(PopUpContext)
  const { setErrorMessage } = useError()
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const idDeal = dealInfo.dealData.id
  const navigate = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const Review = { score: rating, comment: review }
      console.log(Review)
      await postDealReview(idDeal, Review)
      navigate("/profile")
    } catch (error) {
      setShowPopUp(true)
      setErrorActive(true)
      setErrorMessage(error.response.data.error)
    }
  }
  console.log(rating)
  return (
    <div className="review">
      <form onSubmit={onSubmit}>
        <div className="rating">
          <Rating
            name="half-rating"
            value={rating}
            precision={0.5}
            onChange={(e, newValue) => {
              setRating(newValue)
              console.log(newValue)
            }}
          />
        </div>
        <div className="review-text menu">
          <TextField
            id="outlined-multiline-static"
            label="Comentarios"
            multiline
            value={review}
            onChange={(e) => setReview(e.target.value)}
            variant="outlined"
          />
        </div>

        <button type="submit">Evaluar</button>
      </form>
    </div>
  )
}
Review.propTypes = { dealInfo: PropTypes.object }
export default Review
