export const CONSTANT = {
    BASE_URL: '/api',
    MENUS: [
        {
            path: '/',
            name: '',
            component: () => import('@/views/index'),
            noMenu: true
        },
        {
            path: '/apiDoc',
            name: 'apiDoc',
            component: () => import('@/views/apiDoc/index'),
            meta: {title: 'API Doc', icon: 'el-icon-grape'}
        },
        {
            path: '/environmentConfig',
            name: 'environmentConfig',
            component: () => import('@/views/environmentConfig/index'),
            meta: {title: 'Environment Config', icon: 'el-icon-moon'}
        },
        {
            path: '/dataStructure',
            name: 'dataStructure',
            component: () => import('@/views/dataStructure/index'),
            meta: {title: 'Data Structure', icon: 'el-icon-coin'}
        },
    ],
    CONFIG: {
        PAGE_SIZE_DEFAULT: 20,
        PAGE_SIZES: [20, 50, 100, 1000],
        DATE_FORMAT: 'yyyy-MM-dd hh:mm:ss',
        DATE_FORMAT_QUERY: 'yyyy-MM-dd',
        DEFAULT_PROJECT_VERSION: '1.0',
        DEFAULT_PROJECT_TYPE: 0,
        USER_SHOW_STYLE: '{userName} ({loginName})',
        ADMIN_LOGIN_NAME: 'admin',
        DEFAULT_DATA_LIST_SIZE: 5,
    },
    LOCAL_STORAGE_KEY: {
        LOGIN_AUTH: 'auth',
        USER: 'user',
    },
    SESSION_STORAGE_KEY: {
        SELECTED_PROJECT_ID: 'selectedProjectId',
        SELECTED_PROJECT_NAME: 'selectedProjectName',
    },
    REQUEST_URL: {
        LOGIN: '/user/login',
        LOGIN_OUT: '/user/loginOut',
        USER_ADD: '/user/add',
        USER_FIND_PAGE: '/user/findPage',

        PROJECT_ADD: '/project/add',
        PROJECT_EDIT: '/project/edit',
        PROJECT_FIND_LIST_BY_GROUP: '/project/findListByGroup',
        PROJECT_FIND_PROJECT_USER: '/project/findProjectUser',
        PROJECT_EDIT_PROJECT_USER: '/project/editProjectUser',
        PROJECT_ASSIGN: '/project/assign',

        PROJECT_GROUP_ADD: '/projectGroup/add',
        PROJECT_GROUP_EDIT: '/projectGroup/edit',
        PROJECT_GROUP_FIND_DETAIL: '/projectGroup/findDetail',

        API_ENV_ADD: '/apiEnv/add',
        API_ENV_EDIT: '/apiEnv/edit',
        API_ENV_FIND_LIST: '/apiEnv/findList',

        STRUCTURE_ADD: '/structure/add',
        STRUCTURE_EDIT: '/structure/edit',
        STRUCTURE_FIND_DETAIL: '/structure/findDetail',
        STRUCTURE_FIND_PAGE: '/structure/findPage',

    },
    CLOSE_LOADING_URL: [
        '/system/sysUserWechat/loginAsync',
        '/system/rsa/getPublicKey',
        '/system/qyWechatUser/binding',
    ],
    ROUTER_URL: {
        DICT_ITEM: '/system/dictItem',
    },
    RESULT_CODE: {
        SUCCESS: 200,
        USER_INVALID: 10004,
        LOGIN_NOT: 10005,
    },
    STATUS: {
        0: 'Enable', 1: 'Disable'
    },
    PROJECT_TYPE: {
        0: 'web', 1: 'app', 2: 'pc', 3: 'others'
    },
    AUTH_ROLE: {
        ALL: '0',
        ADMIN: '1',
        READ_WRITE: '2',
        READ: '3',
    },
    PROJECT_USER_TYPE: {
        1: 'Admin',
        2: 'Read-Write',
        3: 'Read-Only',
    },
    PARAM_TYPE: {
        STRING: 0,
        FILE: 1,
        JSON: 2,
        NUMBER: 3,
        DOUBLE: 4,
        TIME: 5,
        BOOLEAN: 6,
        ARRAY: 7,
        OBJECT: 8,
        NULL: 9,
    },
    PARAM_TYPE_STR: {
        0: 'string',
        1: 'file',
        2: 'json',
        3: 'number',
        4: 'double',
        5: 'time',
        6: 'boolean',
        7: 'array',
        8: 'object',
        9: 'null',
    },
    REQUIRED_TYPE: {
        REQUIRED: 0,
        OPTIONAL: 1,
        SPECIAL: 2,
    },
    REQUIRED_TYPE_STR: {
        0: 'required',
        1: 'optional',
        2: 'special',
    },
};

