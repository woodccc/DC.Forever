<template>
    <div>
        <el-input
            :value="newTodo"
            @input="updateNewTodo($event)"
            @blur="addNewTodo()"
            @keyup.enter.native="addNewTodo()"
            placeholder="请输入内容"
            class="new-todo-input"
        />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([ 'newTodo' ]),
  methods: {
    ...mapActions([ 'updateNewTodo' ]),
    addNewTodo () {
      this.$store.dispatch('addNewTodo')
    }
  }
}

</script>
<style>
    .new-todo-input {
        width: 600px
    }
</style>
