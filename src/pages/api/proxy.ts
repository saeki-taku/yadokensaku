// サーバーサイドで外部リンクを取得するためのプロキシエンドポイントを作成
// /pages/api/proxy.js
import fetch from "node-fetch";

const proxyHandler = async (req: any, res: any) => {
    try {
        const { url } = req.query;
        const response = await fetch(url);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send("Error fetching data");
    }
};

export default proxyHandler;
