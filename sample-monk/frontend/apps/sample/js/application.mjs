/* 
 * (C) 2015 TekMonks. All rights reserved.
 * License: MIT - see enclosed license.txt file.
 */
 
import {router} from "/framework/js/router.mjs";
import {session} from "/framework/js/session.mjs";
import {securityguard} from "/framework/js/securityguard.mjs";
import {apimanager as apiman} from "/framework/js/apimanager.mjs";
import {APP_CONSTANTS as AUTO_APP_CONSTANTS} from "./constants.mjs";

const init = async hostname => {
	// console.log(hostname)
	window.monkshu_env.apps[AUTO_APP_CONSTANTS.APP_NAME] = {};

	const mustache = await router.getMustache();
	window.APP_CONSTANTS = JSON.parse(mustache.render(JSON.stringify(AUTO_APP_CONSTANTS), {hostname}));
	await _readConfig();

	window.LOG = window.monkshu_env.frameworklibs.log;

	if (!session.get($$.MONKSHU_CONSTANTS.LANG_ID)) session.set($$.MONKSHU_CONSTANTS.LANG_ID, "en");

	securityguard.setPermissionsMap(APP_CONSTANTS.PERMISSIONS_MAP);
	securityguard.setCurrentRole(securityguard.getCurrentRole() || APP_CONSTANTS.GUEST_ROLE);

	apiman.registerAPIKeys(APP_CONSTANTS.API_KEYS, APP_CONSTANTS.KEY_HEADER);
	const API_GETREMOTELOG = APP_CONSTANTS.API_PATH+"/getremotelog", API_REMOTELOG = APP_CONSTANTS.API_PATH+"/log";
	const remoteLogResponse = (await apiman.rest(API_GETREMOTELOG, "GET")), remoteLogFlag = remoteLogResponse?remoteLogResponse.remote_log:false;
	LOG.setRemote(remoteLogFlag, API_REMOTELOG);
}

const main = async _ => {
	await _registerComponents();
	router.loadPage(APP_CONSTANTS.MAIN_HTML);
}

async function _readConfig() {
	const conf = await $$.requireJSON(`${APP_CONSTANTS.CONF_PATH}/app.json`);
	for (const key of Object.keys(conf)) APP_CONSTANTS[key] = conf[key];
}

const _registerComponents = async _ => { for (const component of APP_CONSTANTS.COMPONENTS)
	await import(`${APP_CONSTANTS.COMPONENTS_PATH}/${component}/${component.substring(component.lastIndexOf("/")+1)}.mjs`); 
}

export const application = {init, main};