var app = new Vue({
	el:'#vue-app',
	data:{
		name:'Tuhin',
		job:'Techadea'
	},
	methods:{
		greet:function(time){
			return "Good" +" " + time + " " +this.name;
		}
	}
});