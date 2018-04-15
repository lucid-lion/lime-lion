// Initial welcome page. Delete the following line to remove it.
'use strict';

import * as path from 'path'
var fs = require('fs');


fs.readFile(path.join(__dirname, 'style.css'), 'utf-8', (err, data) => {
	var styles = document.createElement('style')
	styles.innerText = data;
	document.head.appendChild(styles);
});

const vueScript=document.createElement('script');

vueScript.setAttribute('type','text/javascript'),
vueScript.setAttribute('src','https://unpkg.com/vue'),
vueScript.onload=init,
document.head.appendChild(vueScript);

function init(){
	fs.readFile(path.join(__dirname, 'body.html'), 'utf-8', (err, data) => {
		
		Vue.config.devtools=false,
		Vue.config.productionTip=false,
		new Vue({
			data:{
				versions:{
					electron:process.versions.electron,electronWebpack:require('electron-webpack/package.json').version
				}
			},
			methods:{
				open(b){
					require('electron').shell.openExternal(b)
				}
			},
			template: data
		}).$mount('#app')
	});
}