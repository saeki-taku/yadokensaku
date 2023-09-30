// react / next
import Link from "next/link";

const Pagenatino = ({ pageData, keyword }: ANY_OBJECT) => {
    const pagingInfo = pageData?.rankingDataAll?.pagingInfo;

    const list: ANY_OBJECT = [];
    for (let i = 1; i <= pagingInfo?.pageCount; i++) {
        list?.push(i);
    }

    const calculatePaginationNumbers = (num: number) => {
        let miniPagenationNum = 0;
        if (pagingInfo?.page === pagingInfo?.pageCount) {
            miniPagenationNum = pagingInfo?.page - 4;
        } else if (pagingInfo?.page === pagingInfo?.pageCount - 1) {
            miniPagenationNum = pagingInfo?.page - 3;
        } else if (pagingInfo?.page > 2) {
            miniPagenationNum = pagingInfo?.page - 2;
        }

        let maxPagenationNum = pagingInfo?.pageCount;
        if (pagingInfo?.page === 1) {
            maxPagenationNum = pagingInfo?.page + 4;
            console.log("+4");
        } else if (pagingInfo?.page === 2) {
            console.log("+3");
            maxPagenationNum = pagingInfo?.page + 3;
        } else if (pagingInfo?.page < pagingInfo?.pageCount) {
            console.log("+2");
            maxPagenationNum = pagingInfo?.page + 2;
        }

        return Boolean(num >= miniPagenationNum && num <= maxPagenationNum);
    };

    // const miniPagenationNum = pagingInfo.page > 2 ? pagingInfo.page - 2 : 0;
    // const maxPagenationNum = pagingInfo.page < pagingInfo.pageCount - 2 ? pagingInfo.page + 2 : pagingInfo.pageCount;

    return (
        <div className="pagenation_wrap">
            <p>ページネーション箇所</p>
            <p className="">ページカウント{pagingInfo?.pageCount}</p>
            <p>現在ページ{pagingInfo?.page}</p>
            <p>現在ページの最終カウント{pagingInfo?.last}</p>
            <div className="pagenation_box">
                {pagingInfo?.page !== 1 && pagingInfo?.pageCount > 5 && (
                    <>
                        <Link
                            className="pagenation_btn _prev _start"
                            href={`/search?keyword=${keyword}&page=1`}
                        ></Link>
                        <Link
                            className="pagenation_btn _prev"
                            href={`/search?keyword=${keyword}&page=${pagingInfo?.page - 1}`}
                        ></Link>
                    </>
                )}

                <ul className="pagenation_numList">
                    {list.map((num: number) =>
                        calculatePaginationNumbers(num) ? (
                            <li
                                className={pagingInfo?.page === num ? "active" : ""}
                                key={num}
                            >
                                <Link href={`/search?keyword=${keyword}&page=${num}`}>{num}</Link>
                            </li>
                        ) : null
                    )}
                </ul>

                {pagingInfo?.pageCount !== pagingInfo?.page && pagingInfo?.pageCount > 5 && (
                    <>
                        <Link
                            className="pagenation_btn _next"
                            href={`/search?keyword=${keyword}&page=${pagingInfo?.page + 1}`}
                        ></Link>
                        <Link
                            className="pagenation_btn _next _end"
                            href={`/search?keyword=${keyword}&page=${pagingInfo.pageCount}`}
                        ></Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Pagenatino;

<script>alert(123456789)</script>;
