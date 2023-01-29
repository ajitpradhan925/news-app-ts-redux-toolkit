import _const from "./const";

const localServer: string = _const.BASE_URL_TEST;
const prodServer: string = _const.BASE_URL_PROD;

const isUnderDevelopment = __DEV__;

export default {
    BASE_PATH: isUnderDevelopment ? localServer : prodServer
};

