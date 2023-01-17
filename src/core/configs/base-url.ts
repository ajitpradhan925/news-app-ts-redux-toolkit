const localServer: string = 'https://reqres.in/api';
const prodServer: string = 'https://reqres.in/api';

const isUnderDevelopment = __DEV__;

export default {
    BASE_PATH: isUnderDevelopment ? localServer : prodServer
};

