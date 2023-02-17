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
                    {{ footer.length }}개
                </li>
                <li>
                    <a href="#/active" :class="{ selected: visibility === 'active' }">할일</a>
                </li>
                <li>
                    <a href="#/completed" :class="{ selected: visibility === 'completed' }">완료한 일</a>
                </li>
            </ul>
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">완료한 일 지우기</button>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'FooterComponent',
    props: {
        footer: {
            type: String
        }
    }
}
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