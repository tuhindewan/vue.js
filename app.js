var app = new Vue({
	el:'#vue-app',
	data:{
		name:'Tuhin',
		job:'Techadea',
		website:'http://www.techadea.com',
		websitetag:'<a href="http://www.techadea.com">Techadea Website Tag</a>'
	},
	methods:{
		greet:function(time){
			return "Good" +" " + time + " " +this.name;
		}
	}
});