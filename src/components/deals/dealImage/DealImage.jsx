import PropTypes from "prop-types";
import { ImageListItem, ImageListItemBar } from "@mui/material";

DealImage.propTypes = {
  dealInfo: PropTypes.object,
};

function DealImage({ dealInfo }) {
  return (
    <ImageListItem>
      <img
        src={`${dealInfo?.productData?.pictures[0]}?w=248&fit=crop&auto=format`}
        srcSet={`${dealInfo?.productData?.pictures[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={dealInfo?.productData?.name}
        loading="lazy"
      />
      {dealInfo?.dealData?.status === "completed" && (
        <ImageListItemBar title={"Estado:"} subtitle={"Completado"} />
      )}
      {dealInfo?.dealData?.status === "requested" && (
        <ImageListItemBar
          title={"Estado:"}
          subtitle={"Esperando aprobación del vendedor"}
        />
      )}
      {dealInfo?.dealData?.status === "approved" && (
        <ImageListItemBar
          title={"Estado:"}
          subtitle={"Aceptado por el vendedor"}
        />
      )}
      {dealInfo?.dealData?.status === "rejected" && (
        <ImageListItemBar
          title={"Estado:"}
          subtitle={"Rechazado por el vendedor"}
        />
      )}
      {dealInfo?.dealData?.status === "cancelled" && (
        <ImageListItemBar
          title={"Estado:"}
          subtitle={"Cancelado por el comprador"}
        />
      )}
    </ImageListItem>
  );
}

export default DealImage;
