var app = new Vue({
	el:'#vue-app',
	data:{
		name:'Tuhin',
		job:'Techadea',
		website:'http://www.techadea.com',
		websitetag:'<a href="http://www.techadea.com">Techadea Website Tag</a>',
		age:'25',
		name2:'',
		age2:''
	},
	methods:{
		greet:function(time){
			return "Good" +" " + time + " " +this.name;
		},
		add: function(inc){
            this.age += inc;
        },
        substract: function(dec){
            this.age -= dec;
        },
		click:function(){
			alert("This link will take you to the company website");
		},
		logName:function(){
			console.log('You entered your name');
		},
		logAge:function(){
			console.log('You entered your age');
		}
	}
});