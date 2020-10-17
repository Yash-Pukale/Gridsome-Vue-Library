---

title : Markdown Title
excerpt : The red border is applied from the md file.. bydefault its yellow !!
layout: 
    component : ~/layouts/focus.vue
    props :
        color : red
tags: [vue, tutorial]

---
import BigButton from "~/components/BigButton.vue"
import websites from "~/data/websites.json"
import LatestBook from "~/sections/LatestBook.md"


# {{ $frontmatter.title }} 

by {{ websites.name }}

<LatestBook />

Here starts the Markdown content ...

This will be the first page !!!

<BigButton color="red"/>

<slot name="ad" />
