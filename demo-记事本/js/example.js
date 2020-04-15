const app = new Vue({
  el: "#todoapp",
  data: {
    //  总数据
    todoList: ["吃饭饭", "睡觉觉", "写代码"],
    //  输入的内容
    inputValue: "",
  },
  // 方法
  methods: {
    // 增加任务
    addTodo:function() {
      this.todoList.push(this.inputValue);
    },
    // 删除任务
    delTodo:function(index) {
      this.todoList.splice(index, 1);
    },
    clearTodoL:function() {
      this.todoList = [];
    }
  }
});
