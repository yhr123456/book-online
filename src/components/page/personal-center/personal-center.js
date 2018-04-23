
export default {
  name: "PersonalCenter",
  props:["name"],
  data(){
    let user = this.name;
    let newname = this.username;
    return{
        username:'',
        display:'',
    }
  },
  // computed:{
  //    getusername(){
  //     if(localStorage.getItem("userinfo")){
  //       let data = JSON.parse(localStorage.getItem(`userinfo`));
  //       this.username = data[0].user;
  //       }else{
  //         this.username = "没有登录";
  //       }
  //       return this.username;
  //    }
  // },
  created(){
    this.getname();
  },
  methods:{
    getname(){
      if(localStorage.getItem("userinfo")){
      let data = JSON.parse(localStorage.getItem(`userinfo`));
      this.username = data[0].user;
      }else{
        this.username = "没有登录";
      }
      let username = {
          username: this.username,
          show:false
      }
      this.display = username;
      
      // if(this.$route.params.user == undefined ){
      //  this.username = "没有登录";
      // }else{
      //   this.username = this.$route.params.user;
      // }
    }
  }
  
 
 
  
};