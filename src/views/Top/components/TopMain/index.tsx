// react / next
import Image from "next/image";
// styles
import styles from "@/styles/home.module.scss";
// lib
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function TopMain() {
    return (
        <div className={styles.main_wrap}>
            <div className={styles.ranking}>
                <h2 className={styles.ranking__title}>ランキング【総合】</h2>
                <ul className={styles.ranking__list}>
                    <li className={styles.ranking__item}>
                        <span className={styles.info__pref}>山梨県</span>
                        <p className={styles.name}>八ヶ岳高原　ペンション　乙女座宮</p>
                        <div className={styles.info}>
                            <figure>
                                <Image
                                    alt=""
                                    src="https://img.travel.rakuten.co.jp/share/HOTEL/19756/19756.jpg"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </figure>
                            <div className={styles.info__text}>
                                <span className={styles.info__pref}>山梨県</span>
                                <p className={styles.kuchikomi}>
                                    <span>口コミ</span>
                                    八ヶ岳登山のために、友だちと利用しました。寒い雨の日でしたが、宿に着くと奥さんがとても優しく受け入れてくれ、思わずただいまと言いたいくらい安心感がありました。夜食ではお腹いっぱいなり、暖かいお風呂と清…
                                </p>
                                <a href="">
                                    <span>楽天トラベル</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className={styles.ranking__item}>
                        <p className={styles.name}>ペンション　プチポワ</p>
                        <div className={styles.info}>
                            <figure style={{ position: "relative", width: "300px", height: "200px" }}>
                                <Image
                                    alt=""
                                    src="https://img.travel.rakuten.co.jp/share/HOTEL/29176/29176.jpg"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </figure>
                            <div className={styles.info__text}>
                                <span className={styles.info__pref}>福島県</span>
                                <p className={styles.kuchikomi}>
                                    <span>口コミ</span>
                                    予想以上でした。お風呂は温泉ではないと思いますが、補って余りあります。館内、室内とも奇麗です。食事は５点プラスアルファあげたいくらいです。奥さんの愛想のよい対応も好感が持てます。いつまでも、続けて…
                                </p>
                                <a href="">
                                    <span>楽天トラベル</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className={styles.ranking__item}>
                        <p className={styles.name}>コテージ・パラディーゾ</p>
                        <div className={styles.info}>
                            <figure style={{ position: "relative", width: "300px", height: "200px" }}>
                                <Image
                                    alt=""
                                    src="https://img.travel.rakuten.co.jp/share/HOTEL/20722/20722.jpg"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </figure>
                            <div className={styles.info__text}>
                                <span className={styles.info__pref}>沖縄県</span>
                                <p className={styles.kuchikomi}>
                                    <span>口コミ</span>
                                    八ヶ岳登山のために、友だちと利用しました。寒い雨の日でしたが、宿に着くと奥さんがとても優しく受け入れてくれ、思わずただいまと言いたいくらい安心感がありました。夜食ではお腹いっぱいなり、暖かいお風呂と清…
                                </p>
                                <a href="">
                                    <span>楽天トラベル</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className={styles.ranking__item}>
                        <p className={styles.name}>那須温泉　ガーデンハウス　バイブリー</p>
                        <div className={styles.info}>
                            <figure style={{ position: "relative", width: "300px", height: "200px" }}>
                                <Image
                                    alt=""
                                    src="https://img.travel.rakuten.co.jp/share/HOTEL/19756/19756.jpg"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </figure>
                            <div className={styles.info__text}>
                                <span className={styles.info__pref}>栃木県</span>
                                <p className={styles.kuchikomi}>
                                    <span>口コミ</span>
                                    数十年ぶりに那須を訪れました。久しぶりに宿に満足と充実感を覚える旅となりました。外観、内装、お風呂、食事、オーナーご夫妻のお人柄、隅々まで行き届いたおもてなしを感じることができました。紅葉には少し…
                                </p>
                                <a href="">
                                    <span>楽天トラベル</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className={styles.ranking__item}>
                        <p className={styles.name}>ホテル　デュシェルブルー</p>
                        <div className={styles.info}>
                            <figure style={{ position: "relative", width: "300px", height: "200px" }}>
                                <Image
                                    alt=""
                                    src="https://img.travel.rakuten.co.jp/share/HOTEL/15599/15599.jpg"
                                    fill
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </figure>
                            <div className={styles.info__text}>
                                <span className={styles.info__pref}>山梨県</span>
                                <p className={styles.kuchikomi}>
                                    <span>口コミ</span>
                                    八ヶ岳登山のために、友だちと利用しました。寒い雨の日でしたが、宿に着くと奥さんがとても優しく受け入れてくれ、思わずただいまと言いたいくらい安心感がありました。夜食ではお腹いっぱいなり、暖かいお風呂と清…
                                </p>
                                <a href="">
                                    <span>楽天トラベル</span>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}


// api情報
// {
//   "Rankings": [
//     {
//       "Ranking": {
//         "genre": "all",
//         "title": "【楽天トラベル】お客さま評価ランキング【総合】",
//         "lastBuildDate": "20141102163314",
//         "hotels": [
//           {
//             "hotel": {
//               "rank": 1,
//               "hotelNo": 19756,
//               "hotelName": "八ヶ岳高原　ペンション　乙女座宮",
//               "middleClassName": "山梨県",
//               "userReview": "八ヶ岳登山のために、友だちと利用しました。寒い雨の日でしたが、宿に着くと奥さんがとても優しく受け入れてくれ、思わずただいまと言いたいくらい安心感がありました。夜食ではお腹いっぱいなり、暖かいお風呂と清…　2014-10-22 20:57:28投稿 <a href="https://travel.rakuten.co.jp/HOTEL/19756/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 298,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=19756",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=19756",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=19756",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=19756",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/19756/19756.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 2,
//               "hotelNo": 29176,
//               "hotelName": "ペンション　プチポワ",
//               "middleClassName": "福島県",
//               "userReview": "予想以上でした。お風呂は温泉ではないと思いますが、補って余りあります。館内、室内とも奇麗です。食事は５点プラスアルファあげたいくらいです。奥さんの愛想のよい対応も好感が持てます。いつまでも、続けて…　2014-10-28 21:49:53投稿 <a href="https://travel.rakuten.co.jp/HOTEL/29176/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 224,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=29176",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=29176",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=29176",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=29176",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/29176/29176.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 3,
//               "hotelNo": 20722,
//               "hotelName": "コテージ・パラディーゾ",
//               "middleClassName": "沖縄県",
//               "userReview": "7月19日から大人３名、子ども３名で二泊させて頂きました。芝生にデッキ、景色も最高で子ども達は自由に遊び回り、親はのんびりと過ごすことができました。バーベキューも美味しく、ボリューム満点！差し入れの海…　2014-08-31 03:39:15投稿 <a href="https://travel.rakuten.co.jp/HOTEL/20722/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 212,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=20722",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=20722",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=20722",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=20722",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/20722/20722.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 4,
//               "hotelNo": 68188,
//               "hotelName": "那須温泉　ガーデンハウス　バイブリー",
//               "middleClassName": "栃木県",
//               "userReview": "数十年ぶりに那須を訪れました。久しぶりに宿に満足と充実感を覚える旅となりました。外観、内装、お風呂、食事、オーナーご夫妻のお人柄、隅々まで行き届いたおもてなしを感じることができました。紅葉には少し…　2014-10-12 21:03:15投稿 <a href="https://travel.rakuten.co.jp/HOTEL/68188/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 151,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=68188",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=68188",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=68188",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=68188",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/68188/68188.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 5,
//               "hotelNo": 15599,
//               "hotelName": "ホテル　デュシェルブルー",
//               "middleClassName": "山梨県",
//               "userReview": "１０月２４日に、山梨の実家の法事の帰りに夫と２人で一泊しました。天候に恵まれ、紅葉も始まったばかりの八ヶ岳でとてもすてきなホテルに宿泊出来ました。お部屋はもちろん庭の木１本１本にまで、オーナー夫婦の…　2014-10-26 18:11:55投稿 <a href="https://travel.rakuten.co.jp/HOTEL/15599/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 139,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=15599",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=15599",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=15599",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=15599",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/15599/15599.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 6,
//               "hotelNo": 40476,
//               "hotelName": "シェソワ　ワカミヤ",
//               "middleClassName": "岐阜県",
//               "userReview": "初めて利用しました。今回は、口コミを見てたので期待大てましたが、正にその通りでした。色んな意味で、満点評価です！また、利用したいと思います♪　2014-10-27 17:28:14投稿",
//               "reviewCount": 124,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=40476",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=40476",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=40476",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=40476",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/40476/40476.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 7,
//               "hotelNo": 74708,
//               "hotelName": "民宿あしずり　岬光（はなみつ）",
//               "middleClassName": "高知県",
//               "userReview": "立地：足摺岬にも白山同門にも金剛福寺にもどこにでも近い好立地です。しかも部屋からは太平洋を一望できるオーシャンビュー！部屋：決して新しくなく、設備が整っているわけではありませんが、とても清潔に…　2014-08-27 09:45:45投稿 <a href="https://travel.rakuten.co.jp/HOTEL/74708/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 94,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=74708",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=74708",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=74708",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=74708",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/74708/74708.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 8,
//               "hotelNo": 66511,
//               "hotelName": "喜代美旅館",
//               "middleClassName": "栃木県",
//               "userReview": "８月２６日２７日と宿泊させていただきました。行き届いた、お声掛けをしていただき、大変嬉しい思いです。有難うございましたm(__)m　2014-08-28 21:17:06投稿",
//               "reviewCount": 86,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=66511",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=66511",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=66511",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=66511",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/66511/66511.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 9,
//               "hotelNo": 129997,
//               "hotelName": "＆Ｈａｎａ　Ｓｔａｙ",
//               "middleClassName": "沖縄県",
//               "userReview": "豊かな自然に囲まれてゆったりと過ごすことができたことはもちろんですが、１番良かったと思うのは、２日目の鉄板焼きと２日目の朝食のパンでした。鉄板焼きのおいしさは今までの方が書かれている通りの絶品でした。…　2014-10-29 17:13:01投稿 <a href="https://travel.rakuten.co.jp/HOTEL/129997/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 77,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=129997",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=129997",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=129997",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=129997",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/129997/129997.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           },
//           {
//             "hotel": {
//               "rank": 10,
//               "hotelNo": 76787,
//               "hotelName": "ペンションふうらいぼー",
//               "middleClassName": "宮城県",
//               "userReview": "１０月１２日の３連休中日に利用させていただきました。妊娠中の妻と二人だったんですが、コーヒーの代わりにカフェインレスの飲み物を出していただいたり優しい配慮があり有り難かったです☆他の方々の書き…　2014-10-15 21:12:00投稿 <a href="https://travel.rakuten.co.jp/HOTEL/76787/review.html" class="3click">つづきはこちら</a>",
//               "reviewCount": 49,
//               "hotelInformationUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/yS4PR/?f_no=76787",
//               "planListUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/WrBrg/?f_flg=PLAN&f_no=76787",
//               "checkAvailableUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/Ss6mg/?f_no=76787",
//               "reviewUrl": "https://img.travel.rakuten.co.jp/image/tr/api/ra/vvC6h/?f_hotel_no=76787",
//               "hotelImageUrl": "https://img.travel.rakuten.co.jp/share/HOTEL/76787/76787.jpg",
//               "hotelThumbnailUrl": null,
//               "reviewAverage": 5,
//               "carrier": 0
//             }
//           }
//         ]
//       }
//     }
//   ]
// }