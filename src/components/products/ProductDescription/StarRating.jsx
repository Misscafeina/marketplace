const StarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;
  
    const renderStars = () => {
      const stars = [];
  
      for (let i = 0; i < filledStars; i++) {
        stars.push(<span key={i} className="star filled"></span>);
      }
  
      if (hasHalfStar) {
        stars.push(<span key={filledStars} className="star half-filled"></span>);
      }
  
      while (stars.length < 5) {
        stars.push(<span key={stars.length} className="star"></span>);
      }
  
      return stars;
    };
  
    return <div className="star-rating">{renderStars()}</div>;
  };
  