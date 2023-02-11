<template>
    <footer class="footer">
        <div class="footer__wrapper">
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
            <button class="clearBtn" @click="removeCompleted">
                완료한 일 지우기
            </button>
        </div>
    </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    display: flex;
    justify-content: center;

    .footer__wrapper {
        width: 50vw;
        

        .footer__filters {
            display: flex;
            justify-content: space-around;

            li {
                list-style:none;
            }
        }
    }
}


</style>