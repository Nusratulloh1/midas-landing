<template>
    <section data-bg="#F6F6F6" four="#F6F6F6" class=" py-5 md:py-20 section">
        <div class="text-center zooom">
            <p class=" font-stapel text-[#8C8C8C] text-xl md:text-[32px] font-light">
                Introducing Spaces
            </p>
            <h4 class=" text-[32px] md:text-[64px] font-medium font-stapel mt-3">
                Manage your transactions in 3 modes:
            </h4>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 mt-11 zoom">
            <div class="serving">
                <h6>
                    Default
                </h6>
                <div>
                    <img :data-src="sdefault" class="lazyload" alt="sdefault">
                </div>
                <p>
                    Default Space, track all your <br class=" hidden md:block"> finances in one app
                </p>
            </div>
            <div class="serving second">
                <h6>
                    Savings
                </h6>
                <div>
                    <img :data-src="ssaving" class="lazyload" alt="ssaving">

                </div>
                <p>
                    Savings Space, limit your spendings <br class=" hidden md:block"> with Money Game, to save more money
                </p>
            </div>
            <div class="serving third">
                <h6>
                    Budget
                </h6>
                <div>
                    <img :data-src="sbudget" class="lazyload" alt="sbudget">
                </div>
                <p>
                    Budget Space, create budgets and <br class=" hidden md:block"> manage your planned costs
                </p>
            </div>
        </div>
        <div class="container mx-auto mt-16 zoom">
            <div class="cards flex flex-col md:flex-row items-center gap-10 md:gap-4 justify-center">
                <div @click="$emit('send')" class="card !pr-2" v-motion-slide-visible-once-bottom>
                    <h5>
                        Set multiple budgets with ease
                    </h5>
                    <div>
                        <img :data-src="budget" class="lazyload" alt="budget">
                        <MBudgetAnimeIcon></MBudgetAnimeIcon>
                    </div>
                    <p>
                        Set up diverse budgets with automatic start date recognition and integrated savings for a
                        streamlined experience
                    </p>
                </div>
                <div @click="$emit('send')" class="card second" v-motion-slide-visible-once-bottom>
                    <h5>
                        Unite in shared spaces
                    </h5>
                    <div>
                        <img :data-src="shared" class="lazyload" alt="shared">
                        <MSharedAnimeIcon></MSharedAnimeIcon>
                    </div>
                    <p>
                        Collaborate and save: Dive into shared Spaces for collective budget planning and synchronized
                        tracking.
                    </p>
                </div>
            </div>
            <div class=" hidden md:flex justify-center mt-24">
                <button class="text-[#343330] hover:text-[#CBE8CA] animate-bounce">
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M33.7411 24.5536L21.9286 36.3661C21.8067 36.4881 21.6619 36.5849 21.5026 36.651C21.3433 36.717 21.1725 36.751 21 36.751C20.8275 36.751 20.6567 36.717 20.4974 36.651C20.3381 36.5849 20.1933 36.4881 20.0714 36.3661L8.25891 24.5536C8.01263 24.3073 7.87427 23.9733 7.87427 23.625C7.87427 23.2767 8.01263 22.9427 8.25891 22.6964C8.50518 22.4501 8.83921 22.3118 9.1875 22.3118C9.53579 22.3118 9.86982 22.4501 10.1161 22.6964L19.6875 32.2695V6.5625C19.6875 6.2144 19.8258 5.88056 20.0719 5.63442C20.3181 5.38828 20.6519 5.25 21 5.25C21.3481 5.25 21.6819 5.38828 21.9281 5.63442C22.1742 5.88056 22.3125 6.2144 22.3125 6.5625V32.2695L31.8839 22.6964C32.1302 22.4501 32.4642 22.3118 32.8125 22.3118C33.1608 22.3118 33.4948 22.4501 33.7411 22.6964C33.9874 22.9427 34.1257 23.2767 34.1257 23.625C34.1257 23.9733 33.9874 24.3073 33.7411 24.5536Z" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>
  
<script lang="ts" setup>
import { MBudgetAnimeIcon, MSharedAnimeIcon } from '../icons';
import sdefault from "@/assets/images/icons/sdefault.svg"
import ssaving from "@/assets/images/icons/ssaving.svg"
import sbudget from "@/assets/images/icons/sbudget.svg"
import budget from "@/assets/images/icons/budget.svg"
import shared from "@/assets/images/icons/shared.svg"


</script>
<style lang="scss" scoped>
.serving {
    padding: 40px 0px;
    text-align: center;
    background: var(--secondary-50, #E8E8E8);
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h6 {
        color: var(--secondary-400, #666);
        text-align: center;
        font-family: 'Stapel';
        font-size: 30px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    p {
        color: var(--secondary-500-main, #404040);
        font-family: 'Stapel';
        font-size: 18px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    img {
        margin: auto;
    }

    &.second {
        background: var(--primary-200, #EAF6EA);

        h6 {
            color: #7A8B79;
        }
    }

    &.third {
        background: var(--secondary-700, #262626);

        h6 {
            color: #FAFAFA;
        }

        p {
            color: #D9D9D9;
        }
    }

}

.card {
    border-radius: 32px;
    background: var(--secondary-700, #262626);
    padding: 46px 30px;
    width: 543px;
    height: 535px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .5s ease-out all;

    h5 {
        color: var(--system-white-blocks-elements, #FFF);
        font-family: 'Stapel';
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    p {
        color: var(--secondary-200, #B3B3B3);
        font-family: 'Gilroy';
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    svg {
        display: none;
    }

    img,
    svg {
        margin: auto;
    }

    &.second {
        background: var(--system-white-blocks-elements, #FFF);

        h5,
        p {
            color: #0D0D0D;
        }
    }

    &:hover {
        svg {
            display: block;
        }

        img {
            display: none;
        }

        margin-top: -50px;
        cursor: pointer;
        box-shadow: 0px 12px 30px 0px rgba(0, 0, 0, 0.2);
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }
}

@media (max-width: 768px) {
    .serving {
        height: 400px;
        padding: 32px 16px;

        h6 {
            font-size: 20px;
        }

        p {
            text-align: start;
            font-size: 16px;
        }

        img {
            height: 148px;
        }
    }

    .card {
        width: 100%;
        height: 379px;
        padding: 24px 16px;
        transition: .2s ease-out all;

        h5 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }

        img,
        svg {
            height: 170.687px;
        }

        &:hover {
            margin-top: -10px;

            svg {
                display: none;
            }

            img {
                display: block;
            }
        }
    }
}
</style>