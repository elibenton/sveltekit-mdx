<script context="module">
  export async function load({ fetch }) {
    const url = `/photos.json`
    const res = await fetch(url)

    if (res.ok) {
      return {
        status: res.status,
        props: {
          images: await res.json()
        }
      }
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    }
  }
</script>

<script>
  import Gallery from 'svelte-brick-gallery'
  export let images
</script>

<Gallery {images} gap={0} itemHeight={340} />

<img src="/src/images/1.jpg" />
