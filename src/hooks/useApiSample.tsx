import { useQuery, useMutation } from "react-query";
import axios from "axios";

// APIのエンドポイントURL
const API_ENDPOINT = "https://api.example.com/data";

// データを取得するクエリ関数
const fetchData = async () => {
    const response = await axios.get(API_ENDPOINT);
    return response.data;
};

// データを更新するミューテーション関数
const updateData = async (newData) => {
    const response = await axios.put(API_ENDPOINT, newData);
    return response.data;
};

const MyComponent = ({ initialData }) => {
    const { data, isLoading, isError, error, updateData } = useData(initialData);

    // ...

    return (
        <div>
            <h1>Data: {data}</h1>
            <button onClick={() => updateData("new data")}>Update Data</button>
        </div>
    );
};

export const getServerSideProps = async () => {
    // サーバーサイドでデータを取得
    const initialData = await fetchData();

    return {
        props: {
            initialData,
        },
    };
};
