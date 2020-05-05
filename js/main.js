const $=s=>document.querySelector(s)
const $$=s=>document.querySelectorAll(s)
// let next = (this.index + 1 + this.li.length)%this.li.length

const LiChange ={
    init(){
        this.$$li = $$('li')
        this.$$item = $$('.item')
        this.li = Array.from(this.$$li)
        this.item = Array.from(this.$$item)
        this.$btnleft = $('.btn-left')
        this.$btnright = $('.btn-right')
        this.getIndex()
        this.bind()   
    },
    getIndex(){              //重点
        return index = this.li.indexOf($('li.change'))    
    },
    bind(){
        for(let i in this.li){                         //重点
            this.li[i].onclick=()=>{
                this.$$li.forEach(node=>node.classList.remove('change'))
                this.li[i].classList.add('change')
                this.$$item.forEach(node=>node.classList.remove('active'))
                this.item[i].classList.add('active')
            }
        }
        this.$btnleft.onclick=()=>{  
            this.getIndex()
            var last = (index-1 + this.li.length)%this.li.length  //重点
            this.$$li.forEach(node=>node.classList.remove('change'))
            this.li[last].classList.add('change')
            this.$$item.forEach(node=>node.classList.remove('active'))
            this.item[last].classList.add('active')
        }
        this.$btnright.onclick=()=>{
            this.getIndex()
            let next = (index + 1 + this.li.length)%this.li.length //重点
            this.$$li.forEach(node=>node.classList.remove('change'))
            this.li[next].classList.add('change')
            this.$$item.forEach(node=>node.classList.remove('active'))
            this.item[next].classList.add('active')
        }
    }
}
const App = {
    init(){
        [...arguments].forEach(module=>module.init())
    }
}
App.init(LiChange)