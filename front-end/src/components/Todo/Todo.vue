<template>
    <Layout>
        <div>
            <h2>--------------------- Todo ---------------------</h2>
            <div>
                <TodoInput />
                <TodoFilter />
                <TodoList />
            </div>
        </div>
    </Layout>
</template>

<script>
import TodoList from 'components/Todo/TodoList'
import TodoInput from 'components/Todo/TodoInput'
import TodoFilter from 'components/Todo/TodoFilter'
import Layout from 'components/Layout'

export default {
  components: { TodoList, TodoInput, TodoFilter, Layout }
}
</script>
