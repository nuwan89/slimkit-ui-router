
---

# Slimkit Router

Simple SPA router written in javascript

Install

```bash
npm i @slimkit-ui/router
```
Define your routing data

```javascript

export let routeData = {
    
    "/": { component: async () => [await import('./pages/Form.svelte'), { }] },
    "/about": { component: async () => [await import('./pages/About.svelte')] },
    "/store": {
        '/cat': {
            component: async () => [await import('./pages/store-inventory/ListCategory.svelte')],
            '/:id': {
                component: async (args) => {
                    let params = args.id == 'new' ? {} : { isEdit: true, catId: args.id }
                    return [await import('./pages/store-inventory/Category.svelte'), params]
                },
            }
        },
    }
}
```

Initialize the router
```javascript
<script>
import { init, navigate } from "@slimkit-ui/router";
import { onMount } from "svelte";
import { currentPage, pageParams } from "./stores/page.store";

onMount(async ()=>{
		let routingData = await init({...routeData})
		pageParams.set({...routingData.params})
		currentPage.set(routingData.module)
	})

    async function onLinkClick(event) {
		let {module, params} = await navigate(event.detail)
		pageParams.set({...params})
		currentPage.set(module)
	}

<script>
```
