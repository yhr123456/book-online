import order from "./order.vue"
export default {
    name:'shopping-cart',
    components:{
        order
    },
    data(){
        return{
            commodity:[],
            total:'',
            qwe:true,
            orderpage:false,
            main:true,
            num:[],
            total:''
        }
    },
    created(){
        let data = JSON.parse(localStorage.getItem(`info`))
        this.commodity = data
    },
    methods:{
       add(index){
        let inp = document.getElementsByTagName('input');
        inp[index].value++
        
       },
       reduce(index){
        let inp = document.getElementsByTagName('input');
        inp[index].value--
        if(inp[index].value < 0){
            inp[index].value = 0       
          }
       },
       check(){
           this.main=false
           this.orderpage=true
           this.$emit(`noftooer`,false)
           let inp = document.getElementsByTagName('input')
           for(var i = 0;i < inp.length;i++){ 
                let num = Number(inp[i].value)
               let total =Number(this.commodity[i].price) * num
                this.num.push(total)
           }
          let cc =  this.num.reduce(function(a,b){
               return a+b
           })
           this.total=cc
       },
       havefooter(){
           this.$emit(`hasfooter`,true)
       }
    }
}