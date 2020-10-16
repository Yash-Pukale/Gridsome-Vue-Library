<template>
  <Layout>
    <h1>{{ $page.documentation.title }}</h1>
    <p class="intro">{{ $page.documentation.excerpt }}</p>
    <VueRemarkContent>
        <template v-slot:ad>
            <ad/>
        </template>
    </VueRemarkContent>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    excerpt
    path
  }
}
</page-query>
<script>
import ad from "../components/Ad"
export default {
    components:{
        ad,
    }
}
</script>