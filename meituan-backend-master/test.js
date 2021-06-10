function u(){
    this.time = 0;
    this.ttime = 0;
    this.console = function(text){
        if(this.time>0){
            this.ttime+=this.time;
            setTimeout(()=>{
                console.log(text)
            },this.ttime)
        }else{
            console.log(text)
        }
        return this
    }
    this.settimeout = function(time){
        this.time = time>0?time:0;
        return this
    }
}
let myu = new u();
myu.console("hello")
myu.settimeout(3000)
myu.console("world")
myu.settimeout(3000)
myu.console()

var iteam1 = document.getElementById()
iteam1.oncllick = function (){
    location.href
}

document.addEventListener("click",function(){
    
})