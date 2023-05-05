import { sendResponse } from "@/service/chatgpt";
import { NextApiRequest } from "next";

const requestAuth = (req: NextApiRequest) => {
    const tokens = process.env.LOCAL_ACCESS_TOKENS?.split(",");
    const token = req.headers.authorization;

    if (!process.env.LOCAL_ACCESS_TOKENS) {
        return Promise.resolve();
    }

    if (!token || !tokens?.length) {
        return sendResponse({
            status: "fail",
            message: "No authorization token provided-请在左下角设置中输入请求token！",
        });
    }

    if (!tokens.includes(token)) {
        return sendResponse({
            status: "fail",
            message: "Invalid authorization token-请输入正确的访问token！",
        });
    }
};

export default requestAuth;
