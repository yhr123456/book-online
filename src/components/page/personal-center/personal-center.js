
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
    }
  }
  
 
 
  
};