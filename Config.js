const YASTA_WEB_ROOT_LOCAL =
    'http://local.ultracreditos.com:8080/ultracreditos/';
const YASTA_WEB_ROOT_LOCAL_BMSC =
    'http://localbmsc.ultracreditos.com:8080/ultracreditos/';
const YASTA_WEB_ROOT_STAGING = 'https://beta.ultracreditos.com/';
const YASTA_WEB_ROOT_PRODUCTION = 'https://www.ultracreditos.com/';
const YASTA_WEB_ROOT_PRODUCTION_BMSC = 'https://cyco.bmsc.com.bo/';
const YASTA_TOKEN_KEY = 'TOKEN';
const YASTA_CONCESSIONAIRE_KEY = 'CONCESSIONAIRE';
const YASTA_ENV = process.env.YASTA_ENV;

const CONFIG_ENV = {
    LOCAL: {
        WEB_ROOT: YASTA_WEB_ROOT_LOCAL,
        TOKEN_KEY: YASTA_TOKEN_KEY,
        CONCESSIONAIRE_KEY: YASTA_CONCESSIONAIRE_KEY,
        ROUTER_BASENAME: '/',
        ASSETS_FILE_ROOT: '',
    },
    STAGING: {
        WEB_ROOT: YASTA_WEB_ROOT_STAGING,
        TOKEN_KEY: YASTA_TOKEN_KEY,
        CONCESSIONAIRE_KEY: YASTA_CONCESSIONAIRE_KEY,
        ROUTER_BASENAME: '/web/app/crm/admin/handler',
        ASSETS_FILE_ROOT: '/app/js/backend',
    },
    PRODUCTION: {
        WEB_ROOT: YASTA_WEB_ROOT_PRODUCTION,
        TOKEN_KEY: YASTA_TOKEN_KEY,
        CONCESSIONAIRE_KEY: YASTA_CONCESSIONAIRE_KEY,
        ROUTER_BASENAME: '/web/app/crm/admin/handler',
        ASSETS_FILE_ROOT: '/app/js/backend',
    },
    BMSC_LOCAL: {
        WEB_ROOT: YASTA_WEB_ROOT_LOCAL_BMSC,
        TOKEN_KEY: YASTA_TOKEN_KEY,
        CONCESSIONAIRE_KEY: YASTA_CONCESSIONAIRE_KEY,
        ROUTER_BASENAME: '/',
        ASSETS_FILE_ROOT: '',
    },
    BMSC: {
        WEB_ROOT: YASTA_WEB_ROOT_PRODUCTION_BMSC,
        TOKEN_KEY: YASTA_TOKEN_KEY,
        CONCESSIONAIRE_KEY: YASTA_CONCESSIONAIRE_KEY,
        ROUTER_BASENAME: '/web/app/crm/admin/handler',
        ASSETS_FILE_ROOT: '/app/js/backend',
    },
};
export default {
    ...CONFIG_ENV[YASTA_ENV],
    getWebRoot: () => CONFIG_ENV[YASTA_ENV].WEB_ROOT,
    getRootBaseName: () => CONFIG_ENV[YASTA_ENV].ROUTER_BASENAME,
    isLocalEnv: () => YASTA_ENV == 'LOCAL' || YASTA_ENV == 'BMSC_LOCAL',
    isProductionEnv: () => YASTA_ENV == 'PRODUCTION',
    isStagingEnv: () => YASTA_ENV == 'STAGING',
};
