<template>
    <div class="zoom">
        <div class="bg-[#0D0D0D] pt-[128px] h-[424px] header">
            <div class="container mx-auto">
                <img src="@/assets/images/icons/bold.svg" class="w-[52px] md:w-auto mx-auto" alt="bold">
                <h2>
                    FAQs
                </h2>
                <p>
                    Everything you need to know about the product
                </p>
            </div>
        </div>
        <section class=" py-8 md:py-16">
            <div class="container mx-auto">
                <!-- <h4 class=" font-medium font-stapel text-[40px] leading-[44px] tracking-[-0.8px] text-center">
                    Frequently asked questions
                </h4> -->
                <div class="collapses">
                    <collapse class=" collaps" v-for="(item, i) in questions" :key="item.id">
                        <header class="head">
                            <h6>
                                {{ item.title }}
                            </h6>
                            <button @click="toggleExpand(i, item)">
                                <p v-if="item.isExpand">-</p>
                                <p v-else>+</p>
                            </button>
                        </header>

                        <body class="body" :id="`content${item.id}`" :style="item.isExpand
                            ? `height: ${item.computedHeight}; padding: 8px 0px;`
                            : 'height: 0'
                            ">
                            <p>
                                {{ item.content }}
                            </p>
                        </body>
                    </collapse>
                </div>
            </div>
        </section>
        <section class=" pt-8 pb-16">
            <div class="container mx-auto">
                <img src="@/assets/images/icons/question.svg" class="mx-auto" alt="question"
                    v-motion-slide-visible-once-bottom>
                <h4 class=" text-lg md:text-2xl font-stapel md:leading-[44px] md:tracking-[-0.8px] text-center font-medium mt-8"
                    v-motion-slide-visible-once-bottom>
                    Still have questions?
                </h4>
                <p class="mt-2 text-base md:text-lg font-gilroy text-[#475467] text-center" v-motion-slide-visible-once-bottom>
                    Can’t find the answer you’re looking for? Please send the request to our friendly team.
                </p>
                <div class="flex items-center justify-center mt-8" v-motion-slide-visible-once-bottom>
                    <button
                        class=" font-semibold h-12 md:h-14 px-6 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-gilroy mx-auto">
                        Get in touch
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const content = ref(null);
const questions = ref([
    {
        id: 1,
        title: "How do I set up my account on the Midas app?",
        content: "After downloading the app, follow the on-screen instructions. You'll be guided through the setup process, including linking your bank account if desired.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 2,
        title: "Is midas app completely free?",
        content: "Absolutely everything in our application is free, our goal is to help and teach you, how to save your money, the only thing you can leave us tips for our work done, so that we develop new solutions for you ;)",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 3,
        title: "How does the app help me save money?",
        content: "Midas app's unique feature, Money Game, gamifies the saving process, encouraging you to save more. Additionally, the app provides insights into your spending habits, helping you identify areas to cut back.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 4,
        title: "What is Money Game?",
        content: "Money Game is a unique feature of the Midas app that gamifies the savings process. It sets challenges and limits to help you save more effectively, turning financial management into a fun and rewarding experience.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 5,
        title: "Why is there no integration with banks?",
        content: `Our main goal is to test the hypothesis that people are interested in saving money for their own purposes. Moreover, we sincerely believe that entering each expense manually will encourage you to more carefully track and understand how you spend your money.P.S If people are really interested, we will establish integration with banks.`,
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 6,
        title: "Are the savings in the app real money that I can withdraw?",
        content: "No, the savings displayed in the app are for analytical and tracking purposes only. They are not real assets that you can withdraw or use for transactions outside of the app. The app serves as a financial management tool to help you understand and improve your spending habits, but it does not hold or manage real funds.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 7,
        title: "What is Spaces?",
        content: "Spaces is a versatile feature in our app that allows you to manage your finances in a more organized manner. You can switch between Default, Savings, and Budget modes, as well as set up specific budgets for different needs. It's your all-in-one place.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 8,
        title: "Can I set up multiple budgets within the app?",
        content: "Yes, the app allows you to create and manage multiple budgets, catering to different needs like groceries, entertainment, and more.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 9,
        title: "How often is my financial data updated in the app?",
        content: "If you've linked your bank account, the app updates in real-time with every transaction. Manual entries are updated as you input them.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 10,
        title: "Are there any hidden fees or charges?",
        content: "No, the Midas app is transparent about any costs. While the basic version is free, there might be premium features available for a fee.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 11,
        title: "What if I encounter a problem or bug within the app?",
        content: "We have a dedicated support team ready to assist. Navigate to the 'Help & Support' section in the app, and we'll guide you from there.",
        isExpand: false,
        computedHeight: 0,
    },
    {
        id: 12,
        title: "How does Midas handle my personal data?",
        content: "Your privacy is paramount to us. We employ top-tier encryption and security practices to ensure your data remains confidential. We never sell your data to third parties.",
        isExpand: false,
        computedHeight: 0,
    },
])
const toggleExpand = (i) => {
    // questions.value.forEach((acc, curr) => {
    //     acc.isExpand = false
    // })
    questions.value[i].isExpand = !questions.value[i].isExpand;
};
const getComputedHeight = () => {
    questions.value.forEach((item) => {
        var elem = document.getElementById("content" + item.id);
        if (elem !== null) {
            var content = [elem][0];

            content.style.height = "auto";
            content.style.position = "absolute";
            content.style.visibility = "hidden";
            content.style.display = "block";
            var height = getComputedStyle(content).height;
            item.computedHeight = parseInt(height);

            content.style.height = 0;
            content.style.position = null;
            content.style.visibility = null;
            content.style.display = null;
        }

    });
};
onMounted(() => {
    setTimeout(() => {
        getComputedHeight();
    }, 1000);
})
</script>
<style scoped lang="scss">
.header {
    // display: flex;
    // align-items: center;

    h2 {
        color: var(--system-white-blocks-elements, #FFF);
        text-align: center;
        font-family: 'Stapel';
        font-size: 72px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-top: 16px;
    }

    p {
        color: var(--gray-200, #EAECF0);
        text-align: center;
        font-family: 'Gilroy';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        margin-top: 20px;
        /* 150% */
    }
}

.collapses {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .collaps {
        padding-top: 24px;
        border-top: 1px solid var(--gray-200, #EAECF0);
        overflow: hidden;

        &:first-child {
            border: none;
        }

        .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            // margin-bottom: 10px;

            h6 {
                color: var(--gray-900, #101828);
                font-family: Gilroy;
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 28px;
                width: 90%;
            }

            button {
                border: 2px solid #98A2B3;
                width: 24px;
                height: 24px;
                border-radius: 99px;
                display: flex;
                justify-content: center;
                align-items: center;

                p {
                    color: #98A2B3;
                    font-size: 20px;
                    margin-bottom: 1.5px;
                }

            }
        }

        .body {
            transition: 250ms ease-out;

            p {
                color: var(--gray-600, #475467);
                font-family: Gilroy;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                /* 150% */
            }
        }
    }
}

@media (max-width: 768px) {
    .header {
        h2 {
            font-size: 40px;
        }

        p {
            font-size: 16px;
            line-height: normal;
        }
    }

    .collapses {
        gap: 24px;

        .head {
            h6 {
                font-size: 16px !important;
                line-height: normal;
            }

            button {
                p {
                    font-size: 16px !important;
                }
            }
        }

        .body {
            p {
                font-size: 14px !important;
            }
        }
    }
}</style>