const {createApp} = Vue;

createApp({
    data(){
        return{
            tasks: [
                'fare la spesa',
                'studiare',
                'cucinare'
            ],
            newTask:'',
            isError: false
        }
    },

    methods:{
        addTask(){
            if(this.newTask.length < 5){
                this.isError = true
            } else{

                this.tasks.unshift(this.newTask),
                this.newTask =''
                this.isError = false
            }

        },

        removeTask(index){
            this.tasks.splice(index,1)
        }
    }
}).mount('#app')