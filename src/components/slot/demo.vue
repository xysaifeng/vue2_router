<template>
    <ul>
        <li v-for="todo in filterTodos" :key="todo.id">
           <slot :todos='todo' name='todo' >
                <!-- {{todo.text}} -->
           </slot>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['filterTodos']
}
</script>