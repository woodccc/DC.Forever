<script src="../constants/todoStatus.js"></script>
<template>
    <div class="todo-filter-container">
        <el-radio-group :value="todoFilter" @change.native="handleChangeTodoFilter">
            <el-radio-button label="ALL" />
            <el-radio-button label="DONE" />
            <el-radio-button label="NOT_DONE" />
        </el-radio-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mutationTypes from 'store/mutationTypes'

export default {
  computed: mapGetters([ 'todoFilter' ]),
  methods: {
    handleChangeTodoFilter (e) {
      this.$store.dispatch('updateTodoFilter', e.target.value)
    }
  }
}
</script>

<style>
    .todo-filter-container {
        margin-top: 16px
    }
</style>
