<template>
<Layout>
    <div>
        <h5>Tag Id: {{$page.tag.id}}</h5>
        <pre  style="color:white">
            {{$page.tag}}
        </pre>
        <span v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
            <g-link :to="edge.node.path" style="color:white;margin-right:15px">{{edge.node.title}}</g-link>
        </span>
    </div>
</Layout>
</template>

<page-query>
query Tag ($id:ID!) {
  tag(id:$id){
    id
    path
    belongsTo {
      edges {
        node {
          ... on Documentation {
            title
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
    
}
</script>