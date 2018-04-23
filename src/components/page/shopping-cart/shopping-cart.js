import order from "./order.vue"
export default {
    name:'shopping-cart',
    components:{
        order
    },
    data(){
        return{
            mask:false,
            //地址的信息
            addressinfo:{
                 receivAddress:{
                    province:'',//省
                    city:'',//城市
                    district:'',//区
                    detailed:''//详细地址

                },
                receivname:'',//姓名
                postCodes:'',//邮编
                phoneNum:''//电话
            },
            hasNoBook:false,
            havebook:true,
            localinfo:{},
            commodity:[],
            total:'',
            qwe:true,
            orderpage:false,
            main:true,
            num:[],
            total:'',
            delCheck:false,
            dalData:[],
            leng:[],
            confirmState:false,
            display:{
                userinfo:"",
                show:false
            }

        }
    },
    
    created(){
        this.getlocalinfo();
        let data = JSON.parse(localStorage.getItem(`newinfo`))
        this.commodity = data;
        //判断本地是否有数据
        if(this.localinfo == null){
            this.hasNoBook = true;
            this.havebook = false;
            // localStorage.clear();
        }else if(this.localinfo.length == 0){
            this.hasNoBook = true;
            this.havebook = false;
            // localStorage.clear();
        }
        //判断params是否有数据
        if(!(this.$route.params.city == undefined)){
            //有数据
            let data = this.$route.params;
            this.addressinfo.receivname = data.name;
            this.addressinfo.postCodes = data.postCodes;
            this.addressinfo.phoneNum = data.phoneNum;
            this.addressinfo.receivAddress.province = data.province;
            this.addressinfo.receivAddress.city = data.city;
            this.addressinfo.receivAddress.district = data.district;
            this.addressinfo.receivAddress.detailed = data.detailed;
        }
        
       
    },
    methods:{
          
          //获取本地数据
          getlocalinfo(){
            this.localinfo = JSON.parse(localStorage.getItem("newinfo"));
            this.display.userinfo = this.addressinfo;
          },
           add(index){
            let inp = document.getElementsByClassName('amount');
            inp[index].value++
            
           },
           reduce(index){
            let inp = document.getElementsByClassName('amount');
            inp[index].value--
            if(inp[index].value < 0){
                inp[index].value = 0       
              }
           },
           //前往支付
           check(){
               //判断用户地址是否完善
               if(this.addressinfo.receivAddress && this.addressinfo.receivname && this.addressinfo.postCodes && this.addressinfo.phoneNum){
                     this.main=false;
                     this.orderpage=true;
                     this.$emit(`noftooer`,false);
                     let inp = document.getElementsByClassName('amount')
                for(var i = 0;i < inp.length;i++){ 
                     let num = Number(inp[i].value)
                     let total =Number(this.commodity[i].price) * num
                     this.num.push(total)
                  }
                     let cc =  this.num.reduce(function(a,b){
                     return a+b
                 })
                     this.total=cc;
               

               }else{
                   //弹出框
                   this.mask = true;
               }     
           },
           //否的点击事件
           no(){
                this.mask = false;
           },
           //是的点击事件
           havefooter(){
               this.$emit(`hasfooter`,true)
           },
           //编辑按钮的点击事件
           state(){
               this.delCheck = !this.delCheck;
           },
           //复选框的点击事件
           delConfirm(index){     
            let inp = document.getElementsByClassName('confirm')    
                
            if(inp[index].checked == true){
                this.leng.push(index) 
               }else{
                this.leng.splice(index,1)
               }
                         
           },
           //删除商品点击事件
           delected(){
              this.$emit('del',this.leng);
              if(this.commodity == null){
                  localStorage.clear();
                  this.hasNoBook = true;
                  this.havebook = false;
              }
              location.reload();      
           }
    }
}