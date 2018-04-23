import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import axios from 'axios'
import Content from '@/components/page/home-page/Content'
import Prompt from '@/components/page/home-page/Prompt'
export default {
    name: "Home",
    components: {
        
        Content, Prompt,
    },
    data(){
        return{
            newInfo:[],
            editorInfo:[],
            populInfo:[]
            
        }
    },
    created(){
        function getNewInfo(){
            return axios.get('/static/api/newBook.json')
        }
        function getEditor(){
            return axios.get('/static/api/editorsRecommend.json')
        }
        function getPopul(){
            return axios.get('/static/api/popularBook.json')
        }
        axios.all([getNewInfo(),getEditor(),getPopul()])
            .then(axios.spread((acct,perms,popul)=>{
                //请求都完时
                this.newInfo = acct.data;
                this.editorInfo = perms.data;
                this.populInfo = popul.data;
            }));
        
    },
    mounted(){
     this.shuffling();
    },
    methods:{
        shuffling(){
            var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                  delay: 2500,
                  disableOnInteraction: false,
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
        },
        detail(flag){
            this.$emit("dtailclick",flag);
        },
        allshopping(val){
            console.log("这是hom")

            this.$emit('allshopping',val)
        },

    }
    
   
    
};