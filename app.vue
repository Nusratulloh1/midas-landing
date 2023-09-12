<template>
  <NuxtLayout>
    <div>
      <NuxtLoadingIndicator color="#ffffff" :height="5" />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
  
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
useSeoMeta({
  title: 'Midas',
  ogTitle: 'Midas | Financial Freedom',
  description: 'We aim to shift your prism of association with savings, by developing our solutions, and turn saving from a necessity, into an ingrained way of your life.',
  ogDescription: 'We aim to shift your prism of association with savings, by developing our solutions, and turn saving from a necessity, into an ingrained way of your life.',
  keywords: `Finance App, Budget App, Savings App, Financial Goals App, Money Management App, Expense Tracker, Personal Finance App, Budget Planner App, Financial Analytics App, Multi-currency Finance App, Automated Savings App, Finance Hub App, Smart Budgeting App, Financial Forecast App,   Google Finance App,   App Financing,   Apps for Finance,   Financing App,   Finances App,   App for Finances,   Finance Apps,   App Finances,   Financing Apps,   App Finance,   Apps Finance,   Best Finance Apps,   Best Finance App,   Best App for Finance,   Yahoo Finance App,   Finance Yahoo App,   Apps Yahoo Finance,   App for Yahoo Finance,   Yahoo Finance Apps,   App Yahoo Finance,   Apps for Personal Finance,   App for Personal Finance,   Personal Finance Apps,   Best Personal Finance Apps,   Personal Finances App,   Best Personal Finance App,   Personal Financing App,   App for Personal Finances,   Best App for Personal Finance,   Personal Finance App,   Best App Personal Finance,   App Personal Finance,   Best App for Personal Finances,   Apps Personal Finance,   Best Apps Personal Finance,   Best Personal Finances App,   Top Finance App,   Snap Finance App,   Finance Tracking App,   Budget Tracking App,   Financial Planning App,   Investment Tracking App,   Debt Management App,   Financial Freedom App,   Money Game App,   Shared Budget App,   Collaborative Finance App,   Family Budget App,   Couples Finance App,   Finance App for Students,   Retirement Planning App,   Tax Planning App,   Expense Management App,   Bill Reminder App,   Finance App with Notifications,   Finance App for EU,   Finance App for UK,   Finance App for USA,   Finance App with Promo Video,   Early Access Finance App,   Virtual Finance App,   Analytical Finance App,   Finance App Reviews,   Finance App Testimonials,   Finance App Roadmap,   Community-Driven Finance App,   Finance App Newsletter,   Finance App Terms,   Finance App Privacy,   Finance App Cookies,   Finance App Support,   Finance App Community,   Finance App Features,   Finance App Insights,   Finance App Widgets,   Finance App Stories,   Finance App Notifications,   Finance App Categories,   finance App Multi-Currency, finance App Goals, finance App Budgets, finance App Savings, finance App Transactions, finance App Activities, finance App Overview, Finance App Guide, money savings, saving methodology, savings methodology, saving app, money savings app, money saving app, all in one finance management, all in one cards, personal finance manager, personal finance assistant, finance assistant, financial app, savings app`,
  ogImage: 'https://i.imgur.com/GlW51Ae.jpg',
  twitterCard: 'summary_large_image',
})

if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}

</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>