<template>
    <div>
        <div v-if="showModal" class="overlay"></div>
        <div class="modal-mask zoom" :class="{ 'show': showModal }">
            <div class="modal-wrapper">
                <div class="modal-container relative overflow-hidden" ref="anim2">
                    <button @click="modal.hideModal()" class="float-right m-4 md:m-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#667085" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="modal-header">
                        <h6 :class="step == 2 ? 'text-center' : ''">
                            {{ step == 1 ? 'Get early access' : 'Thank you!' }}
                        </h6>
                    </div>
                    <form class="modal-body" @submit.prevent="Submit" v-if="step == 1" ref="anim">
                        <div class="form-item">
                            <label>Who are you?*</label>
                            <select label="Please select" aria-placeholder="Please select" v-model="form.type" required>
                                <option label="Please select" value="" selected disabled hidden>Please select</option>
                                <option value="investor">Investor</option>
                                <option value="normal_user">User</option>
                            </select>
                            <span>
                                Please choose either you’re an investor or normal user
                            </span>
                        </div>
                        <div class="form-item">
                            <label>Name*</label>
                            <input placeholder="What is your name?" v-model="form.name" required />
                        </div>
                        <div class="form-item">
                            <label>Email*</label>
                            <input placeholder="Enter your email address" type="email" v-model="form.email" required />
                        </div>
                        <div class="form-item">
                            <label>Location*</label>
                            <select placeholder="Please select" v-model="form.country_id" required>
                                <option label="Please select" value="" selected disabled hidden>Please select</option>
                                <option :value="county?.id" v-for="county in countryList" :key="county.id">
                                    {{ county?.name }}</option>
                            </select>
                            <span>
                                Location only used to determine early access availability in your country.
                            </span>
                        </div>
                        <!-- <Transition name="fade"> -->
                        <div class="form-item" v-if="form.type == 'investor'">
                            <label>Suggestion*</label>
                            <textarea v-model="form.suggestion_text" required
                                placeholder="e.g. I've come across your application and am genuinely impressed with its potential. I'm interested in exploring investment opportunities. Could we schedule a discussion?" />

                        </div>
                        <p v-if="errorText" class=" text-sm text-red-600">
                            {{ errorText }}
                        </p>
                        <!-- </Transition> -->
                        <button type="submit">
                            Get early access
                        </button>
                    </form>
                    <div v-else class="success">
                        <div class=" p-4 md:p-6 pt-0">
                            <img src="@/assets/images/icons/tor.svg" class=" absolute top-0 left-0" alt="tor">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M15.4535 0.333069H38.5735C47.6135 0.333069 53.6668 6.67974 53.6668 16.1197V37.9091C53.6668 47.3197 47.6135 53.6664 38.5735 53.6664H15.4535C6.4135 53.6664 0.333496 47.3197 0.333496 37.9091V16.1197C0.333496 6.67974 6.4135 0.333069 15.4535 0.333069ZM25.4802 34.9731L38.1468 22.3064C39.0535 21.3997 39.0535 19.9331 38.1468 18.9997C37.2402 18.0931 35.7468 18.0931 34.8402 18.9997L23.8268 30.0131L19.1602 25.3464C18.2535 24.4397 16.7602 24.4397 15.8535 25.3464C14.9468 26.2531 14.9468 27.7197 15.8535 28.6531L22.2002 34.9731C22.6535 35.4264 23.2402 35.6397 23.8268 35.6397C24.4402 35.6397 25.0268 35.4264 25.4802 34.9731Z"
                                    fill="#5BA25A" />
                            </svg>
                            <p class="email">
                                This reservation is held for {{ form.email }}. <button @click="step = 1">
                                    Is this not you?
                                </button>
                            </p>
                        </div>
                        <hr />
                        <div class="p-4 md:p-6 mt-4">
                            <img :src="AvatarSvg" class="h-[56px]" alt="avatars">
                            <h5>
                                {{ count }} People ahead of you
                            </h5>
                            <p>
                                Get early access for referring your friends. The more friends that join, the sooner
                                you’ll
                                get access
                            </p>
                            <div
                                class="flex justify-center items-center gap-5 md:gap-8 mt-4 md:mt-8 mb-2 md:mb-4 external-links">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img class=" w-16 h-16" src="@/assets/images/icons/facebook.svg" alt="facebook">
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img class=" w-16 h-16" src="@/assets/images/icons/twitter.svg" alt="twitter">
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img class=" w-16 h-16" src="@/assets/images/icons/linkedin.svg" alt="linkedin">
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img class=" w-16 h-16" src="@/assets/images/icons/email.svg" alt="email">
                                </a>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    <img class=" w-16 h-16" src="@/assets/images/icons/reddit.svg" alt="reddit">
                                </a>
                            </div>
                            <p class=" my-2 md:my-4">
                                Or share this unique link:
                            </p>
                            <div class="link mb-7 md:mb-14">
                                <input v-model="copyUrl" type="text">
                                <button @click="copy">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_77_20449)">
                                            <path
                                                d="M16.3046 7.8643H9.10183C8.21784 7.8643 7.50122 8.58092 7.50122 9.46491V16.6677C7.50122 17.5516 8.21784 18.2683 9.10183 18.2683H16.3046C17.1886 18.2683 17.9052 17.5516 17.9052 16.6677V9.46491C17.9052 8.58092 17.1886 7.8643 16.3046 7.8643Z"
                                                stroke="black" stroke-width="1.60061" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M4.29984 12.6661H3.49954C3.07503 12.6661 2.66791 12.4975 2.36773 12.1973C2.06756 11.8971 1.89893 11.49 1.89893 11.0655V3.86277C1.89893 3.43826 2.06756 3.03114 2.36773 2.73097C2.66791 2.4308 3.07503 2.26216 3.49954 2.26216H10.7023C11.1268 2.26216 11.5339 2.4308 11.8341 2.73097C12.1343 3.03114 12.3029 3.43826 12.3029 3.86277V4.66308"
                                                stroke="black" stroke-width="1.60061" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_77_20449">
                                                <rect width="19.2073" height="19.2073" fill="white"
                                                    transform="translate(0.29834 0.661545)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                                <span v-if="copied">
                                    Copied
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useModal } from "@/composables";
import { ref, reactive, computed } from 'vue'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import AvatarSvg from "@/assets/images/icons/avatars.svg"
import { useRoute } from 'vue-router'
// import useClipboard from 'vue-clipboard3'
const modal = useModal();
const step = ref(1)
const copied = ref(false)
const count = ref(0)
const route = useRoute()
const showModal = computed(() => modal.show.value);
const form = reactive({
    type: '',
    email: '',
    name: '',
    country_id: '',
    suggestion_text: '',
    reffered_by: route.query.reffer
})
const errorText = ref('')
const copyUrl = ref('https://midasmoney.io/reffer')
const { data: countryList } = await useFetch('http://tangaapp.com/api/country/list', {
    method: 'post'
})
const [anim] = useAutoAnimate()
const [anim2] = useAutoAnimate()
const copy = async () => {
    try {
        // navigator.clipboard.writeText(copyUrl.value)
        let textarea = document.createElement("textarea")
        textarea.value = copyUrl.value
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        document.execCommand("copy")
        document.body.removeChild(textarea)
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 1000);
        console.log('Copied to clipboard')
    } catch (e) {
        console.error(e)
    }
}
const Submit = async () => {
    if (form.suggestion_text == '') {
        form.suggestion_text = 'no'
    }
    const { error, data: responseData } = await useFetch('http://tangaapp.com/api/auth/get-early-access', {
        method: 'post',
        body: {
            ...form
        }
    })
    if (responseData.value?.length) {
        copyUrl.value = `http://midasmoney.io/?reffer=${responseData.value?.[0].referral_id}`
        count.value = responseData.value?.[0].count + 400
        step.value = 2
    }
    else {
        errorText.value = error.value?.data?.message
        console.log(error.value);
    }
}
</script>
<style lang="scss" scoped>
.overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    // transition: all 3s ease;
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: 9999;
}

