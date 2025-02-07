<script>
              console.log('Little Code.')
              import { onMount } from 'svelte';
              import { page } from '$app/stores';
              import { goto } from '$app/navigation';
              
              let path = '';
              
              onMount(() => {
              const unsubscribe = page.subscribe(value => {
              path = value.path;
              });
              
              return unsubscribe;
              });
              
              function navigate() {
              goto(path);
              }
</script>