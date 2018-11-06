var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ],

        newToDo: []
    },
    methods: {
        addToDo: function () {
            this.newToDo.push({ text: this.$refs.my_input.value });
        }
    }
})