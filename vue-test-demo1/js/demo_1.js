Vue.config.productionTip=false
const vm=new Vue({
    el:'#demo',
    data:{
        name:'test',
        test:1000,
        firstname:'zhou',
        lastname:'min',
        ishot:true,
        show_address:false,
        address_test:'',
        address:[{
            state:'中国',
            province:'江西',
            now_address:'福建福州',
            age:18
        }],
        address_China:['河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省'
        ,'安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省'],
        // filter_address_China:[],
        time:new Date().getTime(),
        watch_Time:new Date().getTime(),
        newtime:0
    },
    //方法
    methods:{
        prvent(){
            //获取当前浏览器的所在系统
            var sy=navigator.userAgent.split(" ")
            const ss=sy[1].substr(1)
            const aa=ss.substr(0,ss.length-1)
            console.log(aa)
            alert("阻止了跳转")
        },
        test_demo2(e){
            alert(e.target.innerText+"这是不带参数的测试")
        },
        trigger_p(e){
            alert(e+"这是带参的测试")

        },
        getName() {
            var name=this.firstname+'-'+this.lastname
           return name
        },
        show_address_China(){
            this.show_address=!this.show_address
        },
        show_your_selected(e){
            this.address_test=e.target.innerText
        },
        delete_arr_shift(){
            this.address_China.shift()
        },
        create_arr_unshift(){
            var i=this.address_China.length
            this.address_China.unshift('新省份'+i)
        },
        delete_arr_pop(){
          this.address_China.pop();
        },
        create_arr_push(){
            var i=this.address_China.length
          this.address_China.push('新省份'+i);
        },




    },
    //计算属性
    computed:{
        fullname(){
                return this.firstname+'-'+this.lastname
        },
        back(){
            return this.ishot?"热":"凉";
        },

        //计算属性完成过滤框
        filter_address_China(){
            return this.address_China.filter((r)=>{
                return r.indexOf(this.address_test)!=-1
            })
        },
        Time(){
            return dayjs(this.time).format('YYYY年-MM月-DD日-HH时:mm分:ss秒 ')
        }

    },
    //过滤器
    filters:{
        time_filter(val){
            return dayjs(val).format('YYYY年MM月DD日HH时mm分ss秒 ')
        }
    },
    //监控
    watch:{

        //监控完成过滤框
        // address_test:{
            // handler(val){
            //     immediate:true;
            //     this.filter_address_China=this.address_China.filter((r=>{
            //         return r.indexOf(val)!=-1;
            //     }))
            // }
        // }

    },
    mounted(){
        setTimeout( ()=>{
            const time=new Date().getTime()
            this.newtime=dayjs(time).format('YYYY年-MM月-DD日-HH时:mm分:ss秒 ')
            console.log(this.newtime)
            return this.newtime
        },100)

    },
    beforeDestroy () {

    }
})
new Vue({
    el:"#demo_1",
    data: {
        name: '这是第二个绑定的框'
    }
})