<template>
  <div class="bg-black">
    <section
      ref="container"
      class="section pt-10 top-section h-[750px] relative overflow-hidden"
      style="transition: 0.3s ease-out all"
    >
      <div
        class="container mx-auto flex items-center flex-wrap md:flex-nowrap justify-between"
      >
        <div class="w-full md:w-[60%] 2xl:w-[50%]">
          <div class="flex items-center gap-2.5">
            <span class="relative flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-95 bg-[#62AF6080]"
              ></span>
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-[#92E490]"
              ></span>
            </span>
            <span class="text-[#92E490] font-semibold">
              Available for both iOS and Android
            </span>
          </div>
          <h1 class="my-3 md:my-6">Your Financial Mastery, Our Mission</h1>
          <p>
            Cashier simplifies complex financial tracking into an empowering and
            user-friendly experience.
          </p>
          <button
            class="border-2 border-[#92E490] text-sm sm:text-base rounded-full h-12 px-6 font-gilroy text-white mt-3 md:mt-6 flex items-center hover:bg-[#92E490] transition-all"
          >
            <div class=" font-semibold">Get started -</div> It’s free
          </button>
        </div>
        <div
          class="w-full sm:w-[50%] mx-auto md:m-0 max-w-[564px] mt-10 md:mt-0"
        >
          <img
            :style="isMobile ? '' : layer0"
            class="w-full"
            src="@/assets/images/c.svg"
            alt="image"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useParallax } from "@vueuse/core";
import { MPieIcon, MTargetIcon } from "@/components/icons";
import { useModal } from "@/composables";
import { ref, computed, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const container = ref(null);
const isMobile = useMediaQuery("(max-width: 768px)");
const parallax = reactive(useParallax(container));
const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 70
  }px) scale(1.11)`,
}));

const modal = useModal();
const sendRequest = () => {
  modal.setTitle("");
  modal.setWidth("60%");
  modal.showModal();
};
</script>
<style lang="scss">
.top-section {
  span {
    color: #92e490;
    font-family: "Stapel";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  h1 {
    color: #fff;
    font-family: "Stapel";
    font-size: 72px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  p {
    color: #fafafa;
    font-family: Gilroy;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

@media (max-width: 1024px) {
  .top-section {
    h1 {
      font-size: 40px;
      line-height: 105%;
    }
    span {
      font-size: 12px;
    }
    p {
      font-size: 14px;
      margin-top: 16px;
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .top-section {
    h1 {
      font-size: 50px;
    }
  }
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .top-section {
    h1 {
      font-size: 65px;
    }
  }
}
</style>