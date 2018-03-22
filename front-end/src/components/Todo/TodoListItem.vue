<template>
    <li>
        <span>{{ todo.text }}</span>
        <button class="delete-button">
            <i class="el-icon-circle-check" :class="deleteClass" @click="doneTodo(todo)"/>
        </button>
    </li>
</template>

<script>
import { mapActions } from 'vuex'
import todoStatus from 'constants/todoStatus'

export default {
  props: ['todo'],
  methods: mapActions([ 'doneTodo' ]),
  computed: {
    deleteClass: function () {
      return {done: this.todo.status === todoStatus.DONE}
    }
  }
}
</script>

<style>
    .delete-button {
        border: none;
        outline: none;
    }
    .done-todo-icon-black {
        color: black
    }
    .done {
        color: green
    }
</style>
