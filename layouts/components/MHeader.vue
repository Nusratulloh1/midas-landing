<template>
    <header class="w-full absolute">
        <nav class=" py-5 w-full">
            <div class="flex items-center justify-between max-w-screen-2xl mx-auto">
                <div class="flex items-center gap-8">
                    <nuxt-link to="/">
                        <MLogo :iconColor="route.path === '/' ? '#0D0D0D' : '#CBE8CA'"
                            :text-color="route.path === '/' ? '#23262F' : '#fff'"></MLogo>
                    </nuxt-link>
                    <ul class="flex items-center gap-8 text-[#404040] text-base font-medium font-gilroy pt-1">
                        <li class="parent" v-for="link in links" :key="link.id">
                            <nuxt-link class=" cursor-pointer" :to="link.to">{{ link.title }}</nuxt-link>
                            <div class="dropdown" v-if="link.children">
                                <ul class="flex flex-col gap-6">
                                    <li class="item" v-for="child in link.children" :key="child.id">
                                        <img :src="child.icon" alt="icon">
                                        <template v-if="child.local">
                                            <nuxt-link :to="child.to">{{ child.title }}</nuxt-link>
                                        </template>
                                        <template v-else>
                                            <a :href="child.to">{{ child.title }}</a>
                                        </template>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <button
                    class=" font-semibold h-12 px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy">
                    Request early access
                </button>
            </div>
        </nav>
    </header>
</template>
<script lang="ts" setup>
import { MLogo } from '../../components/icons'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const headRef: any = ref(null); // obtain the reference
const links = ref([
    {
        id: 1,
        title: 'FAQs',
        to: "/faq",
        local: true,
    },
    {
        id: 2,
        title: 'Community',
        to: "",
        local: true,
        children: [
            {
                id: 1,
                title: `Product Hunt`,
                to: "#",
                local: false,
                icon: new URL('@/assets/images/icons/product-hunt.svg', import.meta.url).href
            },
            {
                id: 2,
                title: 'Reddit',
                to: "#",
                local: false,
                icon: new URL('@/assets/images/icons/reddit.svg', import.meta.url).href
            },
            {
                id: 3,
                title: `Slack`,
                to: "#",
                local: false,
                icon: new URL('@/assets/images/icons/slack.svg', import.meta.url).href
            },
            {
                id: 4,
                title: 'Medium',
                to: "#",
                local: false,
                icon: new URL('@/assets/images/icons/medium.svg', import.meta.url).href
            },
        ]
    },
    {
        id: 3,
        title: 'About us',
        to: "/about",
        local: true,
    }
])
onMounted(() => {
    if (headRef.value) {
        window.addEventListener("scroll", () => {
            var curr = window.pageYOffset;
            if (curr === 0) {
                headRef.value?.classList.remove("scrolled");
            }
            else {
                headRef.value?.classList.add("scrolled");
            }
        });
    }
});
</script>
<style lang="scss" scoped>
.parent {
    display: flex;
    justify-content: center;

    .dropdown {
        position: absolute;
        z-index: 999;
        display: block;
        visibility: hidden;
        opacity: 0;
        -webkit-transform: translateY(20px);
        -ms-transform: translateY(20px);
        transform: translateY(20px);
        -webkit-transition: all 0.3s ease-in;
        -o-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        border-radius: 12px;
        border: 1px solid var(--gray-200, #EAECF0);
        background: var(--system-white-blocks-elements, #FFF);
        box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);
        width: 339px;
        padding: 24px;
        margin-top: 30px;

        .item {
            display: flex;
            align-items: center;
            gap: 16px;

            a {
                color: var(--secondary-900, #0D0D0D);
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    &:hover {
        .dropdown {
            -webkit-transform: scaleY(1);
            -ms-transform: scaleY(1);
            transform: scaleY(1);
            opacity: 1;
            visibility: visible;
        }
    }
}

.router-link-active {
    color: #E8E8E8 !important;
}
</style>