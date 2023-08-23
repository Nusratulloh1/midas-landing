<template>
  <div>
    <section class=" pt-28 top-section h-[883px] relative overflow-hidden">
      <div class="container mx-auto">
        <h1>
          Save money,
          <br>
          with money, for money
        </h1>
        <p>
          We aim to shift your prism of association with savings, by developing our solutions,
          and turn saving from a necessity, into an ingrained way of your life.
        </p>
        <div class="flex justify-center mt-9">
          <button class="  h-16 px-8 bg-[#CBE8CA] rounded-2xl hover:bg-[#d2f0d2] transition-all font-stapel">
            Request early access
          </button>
        </div>
      </div>
      <button class=" absolute right-[49%] bottom-11 text-[#343330] hover:text-[#CBE8CA] animate-bounce">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M33.7411 24.5536L21.9286 36.3661C21.8067 36.4881 21.6619 36.5849 21.5026 36.651C21.3433 36.717 21.1725 36.751 21 36.751C20.8275 36.751 20.6567 36.717 20.4974 36.651C20.3381 36.5849 20.1933 36.4881 20.0714 36.3661L8.25891 24.5536C8.01263 24.3073 7.87427 23.9733 7.87427 23.625C7.87427 23.2767 8.01263 22.9427 8.25891 22.6964C8.50518 22.4501 8.83921 22.3118 9.1875 22.3118C9.53579 22.3118 9.86982 22.4501 10.1161 22.6964L19.6875 32.2695V6.5625C19.6875 6.2144 19.8258 5.88056 20.0719 5.63442C20.3181 5.38828 20.6519 5.25 21 5.25C21.3481 5.25 21.6819 5.38828 21.9281 5.63442C22.1742 5.88056 22.3125 6.2144 22.3125 6.5625V32.2695L31.8839 22.6964C32.1302 22.4501 32.4642 22.3118 32.8125 22.3118C33.1608 22.3118 33.4948 22.4501 33.7411 22.6964C33.9874 22.9427 34.1257 23.2767 34.1257 23.625C34.1257 23.9733 33.9874 24.3073 33.7411 24.5536Z" />
        </svg>
      </button>
      <MTargetIcon class="left-2 top-32 absolute"></MTargetIcon>
      <MPieIcon class="right-7 top-[106px] absolute"></MPieIcon>
      <MDiagramIcon class=" left-1 bottom-0 absolute"></MDiagramIcon>
      <MBankIcon class=" right-9 bottom-0 absolute"></MBankIcon>
    </section>
    <section class=" pt-20 pb-10">
      <div class="container mx-auto">
        <div class="dark">
          <h3 class=" text-7xl font-medium  font-stapel leading-[normal]">
            Redefining Finance:
            <br>
            Dive into standout features
          </h3>
          <div class="content  pt-10 px-24 rounded-[32px] w-full my-10 h-[594px] flex items-center justify-between">
            <div>
              <h3 class=" text-7xl font-medium  font-stapel leading-[normal]">
                One-stop <br> Finance Hub
              </h3>
              <p class="mt-6 max-w-[512px] text-2xl font-gilroy leading-[normal]">
                Manage, track, and optimize all your financial activities seamlessly in one intuitive app.
              </p>
            </div>
            <div>
              <MPhoneIcon></MPhoneIcon>
            </div>
          </div>
        </div>
        <!-- <div class="anime flex bg-black !w-[1000px] !h-auto">
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen1" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen2" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen3" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen4" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen5" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen6" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen7" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen8" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen9" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen10" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen11" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen12" @ready="onReady" />
          <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen13" @ready="onReady" />
        </div> -->
        <div class="grid grid-cols-3 gap-4">
          <div class="advantage">
            <h5>
              Reach your <br> Financial Goals

            </h5>
            <div class="anime ">
              <Blottie ref="blottie" :loop="true" renderer="svg" :path="mishen" @ready="onReady" />
            </div>
            <p>
              Set your financial goals and let our app guide you, step by step, to make them a reality.
            </p>
          </div>
          <div class="advantage !bg-[#FAFAFA]">
            <h5 class="!text-[#0D0D0D]">
              Smart Analytics <br> Insights
            </h5>
            <div class="anime">
              <Blottie ref="blottie" :loop="true" renderer="svg" :path="diagram" @ready="onReady" />
            </div>
            <p class="!text-[#0D0D0D]">
              Dive into tailored transaction overviews, understand spending habits, and master finance easily.
            </p>
          </div>
          <div class="advantage">
            <h5>
              Personalize your Experience

            </h5>
            <div class="anime">
              <Blottie ref="blottie" :loop="true" renderer="svg" :path="setting" @ready="onReady" />
            </div>
            <p>
              Navigate with multi-currency support, craft your categories, and receive notifications that truly resonate.
            </p>
          </div>
        </div>
        <!-- <div class=" bg-white px-24 rounded-[32px] w-full my-10 h-[594px] flex items-center justify-between">
          <div>
            <h3 class=" text-[64px] font-medium text-[#0D0D0D] font-stapel">
              Bank sync
            </h3>
            <p class="mt-3 max-w-[336px] text-xl font-gilroy">
              Instantly connect with top banks for real-time financial updates.
            </p>
          </div>
          <div class=" w-[451px]">
            <Blottie ref="blottie" :loop="true" renderer="svg" :path="banka" @ready="onReady" />
          </div>
        </div> -->
        <div class="flex justify-center mt-20">
          <button class=" text-[#343330] hover:text-[#CBE8CA] animate-bounce w-24 mx-auto">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.7411 24.5536L21.9286 36.3661C21.8067 36.4881 21.6619 36.5849 21.5026 36.651C21.3433 36.717 21.1725 36.751 21 36.751C20.8275 36.751 20.6567 36.717 20.4974 36.651C20.3381 36.5849 20.1933 36.4881 20.0714 36.3661L8.25891 24.5536C8.01263 24.3073 7.87427 23.9733 7.87427 23.625C7.87427 23.2767 8.01263 22.9427 8.25891 22.6964C8.50518 22.4501 8.83921 22.3118 9.1875 22.3118C9.53579 22.3118 9.86982 22.4501 10.1161 22.6964L19.6875 32.2695V6.5625C19.6875 6.2144 19.8258 5.88056 20.0719 5.63442C20.3181 5.38828 20.6519 5.25 21 5.25C21.3481 5.25 21.6819 5.38828 21.9281 5.63442C22.1742 5.88056 22.3125 6.2144 22.3125 6.5625V32.2695L31.8839 22.6964C32.1302 22.4501 32.4642 22.3118 32.8125 22.3118C33.1608 22.3118 33.4948 22.4501 33.7411 22.6964C33.9874 22.9427 34.1257 23.2767 34.1257 23.625C34.1257 23.9733 33.9874 24.3073 33.7411 24.5536Z"
                fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    <MoneySaving></MoneySaving>
    <Spaces></Spaces>
    <section class="  py-20">
      <div class="container mx-auto">
        <h3 class=" text-7xl font-medium text-white font-stapel">
          Our Testers loves Midas:
        </h3>
        <div class="reviews overflow-hidden">
          <div class="left flex gap-9 w-1/2 box-border overflow-hidden justify-end">
            <div class="flex flex-col gap-8 mt-[-20px]">
              <div class="box" v-for="rev in reviews" :key="rev.id">
                <p>
                  {{ rev.text }}
                </p>
                <div class="info">
                  <div class="avatar">
                    <img src="../assets/images/avatars/1.png" alt="avatar">
                  </div>
                  <h6>
                    {{ rev.name }}
                  </h6>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-8 mt-[-20px]">
              <div class="box" v-for="rev in reviews" :key="rev.id">
                <p>
                  {{ rev.text }}
                </p>
                <div class="info">
                  <div class="avatar">
                    <img src="../assets/images/avatars/1.png" alt="avatar">
                  </div>
                  <h6>
                    {{ rev.name }}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center w-[52%]">
            <div>
              <div class="flex items-center gap-4">
                <div class=" bg-[#A1BAA1] flex items-center rounded-[10px] py-2 px-4 gap-[6px]">
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                    v-for="i in 5" :key="i">
                    <path
                      d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                      fill="white" />
                  </svg>

                </div>
                <p class=" font-gilroy font-bold text-2xl">
                  4.9/5
                </p>
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#404040" />
                </svg>
                <p class=" font-gilroy text-[#8C8C8C] text-xl">
                  4,500+ reviews
                </p>
              </div>
              <h6 class=" font-medium text-2xl font-gilroy text-[#8C8C8C] my-6">
                Check other reviews here:
              </h6>
              <div class="flex items-center py-3 gap-4">
                <button>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="48" height="48" rx="24" fill="#F2F4F7" />
                    <path
                      d="M28 18.25C22.624 18.25 18.25 22.624 18.25 28C18.25 33.376 22.624 37.75 28 37.75C33.376 37.75 37.75 33.376 37.75 28C37.75 22.624 33.376 18.25 28 18.25ZM28 19.75C32.5487 19.75 36.25 23.4513 36.25 28C36.25 32.5487 32.5487 36.25 28 36.25C23.4513 36.25 19.75 32.5487 19.75 28C19.75 23.4513 23.4513 19.75 28 19.75ZM25.75 24.25V32.5H27.25V29.5H29.125C30.5732 29.5 31.75 28.3232 31.75 26.875C31.75 25.4268 30.5732 24.25 29.125 24.25H25.75ZM27.25 25.75H29.125C29.7452 25.75 30.25 26.2548 30.25 26.875C30.25 27.4952 29.7452 28 29.125 28H27.25V25.75Z"
                      fill="black" />
                    <rect x="4" y="4" width="48" height="48" rx="24" stroke="#F9FAFB" stroke-width="8" />
                  </svg>

                </button>
                <button>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="48" height="48" rx="24" fill="#F2F4F7" />
                    <path
                      d="M39.25 25.7499C39.2499 25.175 39.0846 24.6123 38.7737 24.1287C38.4629 23.6451 38.0197 23.2609 37.4968 23.022C36.9739 22.7831 36.3934 22.6994 35.8243 22.781C35.2552 22.8626 34.7216 23.1059 34.2869 23.4821C32.7166 22.6477 30.8406 22.1434 28.8813 22.0262L29.3678 19.104L31.0291 19.359C31.1133 19.883 31.3802 20.3604 31.7824 20.7067C32.1846 21.0531 32.6963 21.246 33.227 21.2516C33.7578 21.2571 34.2734 21.0749 34.6827 20.737C35.0921 20.3992 35.3688 19.9275 35.464 19.4053C35.5592 18.8832 35.4668 18.3442 35.203 17.8836C34.9392 17.423 34.5211 17.0705 34.0226 16.8883C33.5241 16.7062 32.9772 16.7062 32.4786 16.8883C31.9801 17.0703 31.5619 17.4228 31.2981 17.8834L28.8606 17.5084C28.6656 17.4783 28.4666 17.5263 28.3068 17.6419C28.1469 17.7576 28.039 17.9316 28.0066 18.1262L27.3625 22.0149C25.315 22.1031 23.3481 22.6131 21.7131 23.4821C21.116 22.9777 20.3457 22.7263 19.566 22.7813C18.7863 22.8363 18.0589 23.1935 17.5385 23.7767C17.0182 24.36 16.746 25.1233 16.78 25.9042C16.8139 26.6851 17.1513 27.4219 17.7203 27.9577C17.5745 28.4588 17.5003 28.9781 17.5 29.4999C17.5 31.5559 18.625 33.4702 20.6791 34.8896C22.645 36.2499 25.2447 36.9999 28 36.9999C30.7553 36.9999 33.355 36.2499 35.3209 34.8896C37.375 33.4702 38.5 31.5559 38.5 29.4999C38.4997 28.9781 38.4255 28.4588 38.2797 27.9577C38.5847 27.6763 38.8282 27.335 38.9952 26.9551C39.1622 26.5752 39.2489 26.1649 39.25 25.7499ZM33.25 18.2499C33.3983 18.2499 33.5433 18.2939 33.6667 18.3763C33.79 18.4587 33.8861 18.5759 33.9429 18.7129C33.9997 18.85 34.0145 19.0008 33.9856 19.1463C33.9567 19.2917 33.8852 19.4254 33.7803 19.5303C33.6754 19.6352 33.5418 19.7066 33.3963 19.7355C33.2508 19.7645 33.1 19.7496 32.963 19.6928C32.8259 19.6361 32.7088 19.5399 32.6264 19.4166C32.544 19.2933 32.5 19.1483 32.5 18.9999C32.5 18.801 32.579 18.6103 32.7197 18.4696C32.8603 18.329 33.0511 18.2499 33.25 18.2499ZM37.0122 27.0418C36.8561 27.1343 36.7388 27.2803 36.682 27.4527C36.6253 27.6251 36.633 27.8122 36.7038 27.9793C36.8986 28.4627 36.9991 28.9788 37 29.4999C37 31.0496 36.1009 32.5252 34.4688 33.6559C32.7503 34.8437 30.4534 35.4999 28 35.4999C25.5466 35.4999 23.2497 34.8437 21.5313 33.6559C19.8991 32.5252 19 31.0496 19 29.4999C19.0013 28.9805 19.1012 28.4661 19.2944 27.984C19.3653 27.8171 19.3733 27.6301 19.3169 27.4578C19.2605 27.2854 19.1436 27.1393 18.9878 27.0465C18.797 26.9328 18.6339 26.7781 18.5102 26.5936C18.3865 26.4091 18.3053 26.1995 18.2724 25.9798C18.2396 25.7601 18.256 25.5359 18.3203 25.3233C18.3847 25.1108 18.4955 24.9151 18.6447 24.7506C18.7939 24.586 18.9777 24.4567 19.183 24.3718C19.3883 24.287 19.6098 24.2488 19.8317 24.26C20.0535 24.2712 20.2701 24.3316 20.4657 24.4367C20.6614 24.5418 20.8313 24.689 20.9631 24.8677C21.0719 25.0172 21.2321 25.1212 21.413 25.1598C21.5938 25.1984 21.7825 25.1688 21.9428 25.0768L21.9766 25.0562C23.6359 24.0531 25.7734 23.4999 28 23.4999C30.2247 23.4999 32.3622 24.0531 34.0216 25.0562L34.0609 25.0796C34.2211 25.1698 34.4087 25.198 34.5883 25.1589C34.7678 25.1199 34.9268 25.0163 35.035 24.8677C35.166 24.6875 35.3356 24.5387 35.5313 24.4322C35.7271 24.3257 35.9441 24.2642 36.1666 24.252C36.3891 24.2399 36.6115 24.2775 36.8177 24.3621C37.0239 24.4467 37.2086 24.5762 37.3584 24.7411C37.5083 24.906 37.6195 25.1023 37.684 25.3156C37.7485 25.5289 37.7647 25.7539 37.7314 25.9742C37.698 26.1946 37.616 26.4047 37.4913 26.5894C37.3666 26.774 37.2023 26.9286 37.0103 27.0418H37.0122ZM24.25 29.4999C23.9533 29.4999 23.6633 29.412 23.4166 29.2471C23.17 29.0823 22.9777 28.8481 22.8642 28.574C22.7507 28.2999 22.7209 27.9983 22.7788 27.7073C22.8367 27.4163 22.9796 27.1491 23.1893 26.9393C23.3991 26.7295 23.6664 26.5866 23.9574 26.5288C24.2483 26.4709 24.5499 26.5006 24.824 26.6141C25.0981 26.7276 25.3324 26.9199 25.4972 27.1666C25.662 27.4133 25.75 27.7033 25.75 27.9999C25.75 28.3978 25.592 28.7793 25.3107 29.0606C25.0294 29.3419 24.6478 29.4999 24.25 29.4999ZM33.25 27.9999C33.25 28.2966 33.162 28.5866 32.9972 28.8333C32.8324 29.08 32.5981 29.2722 32.324 29.3858C32.0499 29.4993 31.7483 29.529 31.4574 29.4711C31.1664 29.4132 30.8991 29.2704 30.6893 29.0606C30.4796 28.8508 30.3367 28.5835 30.2788 28.2926C30.2209 28.0016 30.2507 27.7 30.3642 27.4259C30.4777 27.1518 30.67 26.9176 30.9166 26.7527C31.1633 26.5879 31.4533 26.4999 31.75 26.4999C32.1478 26.4999 32.5294 26.658 32.8107 26.9393C33.092 27.2206 33.25 27.6021 33.25 27.9999ZM31.6628 32.1484C31.709 32.2354 31.7376 32.3307 31.747 32.4288C31.7563 32.5269 31.7463 32.6259 31.7174 32.7201C31.6885 32.8143 31.6413 32.9018 31.5785 32.9778C31.5158 33.0538 31.4386 33.1166 31.3516 33.1627C30.3195 33.7112 29.1687 33.998 28 33.998C26.8313 33.998 25.6805 33.7112 24.6484 33.1627C24.5614 33.1166 24.4843 33.0537 24.4216 32.9778C24.3588 32.9018 24.3116 32.8142 24.2827 32.72C24.2538 32.6258 24.2438 32.5269 24.2531 32.4288C24.2625 32.3307 24.291 32.2354 24.3372 32.1484C24.3834 32.0613 24.4462 31.9842 24.5222 31.9215C24.5981 31.8587 24.6857 31.8116 24.7799 31.7827C24.8741 31.7538 24.9731 31.7437 25.0712 31.753C25.1692 31.7624 25.2645 31.791 25.3516 31.8371C26.167 32.2707 27.0765 32.4974 28 32.4974C28.9236 32.4974 29.833 32.2707 30.6484 31.8371C30.7355 31.7909 30.8308 31.7623 30.9289 31.753C31.0269 31.7436 31.1259 31.7536 31.2201 31.7826C31.3143 31.8115 31.4019 31.8586 31.4779 31.9214C31.5538 31.9842 31.6167 32.0613 31.6628 32.1484Z"
                      fill="#343330" />
                    <rect x="4" y="4" width="48" height="48" rx="24" stroke="#F9FAFB" stroke-width="8" />
                  </svg>

                </button>
                <button>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="48" height="48" rx="24" fill="#F2F4F7" />
                    <g clip-path="url(#clip0_0_22898)">
                      <path
                        d="M36.7309 28C37.2838 27.5068 37.6345 26.8264 37.7156 26.0899C37.7967 25.3535 37.6024 24.6131 37.1702 24.0113C36.7379 23.4096 36.0983 22.9891 35.3745 22.8308C34.6507 22.6725 33.894 22.7877 33.25 23.1541V21.25C33.2493 20.641 33.0633 20.0465 32.7166 19.5458C32.3699 19.045 31.8789 18.6616 31.3091 18.4466C30.7392 18.2316 30.1174 18.1951 29.5263 18.342C28.9352 18.4889 28.4029 18.8123 28 19.2691C27.5067 18.7163 26.8263 18.3655 26.0899 18.2844C25.3534 18.2033 24.613 18.3976 24.0113 18.8299C23.4095 19.2621 22.989 19.9017 22.8308 20.6255C22.6725 21.3493 22.7876 22.1061 23.1541 22.75H21.25C20.6409 22.7507 20.0465 22.9368 19.5457 23.2835C19.0449 23.6302 18.6616 24.1211 18.4465 24.691C18.2315 25.2608 18.195 25.8826 18.342 26.4737C18.4889 27.0648 18.8123 27.5972 19.2691 28C18.7162 28.4933 18.3655 29.1737 18.2844 29.9101C18.2033 30.6466 18.3976 31.387 18.8298 31.9888C19.2621 32.5905 19.9017 33.011 20.6255 33.1693C21.3493 33.3276 22.106 33.2124 22.75 32.846V34.75C22.7507 35.3591 22.9367 35.9536 23.2834 36.4543C23.6301 36.9551 24.1211 37.3385 24.6909 37.5535C25.2608 37.7685 25.8826 37.805 26.4737 37.6581C27.0648 37.5112 27.5971 37.1878 28 36.731C28.4933 37.2838 29.1737 37.6346 29.9101 37.7157C30.6465 37.7968 31.387 37.6025 31.9887 37.1702C32.5905 36.738 33.011 36.0984 33.1692 35.3746C33.3275 34.6508 33.2123 33.894 32.8459 33.25H34.75C35.3591 33.2494 35.9535 33.0633 36.4543 32.7166C36.9551 32.3699 37.3384 31.879 37.5535 31.3091C37.7685 30.7393 37.805 30.1175 37.658 29.5264C37.5111 28.9353 37.1877 28.4029 36.7309 28ZM22.75 30.25C22.75 30.5467 22.662 30.8367 22.4972 31.0834C22.3324 31.3301 22.0981 31.5223 21.824 31.6359C21.5499 31.7494 21.2483 31.7791 20.9574 31.7212C20.6664 31.6633 20.3991 31.5205 20.1893 31.3107C19.9796 31.1009 19.8367 30.8337 19.7788 30.5427C19.7209 30.2517 19.7506 29.9501 19.8642 29.676C19.9777 29.4019 20.17 29.1677 20.4166 29.0028C20.6633 28.838 20.9533 28.75 21.25 28.75H22.75V30.25ZM27.25 34.75C27.25 35.1479 27.092 35.5294 26.8107 35.8107C26.5294 36.092 26.1478 36.25 25.75 36.25C25.3522 36.25 24.9706 36.092 24.6893 35.8107C24.408 35.5294 24.25 35.1479 24.25 34.75V30.25C24.25 29.8522 24.408 29.4707 24.6893 29.1894C24.9706 28.9081 25.3522 28.75 25.75 28.75H27.25V34.75ZM27.25 27.25H21.25C20.8522 27.25 20.4706 27.092 20.1893 26.8107C19.908 26.5294 19.75 26.1479 19.75 25.75C19.75 25.3522 19.908 24.9707 20.1893 24.6894C20.4706 24.4081 20.8522 24.25 21.25 24.25H25.75C26.1478 24.25 26.5294 24.4081 26.8107 24.6894C27.092 24.9707 27.25 25.3522 27.25 25.75V27.25ZM27.25 22.75H25.75C25.4533 22.75 25.1633 22.6621 24.9166 22.4972C24.67 22.3324 24.4777 22.0982 24.3642 21.8241C24.2506 21.55 24.2209 21.2484 24.2788 20.9574C24.3367 20.6664 24.4796 20.3992 24.6893 20.1894C24.8991 19.9796 25.1664 19.8367 25.4574 19.7789C25.7483 19.721 26.0499 19.7507 26.324 19.8642C26.5981 19.9778 26.8324 20.17 26.9972 20.4167C27.162 20.6634 27.25 20.9534 27.25 21.25V22.75ZM28.75 21.25C28.75 20.8522 28.908 20.4707 29.1893 20.1894C29.4706 19.9081 29.8522 19.75 30.25 19.75C30.6478 19.75 31.0294 19.9081 31.3107 20.1894C31.592 20.4707 31.75 20.8522 31.75 21.25V25.75C31.75 26.1479 31.592 26.5294 31.3107 26.8107C31.0294 27.092 30.6478 27.25 30.25 27.25H28.75V21.25ZM30.25 36.25C29.8522 36.25 29.4706 36.092 29.1893 35.8107C28.908 35.5294 28.75 35.1479 28.75 34.75V33.25H30.25C30.6478 33.25 31.0294 33.4081 31.3107 33.6894C31.592 33.9707 31.75 34.3522 31.75 34.75C31.75 35.1479 31.592 35.5294 31.3107 35.8107C31.0294 36.092 30.6478 36.25 30.25 36.25ZM34.75 31.75H30.25C29.8522 31.75 29.4706 31.592 29.1893 31.3107C28.908 31.0294 28.75 30.6479 28.75 30.25V28.75H34.75C35.1478 28.75 35.5294 28.9081 35.8107 29.1894C36.092 29.4707 36.25 29.8522 36.25 30.25C36.25 30.6479 36.092 31.0294 35.8107 31.3107C35.5294 31.592 35.1478 31.75 34.75 31.75ZM34.75 27.25H33.25V25.75C33.25 25.4534 33.338 25.1634 33.5028 24.9167C33.6676 24.67 33.9019 24.4778 34.176 24.3642C34.4501 24.2507 34.7517 24.221 35.0426 24.2789C35.3336 24.3367 35.6009 24.4796 35.8107 24.6894C36.0204 24.8992 36.1633 25.1664 36.2212 25.4574C36.2791 25.7484 36.2493 26.05 36.1358 26.3241C36.0223 26.5982 35.83 26.8324 35.5834 26.9972C35.3367 27.1621 35.0467 27.25 34.75 27.25Z"
                        fill="#343330" />
                    </g>
                    <rect x="4" y="4" width="48" height="48" rx="24" stroke="#F9FAFB" stroke-width="8" />
                    <defs>
                      <clipPath id="clip0_0_22898">
                        <rect width="24" height="24" fill="white" transform="translate(16 16)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { MBankIcon, MDiagramIcon, MPhoneIcon, MPieIcon, MTargetIcon } from '@/components/icons'
