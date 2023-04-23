// lib
import axios from "axios";

// views
import Top from "@/views/Top";
// datasources
import { requestPageData } from "@/dataSources/top/requestPageData";
// others
import { promiseAll } from "@/utils/common";

export default function Home() {
    console.log("APIキー", process.env.API_KEY);

    return (
        <>
            <Top></Top>;
        </>
    );
}

export async function getServerSideProps() {
    return promiseAll([requestPageData(content)], {
        then: ([pageData]) => ({
            props: {
                page: "",
                title: "title",
                pageData,
                description: "",
            },
        }),
    });
}
