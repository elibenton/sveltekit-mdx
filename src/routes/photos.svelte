<script>
  import { onMount } from 'svelte'

  import Gallery from 'svelte-brick-gallery'

  export let images = [
    { src: 'photos/1.jpg' },
    // { src: 'public/images/2.jpg' },
    // { src: 'public/images/3.jpg' },
    // { src: 'public/images/4.jpg' },
    // { src: 'public/images/5.jpg' },
    // { src: 'public/images/6.jpg' },
    // { src: 'public/images/7.jpg' },
    // { src: 'public/images/8.jpg' },
    // { src: 'public/images/9.jpg' },
    // { src: 'public/images/10.jpg' },
    // { src: 'public/images/11.jpg' },
    // { src: 'public/images/12.jpg' },
    // { src: 'public/images/13.jpg' },
    // { src: 'public/images/14.jpg' },
    // { src: 'public/images/15.jpg' },
    // { src: 'public/images/16.jpg' },
    // { src: 'public/images/17.jpg' },
    // { src: 'public/images/18.jpg' },
    // { src: 'public/images/19.jpg' },
    // { src: 'public/images/20.jpg' },
    // { src: 'public/images/21.jpg' },
    { src: 'public/images/22.jpg' }
  ]

  let mounted = false

  $: console.log(mounted)

  onMount(() => {
    mounted = true
  })
</script>

{#if mounted}
  <Gallery {images} gap={0} itemHeight={340} />
{/if}

<!-- <img src="public/images/1.jpg" /> -->