import type { AnimationItem } from 'lottie-web'
import { ref } from 'vue'
import { Blottie, type BlottieExpose } from 'blottie'
import Spaces from '~/components/Spaces.vue';
import MoneySaving from '~/components/MoneySaving.vue';
const mishen = new URL('../assets/lottie/mishen.json', import.meta.url).href
const mishen1 = new URL('../assets/lottie/1.json', import.meta.url).href
const mishen2 = new URL('../assets/lottie/2.json', import.meta.url).href
const mishen3 = new URL('../assets/lottie/banka.json', import.meta.url).href
const mishen4 = new URL('../assets/lottie/banka 2.json', import.meta.url).href
const mishen5 = new URL('../assets/lottie/diagrama_kv.json', import.meta.url).href
const mishen6 = new URL('../assets/lottie/diagramma.json', import.meta.url).href
const mishen7 = new URL('../assets/lottie/diagramma_2.json', import.meta.url).href
const mishen8 = new URL('../assets/lottie/kubok.json', import.meta.url).href
const mishen9 = new URL('../assets/lottie/diagrama_kv.json', import.meta.url).href
const mishen10 = new URL('../assets/lottie/procent.json', import.meta.url).href
const mishen11 = new URL('../assets/lottie/3.json', import.meta.url).href
const mishen12 = new URL('../assets/lottie/6.json', import.meta.url).href
const mishen13 = new URL('../assets/lottie/9.json', import.meta.url).href
const banka = new URL('../assets/lottie/2.json', import.meta.url).href
const diagram = new URL('../assets/lottie/diagrama_kv.json', import.meta.url).href
const setting = new URL('../assets/lottie/6.json', import.meta.url).href
const blottie = ref<BlottieExpose>()

