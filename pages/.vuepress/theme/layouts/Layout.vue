<template>
  <div class="theme-container">
    <Site-Header v-if="$page.frontmatter.header" />
    <Content/>
    <Site-Footer v-if="$page.frontmatter.footer" />
  </div>
</template>