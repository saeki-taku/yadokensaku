// styles
import styles from "@/styles/hotel.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// components
import ImgLinkCheck from "../../components/common/ImgLinkCheck";

const SearchView = ({ pageData }: ANY_OBJECT) => {
    const hotels = pageData;
    console.log("hotels??", hotels.hotelDetail.hotels[0].hotel);
    return <div className="common_wrap"></div>;
};

export default SearchView;
