Vue.component('greeting',{
	template:'<div>Hello!! My name is {{name}} <button v-on:click="changeName">Change Name</button></div>',
	data:function(){
		return{
			name:'tuhin'
		}
	},
	methods:{
		changeName:function(){
			this.name = "Dewan";
		}
	}
});


var app = new Vue({
	el:'#vue-app-one',
	data:{
		
	},
	methods:{

	},
	computed:{
		
	}
});

var app = new Vue({
	el:'#vue-app-two',
	data:{
		
	},
	methods:{

	},
	computed:{
		
	}
});