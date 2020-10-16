<template>
  <Layout>
    <h1>{{ $page.documentation.title }}</h1>
    <h5>
      Tags:
    <span :style="`padding:5px; margin-right:5px;background-color:${tag.color}`"
     v-for="tag in $page.documentation.tags" :key="tag.id">
     <g-link :to="tag.path" style="color:white">{{tag.id}}</g-link>
     </span>
    </h5>
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
    tags {
      id
      color
      path
    }
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