function onReady(anim?: AnimationItem) {
  anim?.play()
}
const reviews: any = ref(
  [

    {
      id: 1,
      name: 'Arlene McCoy',
      image: new URL('../assets/images/avatars/1.png', import.meta.url).href,
      text: "Thanks to Midas, I've ditched my old budgeting spreadsheets. The app's tools and alerts ensure I never overspend, and I'm more financially aware."
    },
    {
      id: 2,
      name: 'Guy Hawkins',
      image: new URL('../assets/images/avatars/2.png', import.meta.url).href,
      text: "As someone who used to struggle with budgeting, Midas has been a lifesaver. It's so easy to input expenses and view spending trends. The budgeting tools and notifications keep me on track, and I've finally been able to gain control over my finances."
    },
    {
      id: 2,
      name: 'John Keep',
      image: new URL('../assets/images/avatars/3.png', import.meta.url).href,
      text: "Midas has transformed my financial life! Tracking expenses is a breeze, and the insights have helped me save more than ever."
    },
  ]

)
</script>
<style lang="scss">
.top-section {
  h1 {
    color: #0D0D0D;
    text-align: center;
    font-family: 'Stapel';
    font-size: 104px;
    font-weight: 500;
    line-height: normal;
  }

  p {
    color: #404040;
    text-align: center;
    font-family: 'Gilroy';
    font-size: 24px;
    font-weight: 400;
    max-width: 1064px;
    margin: auto;
    line-height: normal;
    margin-top: 24px;
  }
}

