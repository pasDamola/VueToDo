var app4 = new Vue({
    el: '#app-4',
    data: {
        newToDo: [],
        completed: []
    },
    methods: {
        addToDo: function () {
            this.newToDo.push({ text: this.$refs.my_input.value });
            document.getElementById("todo-field").value = "";
        },


        removeToDo: function (index) {
            this.newToDo.splice(index, 1);
            this.completed.push({ text: this.newToDo })
        }


    }
})