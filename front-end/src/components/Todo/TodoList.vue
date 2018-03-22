<template>
    <div>
        <ul>
            <TodoListItem v-for="todo in filterTodos" :key="todo.id" :todo="todo"/>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoListItem from 'components/Todo/TodoListItem'

export default {
  computed: {
    ...mapGetters({
      todos: 'todos',
      filterTodos: 'filterTodos'
    })
  },
  components: { TodoListItem }
}
</script>
