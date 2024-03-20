// react
import React from "react";
// styles
import styles from "@/styles/hotel.module.scss";

const InfoOther = ({ hotelPolicyInfo, hotelFacilitiesInfo, hotelOtherInfo }: ANY_OBJECT) => {
	const breakfastPlaces = hotelFacilitiesInfo.aboutMealPlace.filter((item: ANY_OBJECT) => item.breakfastPlace).map((item: ANY_OBJECT) => item.breakfastPlace);
	const dinnerPlaces = hotelFacilitiesInfo.aboutMealPlace.filter((item: ANY_OBJECT) => item.dinnerPlace).map((item: ANY_OBJECT) => item.dinnerPlace);

	const availableCreditCard = hotelPolicyInfo.availableCreditCard;
	const handicappedFacilities = hotelFacilitiesInfo.handicappedFacilities;
	const note = hotelPolicyInfo.note;
	const cancelPolicy = hotelPolicyInfo.cancelPolicy;
	const privilege = hotelOtherInfo.privilege;
	const otherInformation = hotelOtherInfo.otherInformation;

	// <BR>もしくは","の場合は改行される
	const convertText = (text: any) => {
		const lines = text?.split(/<BR>|,/);

		return lines?.map((line: string, i: number) => (
			<React.Fragment key={i}>
				{line}
				{i < lines.length - 1 && <br />}
			</React.Fragment>
		));
	};

	return (
		<div className={styles.otherInfo}>
			<h3 className={styles.info_title}>その他設備・サービス</h3>
			<table>
				<tbody>
					<tr>
						<th>食事場所</th>
						<td>
							{breakfastPlaces.length === 0 && dinnerPlaces.length === 0 && "ー"}
							{breakfastPlaces.length !== 0 && <div>朝食 : {breakfastPlaces.join(", ")}</div>}
							{dinnerPlaces.length !== 0 && <div>夕食 : {dinnerPlaces.join(", ")}</div>}
						</td>
					</tr>
					<tr>
						<th>カード</th>
						<td>
							<ul className={styles.listFlex}>
								{availableCreditCard.map((value: ANY_OBJECT) => (
									<li className={styles.item} key={value.card}>
										{value.card}
									</li>
								))}
							</ul>
						</td>
					</tr>
					<tr>
						<th>バリアフリー対応</th>
						<td>
							<ul className={styles.listFlex}>
								{handicappedFacilities.length > 0
									? handicappedFacilities.map((value: ANY_OBJECT) => (
											<li className={styles.item} key={value.item}>
												{value.item}
											</li>
									  ))
									: "ー"}
							</ul>
						</td>
					</tr>
					<tr>
						<th>条件・注意事項</th>
						<td>{note ? convertText(note) : "ー"}</td>
					</tr>
					<tr>
						<th>キャンセルポリシー</th>
						<td>{convertText(cancelPolicy)}</td>
					</tr>
					<tr>
						<th>その他情報</th>
						<td>
							{(!privilege && !otherInformation) ?? "ー"}
							<p>{privilege}</p>
							<p>{otherInformation}</p>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default InfoOther;
