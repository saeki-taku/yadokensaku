// react
import React from "react";
// styles
import styles from "@/styles/hotel.module.scss";

const InfoOther = ({ hotelBasicInfo, hotelDetailInfo, hotelPolicyInfo, hotelFacilitiesInfo }: ANY_OBJECT) => {
    return (
        <div className={styles.basicInfo}>
            <h3 className={styles.info_title}>基本情報</h3>
            <table>
                <tbody>
                    <tr>
                        <th>ホテル名</th>
                        <td>
                            {hotelBasicInfo.hotelName}
                            <span className={styles.rearText}>（{hotelBasicInfo.hotelKanaName}）</span>
                        </td>
                    </tr>
                    <tr>
                        <th>住所</th>
                        <td>
                            〒{hotelBasicInfo.postalCode} {hotelBasicInfo.address1}
                            {hotelBasicInfo.address2}
                        </td>
                    </tr>
                    <tr>
                        <th>TEL</th>
                        <td>{hotelBasicInfo.telephoneNo}</td>
                    </tr>
                    <tr>
                        <th>FAX</th>
                        <td>{hotelBasicInfo.faxNo}</td>
                    </tr>
                    <tr>
                        <th>アクセス</th>
                        <td>{hotelBasicInfo.access}</td>
                    </tr>
                    <tr>
                        <th>駐車場</th>
                        <td>{hotelBasicInfo.parkingInformation}</td>
                    </tr>
                    <tr>
                        <th>チェックイン</th>
                        <td>
                            {hotelDetailInfo.checkinTime}
                            <span className={styles.rearText}>最終チェックイン（{hotelDetailInfo.lastCheckinTime}）</span>
                        </td>
                    </tr>
                    <tr>
                        <th>チェックアウト</th>
                        <td>{hotelDetailInfo.checkoutTime}</td>
                    </tr>
                    <tr>
                        <th>部屋数</th>
                        <td>{hotelFacilitiesInfo.hotelRoomNum}室</td>
                    </tr>
                    <tr>
                        <th>館内設備</th>
                        <td>
                            <ul className={styles.list}>
                                {hotelFacilitiesInfo.hotelFacilities.map((value: ANY_OBJECT) => (
                                    <li
                                        className={styles.item}
                                        key={value.item}
                                    >
                                        {value.item}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <th>部屋設備・備品</th>
                        <td>
                            <ul className={styles.listFlex}>
                                {hotelFacilitiesInfo.roomFacilities.map((value: ANY_OBJECT) => (
                                    <li
                                        className={styles.item}
                                        key={value.item}
                                    >
                                        {value.item}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InfoOther;
