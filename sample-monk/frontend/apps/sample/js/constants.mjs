/* 
 * (C) 2015 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
const FRONTEND = "http://{{{hostname}}}:8080";
const BACKEND = "http://localhost:9090"
const APP_NAME = "sample";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;
const CONF_PATH = `${FRONTEND}/apps/${APP_NAME}/conf`;
const API_PATH = `${BACKEND}/apps/${APP_NAME}`;
const COMPONENTS_PATH = `${FRONTEND}/apps/${APP_NAME}/components`;

export const APP_CONSTANTS = {
    FRONTEND, BACKEND, APP_PATH, CONF_PATH, COMPONENTS_PATH, API_PATH,
    MAIN_HTML: APP_PATH+"/main.html",

    // API Paths
    API_SIGNUP: `${BACKEND}/signup`,

    USERID: "id",
    USER_ROLE: "user",
    GUEST_ROLE: "guest",
    PERMISSIONS_MAP: {
        user:[APP_PATH+"/main.html",$$.MONKSHU_CONSTANTS.ERROR_THTML], 
        guest:[APP_PATH+"/main.html", $$.MONKSHU_CONSTANTS.ERROR_HTML]
    },
    API_KEYS: {"*":"fheiwu98237hjief8923ydewjidw834284hwqdnejwr79389"},
    KEY_HEADER: "X-API-Key"
}