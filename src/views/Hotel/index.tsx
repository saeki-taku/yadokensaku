// react / next
import Link from "next/link";
// styles
import styles from "@/styles/search.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ReactStarsRating from "react-awesome-stars-rating";
// components
import Pagenation from "../../components/common/Pagenation";
import ImgLinkCheck from "../../components/common/ImgLinkCheck";

const SearchView = ({ pageData }: ANY_OBJECT) => {
    const hotels = pageData;
    console.log("hotels??", hotels);

    return <div className="common_wrap"></div>;
};

export default SearchView;