.modal-mask {
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    z-index: -1;
    display: table;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    transform: scale(0.5);

    &.show {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        z-index: 99998;
    }
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    z-index: 9999;
    width: 640px;
    margin: 0px auto;
    // padding: 24px;
    border-radius: 24px;
    background: var(--base-white, #FFF);
    box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);
    position: relative;


    .modal-header {
        padding: 24px;

        h6 {
            color: #000;
            font-family: Gilroy;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }

    .modal-body {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        transition: opacity 0.3s ease;

        .form-item {
            display: flex;
            flex-direction: column;
            gap: 4px;

            label {
                color: var(--secondary-500-main, #404040);
                font-family: 'Gilroy';
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
                /* 142.857% */
            }

            textarea,
            select,
            input {
                border-radius: 8px;
                border: 1px solid var(--gray-300, #D0D5DD);
                background: var(--base-white, #FFF);
                box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
                height: 44px;
                width: 100%;
                padding: 10px;
                color: var(--gray-900, #101828);
                font-family: Gilroy;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
                outline: none;
                margin-bottom: 4px;

                &:focus {
                    border-color: #92E490;
                }

                /* 150% */
            }

            span {
                color: var(--gray-600, #475467);
                font-family: Gilroy;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
                /* 142.857% */
            }

            select {
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%23667085' stroke-width='1.66667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
                background-repeat: no-repeat;
                background-position: right 0.7rem top 50%;
            }

            textarea {
                min-height: 104px;
                max-height: 300px;
            }
        }

        button {
            display: flex;
            padding: 16px 28px;
            justify-content: center;
            align-items: center;
            border-radius: 118px;
            border: 1px solid var(--primary-500-main, #92E490);
            background: var(--primary-500-main, #92E490);
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
            color: var(--secondary-900, #0D0D0D);
            font-family: Gilroy;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
            width: 100%;
            height: 60px;
            margin-top: 16px;

            &:hover {
                opacity: 0.8;
            }

            /* 155.556% */
        }
    }

    .success {
        transition: all 0.3s ease;

        img {
            margin: auto;
        }

        svg {
            margin: auto;
        }

        .email {
            font-size: 20px;
            line-height: 22px;
            margin-top: 15px;
            margin-bottom: 24px;

            button {
                color: var(--primary-600, #5BA25A);
                font-feature-settings: 'clig' off, 'liga' off;
                font-weight: 700;
                text-decoration-line: underline;
            }
        }

        p {
            color: var(--gray-600, #475467);
            text-align: center;
            font-family: Gilroy;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 20px;
            /* 125% */
        }

        h5 {
            color: var(--secondary-800, #1A1A1A);
            text-align: center;
            font-family: Stapel;
            font-size: 36px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-top: 24px;
        }

        .link {
            display: flex;
            align-items: center;

            input {
                position: relative;
                border-radius: 7.683px;
                border: 0.96px solid rgba(86, 103, 137, 0.26);
                background: #F5F7FB;
                color: var(--black-black-100, #000);
                font-family: Gilroy;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                padding: 0px 0px 0px 15.366px;
                line-height: 20.168px;
                outline: none;
                height: 46px;
                width: 100%;

                &:focus {
                    border-color: #92E490;
                }
            }

            button {
                padding: 12px;
                border-radius: 0px 7.683px 7.683px 0px;
                border: 1px solid #CED2D9;
                background: #FFF;
                right: 24px;
                position: absolute;

                &:hover {
                    background-color: #92E490;
                }
            }

            span {
                transition: all 0.3s ease;
                right: 24px;
                bottom: 50px;
                position: absolute;
                font-size: 12px;
                padding: 4px;
                background-color: #A1BAA1;
                color: white;
                border-radius: 10px;
            }
        }
    }
}

@media (max-width: 1024px) {
    .modal-container {
        width: 90%;

        .modal-header {
            padding: 16px;

            h6 {
                font-size: 26px;
            }
        }

        .modal-body {
            padding: 16px;
            gap: 10px;
            width: 100%;

            button {
                padding: 8px 14px;
            }

            .form-item {

                label {
                    font-size: 12px;
                    line-height: normal;
                    /* 142.857% */
                }

                textarea,
                select,
                input {
                    font-size: 14px;
                    line-height: normal;
                    height: 40px;

                    /* 150% */
                }

                span {
                    font-size: 12px;
                    line-height: normal;
                    /* 142.857% */
                }
            }
        }

        .success {

            img {
                width: 80px;
            }

            svg {
                width: 40px;
            }

            .email {
                font-size: 14px;
                line-height: normal;
                margin-top: 5px;
                margin-bottom: 5px;
            }

            p {
                font-size: 12px;
                line-height: normal;
                /* 125% */
            }

            h5 {
                font-size: 24px;
                margin-top: 14px;
            }

            .link {

                input {
                    font-size: 12px;
                    height: 40px;
                }

                button {
                    padding: 8.5px;
                    right: 14px;
                }

                span {
                    right: 20px;
                    bottom: 10px;
                    font-size: 12px;
                    padding: 4px;
                }
            }
        }

    }
}
</style>