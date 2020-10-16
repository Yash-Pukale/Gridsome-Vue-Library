<template>
  <layout>
    <div class="row">
      <div class="col-12">
        <g-image class="ml-4" alt="Avatar" src="~/avatar.png" width="95"/>
        <h3 class="m-0">Yash Pukale <span class="float-right"> My Blogs..</span></h3>
        <div>Solutions Developer</div>
          <b-button id="contact_me" variant="outline-warning" size="sm">Contact Me</b-button>
        <b-tooltip target="contact_me" triggers="click" variant="warning" placement="left">
          Ping me personally at <b>yashpukale@gmail.com</b>
        </b-tooltip>
      </div>
    </div>
    <div class="pt-md-3">
      <p>
        Hello, I am <span style="color:yellow">Yash</span>, working as a Solutions Developer in <span style="color:yellow">Aurochs Software Pvt Ltd.</span>
        Today, we have started working on a new technology <span style="color:yellow">Gridsome</span>, a Vue library.
      </p>
      <h5>
        Let'z get started..
      </h5>
      <p>
        <b-icon class="align-middle" icon="circle-fill" animation="throb" font-scale="0.5"></b-icon> &nbsp;Install Gridsome CLI tool<br/>
        <span style="color:yellow; margin-left: 30px">npm install --global @gridsome/cli</span>
      <p/>
      <p>
        <b-icon class="align-middle" icon="circle-fill" animation="throb" font-scale="0.5"></b-icon> &nbsp;Create Gridsome Project<br/>
        <span style="color:yellow; margin-left: 30px">gridsome create repo-name</span>
      <p/>
      <p>
        <b-icon class="align-middle" icon="circle-fill" animation="throb" font-scale="0.5"></b-icon> &nbsp;Inside your project folder<br/>
        <span style="color:yellow; margin-left: 30px">gridsome develop</span>
      </p>
      <h5>
        and there you go.. 🚀
      </h5>
      <div style="border-top: 1px solid white; padding-bottom: 10px"></div>
        <g-link to="/new-blog" style="margin-right: 10px">
          <b-button variant="outline-warning" size="sm">First Blog</b-button>
        </g-link>
        <g-link to="/second-blog">
          <b-button variant="outline-warning" size="sm">Second Blog</b-button>
        </g-link>

    </div>
    <div>
      <g-link v-for="edge in $page.post.edges" :key="edge.node.id" :to="edge.node.path">
        {{edge.node.title}}
      </g-link>
      <!-- <g-link v-for="edge in $page.docs.edges" :key="edge.node.id" :to="edge.node.path">
        {{edge.node.title}}
      </g-link> -->
    </div>
  </layout>
</template>

<page-query>
 query Post {
  post: allPost {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>



<script>
export default {
  name: "Blogs",
  metaInfo: {
    title: 'Blogs'
  }
}
</script>

<style>
.text-grey {
  color: gray;
}
</style>