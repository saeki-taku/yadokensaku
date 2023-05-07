// // lib
// import axios from "axios";
// // views
import Top from "@/views/Top";
// // datasources
import { requestPageData } from "@/dataSource/top/requestPageData";

// others
import { promiseAll } from "@/utils/common";
// api
import { getRanking } from "./api/ranking";

export default function Home({ ranking }: { ranking: any }) {
    // export default function Home() {
    // console.log("ranking", ranking);
    return (
        <>
            <Top />
        </>
    );
}

export const getServerSideProps = async (content: ANY_OBJECT) => {
    const ranking = await getRanking("all");
    // console.log("ranking___", ranking);

    return promiseAll([requestPageData(content)], {
        then: ([pageData]) => ({
            props: {
                page: "list",
                title: "title",
                pageData,
                description: "",
            },
        }),
    });
    // return {
    //     props: {
    //         ranking,
    //     },
    // };
};

//   return promiseAll(
//     [
//         requestPageData(content)
//     ],
//     {
//         then: ([pageData]) => ({
//             props: {
//                 page: "postDetail",
//                 title: "title",
//                 pageData,
//                 description: "",
//                 // dehydratedState: dehydrate(queryClient),
//             },
//         }),
//     }
//   )

// export async function getServerSideProps() {
//     then: ([pageData]) => ({
// return promiseAll([requestPageData(content)], {
//         props: {
//             page: "",
//             title: "title",
//             pageData,
//             description: "",
//         },
//     }),
// });
// }
