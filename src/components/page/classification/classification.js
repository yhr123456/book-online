import mey from './infomation'
export default {
    name:'Class',
    props:['was'],
    data(){
        return{
            kinds:[],
            less:[],
            search:'',
            detils:true,
            transport:[],
            build:false,
            shoppingcar:[]
        }
    },
    components:{
        mey
    },
    created(){
        axios.get('../../../../static/data.json').then((res)=>{
            this.kinds=res.data
            this.less=this.kinds.slice(0,6)
        })
        

    },
    methods:{
        storageinfo(val){
            this.$emit('allshopping',val)
        },
        more(){
            this.less=this.kinds
        },
        query(){
            let search = this.kinds.filter((item)=>{
                if(item.name.indexOf(this.search) !== -1){
                    return item
                }
            })
          this.less = search
        },
        change(index){
            this.transport = this.less[index]
            this.detils=false
            this.build = true
            this.$emit(`noftooer`,false)
        },
        haveftooer(val){
            this.$emit('hasfooter',val)
        }
    },
    computed:{
        // less:function(){
        //   return  this.kinds.slice(0,6)
        // }
    }
}