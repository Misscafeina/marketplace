import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import PropTypes from "prop-types";

UserDeals.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string,
};

function UserDeals({ products, title }) {
  console.log(products);
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">{title}</ListSubheader>
      </ImageListItem>
      {products.map((item) => (
        <article key={item.id}>
          <ImageListItem>
            <img
              src={`${item?.images[0]}?w=248&fit=crop&auto=format`}
              srcSet={`${item.images[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              subtitle={item.status}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${products.name}`}
                  href={`/deals/${item.idDeal}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        </article>
      ))}
    </ImageList>
  );
}

export default UserDeals;
