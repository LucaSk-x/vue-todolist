let toDoList = [
    {
        text: 'Breakfast',
        done: false,
    },
    {
        text: 'Work',
        done: false,
    },
    {
        text: 'Get lunch',
        done: false,
    },
    {
        text: 'Work',
        done: false,
    },
    {
        text: 'Go to the gym',
        done: false,
    },
    {
        text: 'Dinner',
        done: false,
    },
]

new Vue ({
    el: "#app",

    data: {
        list: toDoList,
        input: "",
    },

    methods: {
        remove: function(index) {
            this.list.splice(index, 1)
        },

        addThings() {
            this.list.push({
                text: this.input,
                done: false,
            });
            
            this.input= null;
        },
    }
})