import { Rating, TextField } from "@mui/material"
import { useState } from "react"
import { postDealReview } from "../../services"
import PropTypes from "prop-types"

const Review = ({ dealInfo }) => {
  // create a component for the review posting form using the service postReview using the rating component from material ui and the text area component from material ui
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const idDeal = dealInfo.dealData.id
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(rating, review)
    const Review = { score: rating, comment: review }
    console.log(Review)
    await postDealReview(idDeal, Review)
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
        <div className="review-text">
          <TextField
            id="outlined-multiline-static"
            label="Comentarios"
            multiline
            value={review}
            onChange={(e) => setReview(e.target.value)}
            variant="outlined"
          />
        </div>
        <button type="submit" className="button">
          Evaluar
        </button>
      </form>
    </div>
  )
}
Review.propTypes = { dealInfo: PropTypes.object }
export default Review
