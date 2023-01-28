<template>
    <footer class="footer">
        <span class="footer__count">
            <strong>{{ remaining }}</strong>
            <span>{{ remaining === 1 ? ' item' : ' items' }} left</span>
        </span>
        <ul class="footer__filters">
            <li>
            <a href="#/all" :class="{ selected: visibility === 'all' }">All</a>
            </li>
            <li>
            <a href="#/active" :class="{ selected: visibility === 'active' }">할일</a>
            </li>
            <li>
            <a href="#/completed" :class="{ selected: visibility === 'completed' }">완료한 일</a>
            </li>
        </ul>
        <button class="clearBtn" @click="removeCompleted" v-show="todos.length > remaining">
            완료한 일 지우기
        </button>
    </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer {
    width: 80vw;
}
</style>