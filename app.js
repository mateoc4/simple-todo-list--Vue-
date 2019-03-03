const app = new Vue({
    el: '#app',
    data:{
        newTodo:'',
        todos:[]
    },
    methods:{
        addTodo(){
            this.todos.push({
                title:this.newTodo,
                message:"Task number ",
                index: +1,
            });
            this.newTodo = '';
        },
        deleteTodo(){
            this.todos.pop() 
        },
        clearAllTodo(index){
            this.todos.splice(index)
        }
    }
})