.advantage {
  padding: 46px 30px;
  border-radius: 32px;
  background: #262626;
  height: 531px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h5 {
    color: #FFF;
    font-family: 'Stapel';
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 24px;
    line-height: normal;
  }

  p {
    margin-top: 24px;
    color: #B3B3B3;
    font-family: 'Gilroy';
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
  }

  .anime {
    width: 190.745px;
    height: 191.459px;
    margin: auto;
  }
}

.dark {
  h3 {
    color: #0D0D0D;
  }

  .content {
    background: #0D0D0D;

    h3 {
      color: #E8E8E8;
    }

    p {
      color: white;
    }
  }

  &.white {
    h3 {
      color: white;
    }

    .content {
      background: white;

      h3 {
        color: #0D0D0D;
      }

      p {
        color: #404040;
      }
    }
  }
}

.reviews {
  margin-top: 40px;
  height: 594px;
  border-radius: 32px;
  background: var(--system-white-blocks-elements, #FFF);
  display: flex;
  align-items: center;
  gap: 74px;

  .box {
    border-radius: 9.175px;
    background: var(--grey-100, #FCFCFC);
    gap: 29.359px;
    padding: 22.019px;
    width: 365.15px;
    display: flex;
    flex-direction: column;

    p {
      overflow: hidden;
      color: var(--secondary-400, #666);
      text-overflow: ellipsis;
      whitespace: nowrap;
      font-family: Gilroy;
      font-size: 14.679px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .info {
      display: flex;
      align-items: center;
      gap: 7px;

      h6 {
        color: var(--secondary-500-main, #404040);
        font-family: 'Gilroy';
        font-size: 11.01px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
}</style>
